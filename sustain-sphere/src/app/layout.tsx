import './globals.css'
import type { Metadata } from 'next'
import Navbar from "@/app/components/ui/navbar/NavBar";
import React from "react";
import Providers from "@/app/components/Providers";
import {Poppins} from "@next/font/google";
import Footer from "@/app/components/Footer";

// TODO: add the meta data
export const metadata: Metadata = {
  title: 'SustainSphere',
  description: 'test',
}

const poppins = Poppins({
    subsets : ['latin'],
    weight: ['600'],
    style: [ "normal"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body className={poppins.className}>
      <Providers>
          <Navbar/>
          {children}
      </Providers>
      <Footer/>
      </body>
      </html>
  )
}
