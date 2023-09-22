'use client'
import {useEffect, useState} from "react";
import HeroSectionMain from "@/app/components/ui/homepage/HeroSectionMain";
import {Poppins, Roboto} from "@next/font/google";
import Features from "@/app/components/ui/homepage/SSFeatures";
import HeroSectionINFO from "@/app/components/ui/homepage/HeroSectionINFO";

const poppins = Poppins({
    subsets : ['latin'],
    weight: ['600'],
    style: [ "normal"]
})


export default  function Home() {
    const [loading, setLoading] = useState(false)
  return (
      // <main className="bg-white text-black flex min-h-screen flex-col items-center justify-between p-24">
      //     hello world
      //     <UserCard user={session?.user} pagetype="Home" />
          <main style={poppins.style} className="container mx-auto mt-12 ">
              <div>
                  <HeroSectionMain/>
                  <HeroSectionINFO/>
                  <Features/>
              </div>
          </main>
  )
}
