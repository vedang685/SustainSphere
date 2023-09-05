'use client'

import Link from "next/link";
import { ChangeEvent, useState } from "react";
import axios from 'axios';
import { toast } from "react-hot-toast";
import { generateToken } from "../../lib/SignUpToken"
import { verifyToken } from "../../lib/SignUpToken"
import { hashPassword } from "../../lib/passwordHashing"

export default function SignUpPage() {
    
    const [email, setEmail] = useState('')
    const [getPassword, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{4,}$/

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
    
        // Check if the new password matches the regex pattern
        if (passwordPattern.test(newPassword)) {
          setPassword(newPassword);
        }
        else {
          setPassword('');
        }
      };

      const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const verificationToken  = verifyToken(generateToken(email))
        const password = await hashPassword(getPassword)

        try {
          const {data}= await axios.post(
            `${process.env.BACKEND_BASE_URL}api/auth/signup`,
            {
              email,
              password,
              verificationToken
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          );
          console.log(data)
          toast.success(data.message);
          // setIsAuthenticated(true);
        } catch (error) {
          toast.error("error logging in");
          // setIsAuthenticated(false);
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
                <svg xmlns="http://www.w3.org/2000/svg"  height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-400q-33 0-56.5-23.5T200-480q0-33 23.5-56.5T280-560q33 0 56.5 23.5T360-480q0 33-23.5 56.5T280-400Zm0 160q-100 0-170-70T40-480q0-100 70-170t170-70q67 0 121.5 33t86.5 87h352l120 120-180 180-80-60-80 60-85-60h-47q-32 54-86.5 87T280-240Zm0-80q56 0 98.5-34t56.5-86h125l58 41 82-61 71 55 75-75-40-40H435q-14-52-56.5-86T280-640q-66 0-113 47t-47 113q0 66 47 113t113 47Z"/></svg>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="password"
          onChange={handlePasswordChange}
          value={getPassword}
          name="password"
          className="rounded-lg border-0 outline-none w-full px-3 py-2"
          required
        />
        <span
          onClick={togglePasswordVisibility}
        >
          {showPassword ? 
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg> : 
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg>}
        </span>
      </div>
                <button className="btn btn-primary bg-blue-500 rounded-full text-white text-center h-10" type="submit" >Sign Up</button>
           </form>
            <div>
                <p className="">Already Have an account? <Link href="" className="text-blue-500">Sign In</Link></p>
            </div>
        </div>
    );
}