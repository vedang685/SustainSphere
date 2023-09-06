'use client'

import Link from "next/link";
import { ChangeEvent, useState } from "react";
import axios from 'axios';
// import { toast } from "react-hot-toast";
import { hashPassword } from "@/lib/passwordHashing"
import EmailLogo from "../../../../../public/mail_FILL0_wght400_GRAD0_opsz24.svg"
import KeyIcon from "../../../../../public/key_FILL0_wght400_GRAD0_opsz24.svg"
import Eye_open from "../../../../../public/visibility_FILL0_wght400_GRAD0_opsz24.svg"
import Eye_close from "../../../../../public/visibility_off_FILL0_wght400_GRAD0_opsz24.svg"
import Image from "next/image";


export default function SigninPage() {
    
    const [email, setEmail] = useState('')
    const [getPassword, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const password =  hashPassword(getPassword)
    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
     
      try {
        const {data}= await axios.post(
          "http://localhost:5000/api/auth/signin",
          {
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    }


    return (
        <div className="flex flex-col gap-5 items-center bg-white py-6 text-gray-600">
            <div className="flex flex-col items-center">
            <h1 className="text-3xl">Hey there,</h1>
            <h1 className="text-5xl max-sm:text-4xl">Welcome Back</h1>
            </div>
           <form action="" onSubmit={handleSubmit} className="flex flex-col gap-6 py-6">
                <div className="flex flex-row items-center border rounded text-gray-400">
                <Image src={EmailLogo} alt="" className="w-4 h-4 mx-2" />
                     <input 
                      type="email"
                      placeholder="email"
                      onChange={(e) => setEmail(e.target.value)} 
                      value={email}
                      name="email"
                      className="rounded-lg border-0 outline-none w-full px-3 py-2"
                      required
                      />
                </div>
                <div className="flex flex-row items-center border rounded">
            <Image src={KeyIcon} alt="" className="w-4 h-4 mx-2" />
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={getPassword}
          name="password"
          className="rounded-lg border-0 outline-none w-full px-3 py-2"
          required
        />
        <span
          onClick={togglePasswordVisibility}
        >
          {showPassword ? 
          <Image src={Eye_open} alt="" className="w-4 h-4 mx-2" /> : 
          <Image src={Eye_close} alt="" className="w-4 h-4 mx-2" />}
        </span>
      </div>
                <button className="btn btn-primary bg-blue-500 rounded-full text-white text-center h-10" type="submit" >Sign In</button>
           </form>
            <div>
                <p className="">Don't Have an account? <Link href="" className="text-blue-500">Sign Up</Link></p>
            </div>
        </div>
    );
}