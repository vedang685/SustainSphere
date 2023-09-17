'use client'

import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import {Button} from "@/app/components/ui/button";
import {Alert} from "@/app/components/ui/alert";
import {Label} from "@/app/components/ui/label";

export const Form = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [signinSuccess, setSigninSuccess] = useState(false)


  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email,
        password,
        callbackUrl
      })
      console.log('Res', res)
      if (!res?.error) {
        setSigninSuccess(true)
        router.push(callbackUrl)
      } else {
        setError('Invalid email or password')
      }
    } catch (err: any) {
    }
  }

  const onSubmitGoogle = async () => {
    try {
      const res = await signIn('google', {redirectUrl: '/?userType=user'})
      console.log('Res', res)
      if (!res?.error) {
        setSigninSuccess(true)
        router.push(callbackUrl)
      } else {
        setError('Invalid email or password')
      }
    } catch (err: any) {}
  }

  return (
      <>
        <form onSubmit={onSubmit} className="space-y-8 w-full sm:w-[350px]">
          <div className="grid w-full items-center gap-1.5">
            <Label className="px-1 text-gray-800" htmlFor="email">
              Email
            </Label>
            <input
                id="email"
                required={true}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-3 px-5 block w-full text-gray-600 border border-gray-400
                   rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="example@sustainsphere.com"
            />
          </div>

          <div className="grid w-full  items-center gap-1.5">
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
                onClick={() => setLoading(!loading)
                }
            >
              Sign in
            </Button>
          </div>
        </form>
        <div className="py-1 flex items-center text-xs text-gray-400
         uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200
          before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200
          after:ml-6">Or</div>

        <button type="button"
                className="w-full py-3 px-4 inline-flex justify-center
                 items-center gap-2 rounded-md border font-medium bg-white text-gray-700
                 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2
                 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all
                 text-sm"
                onClick={()=>{
                        onSubmitGoogle()
                }}
        >
          <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
            <path
                d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                fill="#4285F4"/>
            <path
                d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                fill="#34A853"/>
            <path
                d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                fill="#FBBC05"/>
            <path
                d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                fill="#EB4335"/>
          </svg>
          Sign in with Google
        </button>
</>
  )
}
