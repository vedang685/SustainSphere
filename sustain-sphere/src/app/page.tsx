'use client'
import {options} from "@/app/api/auth/[...nextauth]/options";
import {getServerSession} from "next-auth";
import UserCard from "./components/UserCard"
import {Button} from "@/app/components/ui/button";
import {useState} from "react";

export default  function Home() {
    const [loading, setLoading] = useState(false)
  return (
      // <main className="bg-white text-black flex min-h-screen flex-col items-center justify-between p-24">
      //     hello world
      //     <UserCard user={session?.user} pagetype="Home" />
          <main className="container mx-auto mt-12">

          </main>
  )
}
