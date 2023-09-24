import {NextAuthOptions} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider, {CredentialsProviderType} from "next-auth/providers/credentials"
import {randomBytes, randomUUID} from "crypto";
import Users from "@/lib/db/users";
import {ensureDbConnected} from "@/lib/db/databaseConnect";

export const options: NextAuthOptions = {
    pages: {
        signIn: '/signin'
    },
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
                const isUser = await Users.findOne({ email });
                if(!isUser){
                    return null
                }

                const res = await fetch("http://localhost:5000/api/auth/signin", {
                    method: 'POST',
                    body: JSON.stringify({
                        email:email,
                        password:credentials.password
                    }),
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }
                })

                const user = await res.json()
                if (!res.ok) {
                    return null
                }
                if (res.ok && user) {
                    return user
                }
                return null
            }
        }),
    ],
    callbacks: {
        jwt: async ({ token, user,session }) => {
            if (user) {

            }
            return token;
        },
        async session({ session,token, user }) {
            // if (session?.user) {
            //     console.log("jwt callback", {token,user,session})
            // }
            return session;
        },
    },
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


// import { DefaultUser } from 'next-auth';
// declare module 'next-auth' {
//     interface Session {
//         user?: DefaultUser & { id: string; role: string };
//     }
//     interface User extends DefaultUser {
//         role: string;
//     }
// }

