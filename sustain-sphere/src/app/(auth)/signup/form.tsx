'use client'
import React, { useState } from 'react'
import {Label} from "@/app/components/ui/label";
import {Button} from "@/app/components/ui/button";
import {Alert} from "@/app/components/ui/alert";


export const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
    const [data,setData] = useState({
        email : "",
        password: "",
        detailProvided: false,
    })

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
                  data
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
      <div className="grid text-gray-800 w-full items-center gap-1.5">
        <Label className="px-1 text-gray-800" htmlFor="email">Email</Label>
        <input
            id="email"
            required={true}
            type="email"
            value={email}
            onChange={(e) =>
                setData({...data,email: e.target.value})
        }
            className="py-3 px-5 block w-full text-gray-600 border border-gray-400
                   rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="example@sustainsphere.com"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label
            className="px-1 text-gray-800"
            htmlFor="password">Password</Label>
        <input id="password"
               type="password"
               value={password}
               required={true}
               className="py-3 px-5 block w-full text-gray-600 border border-gray-400
                   rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
               placeholder="Password"
               onChange={(e) => setData({...data,password: e.target.value})}
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
