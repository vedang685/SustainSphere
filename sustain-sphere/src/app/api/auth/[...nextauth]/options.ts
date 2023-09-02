import {NextAuthOptions} from "next-auth";
import {ensureDbConnected} from "@/lib/databaseConnect";
import {hashPassword} from "@/lib/passwordHashing";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider, {CredentialsProviderType} from "next-auth/providers/credentials"
import {randomBytes, randomUUID} from "crypto";

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID??"",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET??""
        }),
        CredentialsProvider({
            name: 'Email',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "your@email.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                await ensureDbConnected()
                if (!credentials) {
                    return null;
                }
                const email = credentials.email;
                const securePassword = await hashPassword(credentials.password);
                const isUser = await User.findOne({ email });
                if(!isUser){
                    return {
                        status:false,
                        message:"Invalid user!!"
                    }
                }

                const res = await fetch(process.env.SIGIN_URL as string, {
                    method: 'POST',
                    body: JSON.stringify({
                        email:email,
                        password:securePassword
                    }),
                    headers: { "Content-Type": "application/json" }
                })

                const user = await res.json()
                if (res.ok && user) {
                    return user
                }
                return null
            }
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 15 * 24 * 60 * 60,
        generateSessionToken: () => {
            return randomUUID?.() ?? randomBytes(32).toString("hex")
        }
    },
    jwt: {
        maxAge: 15 * 24 * 60 * 6,
    },
}
