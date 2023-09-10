import React from 'react'
import { Inter, Poppins, Lora } from "@next/font/google";
const inter = Inter({
    subsets: ['latin'],
    weight: ['400'],
    style: [ "normal"]
}) 
const pops = Poppins({
    subsets: ['latin'],
    weight: ['400'],
    style: [ "normal"]
}) 
const lora = Lora({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"]
})

export default function Blogbg() {
  return (
    <div className='bg-[#E5E5E54D] pt-24 pb-6'>
        <p className='text-[#495057] mx-4 mb-8'>Related Blogs</p>
        <div className='flex justify-evenly relative mb-8'>
            <div className='w-[32%] rounded-lg text-white bg-black '>
                <img className="h-full rounded-lg opacity-[45%]" src='/images/assets/revit/blogbg1.png'/>
                <div className='absolute top-[30%] w-[32%] flex flex-col'>
                <p style={pops.style} className='px-4 text-md w-[65%] mt-3 mb-8'>Community Engagement & Partnering</p>
                <p style={inter.style} className='px-4 text-xs leading-5 w-full'>Experience seamless sustainability reporting with SustainSphere's Integrated Reporting Dashboard. Consolidate and visualize your organization's environmental, social, and financial data in one user-friendly platform. Gain valuable insights, track performance, and streamline reporting for a more sustainable future.</p>
                </div>
            </div>
            <div className='w-[32%] rounded-lg text-white bg-black '>
                <img className="w-full rounded-lg opacity-[45%]" src='/images/assets/revit/blogbg2-1.png'/>
                <div className='absolute top-[30%] w-[32%] flex flex-col'>
                <p style={pops.style} className='px-4 text-md w-[52%] mt-3 mb-8'>Dashboard Integrated Reporting</p>
                <p style={inter.style} className='px-4 text-xs w-full leading-5'>Experience seamless sustainability reporting with SustainSphere's Integrated Reporting Dashboard. Consolidate and visualize your organization's environmental, social, and financial data in one user-friendly platform. Gain valuable insights, track performance, and streamline reporting for a more sustainable future.</p>
                </div>
            </div>
            <div className="flex w-[32%] rounded-lg relative flex-col px-4 py-4 pt-10 bg-white border-2 border-[#11633821] shadow-md text-black hover:bg-green-500 hover:text-white hover:cursor-pointer group">
                    <img className="mx-3.5" src="/images/assets/ss4.png" width={54} height={54} alt="Image Description"/>
                    <div className="p-4 md:p-4">
                        <h3 style={pops.style} className="text-lg mt-1 mb-3">
                        View All 
                        </h3>
                        <p style={inter.style} className="mt-1 text-[#666666] group-hover:text-white  font-semibold">
                        "SustainSphere empowers you to enhance and monitor your ESG performance, fostering a sustainable and responsible future. Join us in our mission to create a positive impact.
                        </p>
                        <a href="/">
                        <img className="absolute bottom-2" src="/images/assets/arrow-right-line.svg" width={20} height={20}/>
                        </a>
                    </div>
                </div>      

        </div>
    </div>
  )
}

