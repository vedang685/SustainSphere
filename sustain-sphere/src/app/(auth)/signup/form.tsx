'use client'
import React, { useState } from 'react'
import {Label} from "@/app/components/ui/label";
import {Button} from "@/app/components/ui/button";
import {Alert} from "@/app/components/ui/alert";
import {generateToken} from "@/lib/utils/SignUpToken";
import axios from "axios";
import {router} from "next/client";

export const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
        // TODO : remove the hardcoded url and use the .env
      try {
          const res = await fetch("http://localhost:5000/api/auth/signup", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  email,
                  password,
              }),
          });

          if (res.ok) {

          } else {
              console.log("User registration failed.");
          }
      } catch (error) {
          console.log("Error during registration: ", error);
      }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8 w-full sm:w-[350px]">
      <div className="grid w-full items-center gap-1.5">
        <Label className="px-1" htmlFor="email">Email</Label>
        <input
            id="email"
            required={true}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-3 px-5 block w-full border-gray-200
               rounded-md text-sm focus:border-blue-500 focus:ring-blue-500
               dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            placeholder="example@sustainsphere.com"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label
            className="px-1"
            htmlFor="password">Password</Label>
        <input id="password"
               type="password"
               value={password}
               required={true}
               className="py-3 px-5 block w-full border-gray-200
               rounded-md text-sm focus:border-blue-500 focus:ring-blue-500
               dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
               placeholder="Password"
               onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <Alert>{error}</Alert>}
      <div className="w-full flex justify-center items-center">
        <Button
            className="justify-self-center"
            variant="primaryFullWidth"
            size="default"
            loading={loading}
            onClick={() => setLoading(!loading)}
        >
          SignUp
        </Button>
      </div>
    </form>
  )
}
