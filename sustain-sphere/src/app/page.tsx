import Image from 'next/image'
import {options} from "@/app/api/auth/[...nextauth]/options";
import {getServerSession} from "next-auth";
import UserCard from "./components/UserCard"

export default async function Home() {
  const session = await getServerSession(options)
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          hello
      </main>
  )
}