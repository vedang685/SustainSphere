import './styles.css'
import React from 'react'

import { Inter, Poppins } from "@next/font/google";
import Link from "next/link";
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

function revit() {
  return (
    <div className='main w-full mt-6 relative'>
        <div className='w-full flex flex-col relative'>
            <div className='flex items-center justify-center '>
                <img src='/images/assets/revit/revitlogo.png'/>
                <div className="px-10 w-full absolute bottom-0">
                    <div className="border-2 border-green-600 h-2 bg-white rounded-full "/>
                </div>
            </div>
            <div className="relative">
                <div className="flex flex-row w-full px-10 justify-around absolute top-0">
                    <div className="border-2 w-1 h-20 border-green-600"></div>
                    <div className="border-2 w-1 h-20 border-green-600"></div>
                    <div className="border-2 w-1 h-20 border-green-600"></div>
                    <div className="border-2 w-1 h-20 border-green-600"></div>
                    <div className="border-2 w-1 h-20 border-green-600"></div>
                    <div className="border-2 w-1 h-20 border-green-600"></div>
                </div>
            </div>
        </div>


        <div className="w-full flex gap-x-6 py-8 pt-10 px-10  my-6">
            <div className="flex relative flex-col px-4 pb-6 bg-white border-2 border-[#11633821] rounded-xl shadow-md text-black hover:bg-green-500 hover:text-white hover:cursor-pointer group">
                <div className="p-4 flex-1 md:p-5">
                <Link href='/revit/environmental'>
                    <img className="w-16 h-16 my-4" src="/images/assets/ss1.png" alt="Image Description"/>
                    <h3 style={pops.style} className="text-lg  mb-3">
                    Environmental Management
                    </h3>
                    <p style={inter.style} className="mt-1 text-[#666666] group-hover:text-white  font-semibold mb-8">

                    Explore a premier online platform for cutting-edge environmental management solutions. 
                    </p>
                    
                    <img className="absolute bottom-2 py-6" src="/images/assets/arrow-right-line.svg" width={20} height={20}/>
                    
                </Link>
                </div>
            </div>
            <div className="flex relative flex-col px-4 pb-6 bg-white border-2 border-[#11633821] rounded-xl shadow-md text-black hover:bg-green-500 hover:text-white hover:cursor-pointer group">
                <div className="p-4 flex-1 md:p-5">
                <Link href='/revit/airpollution'>
                    <img className="w-16 h-16 my-4" src="/images/assets/ss1.png" alt="Image Description"/>
                    <h3 style={pops.style} className="text-lg  mb-3">
                    Air Pollution
                    </h3>
                    <p style={inter.style} className="mt-1 text-[#666666] group-hover:text-white  font-semibold mb-8">

                    Explore a premier online platform for cutting-edge environmental management solutions. 
                    </p>
                    
                    <img className="absolute bottom-2 py-6" src="/images/assets/arrow-right-line.svg" width={20} height={20}/>
                    
                </Link>
                </div>
            </div>
            <div className="flex relative flex-col px-4 pb-6 bg-white border-2 border-[#11633821] rounded-xl shadow-md text-black hover:bg-green-500 hover:text-white hover:cursor-pointer group">
                <div className="p-4 flex-1 md:p-5">
                <Link href='/revit/deforestation'>
                    <img className="w-16 h-16 my-4" src="/images/assets/ss1.png" alt="Image Description"/>
                    <h3 style={pops.style} className="text-lg  mb-3">
                    Deforestation
                    </h3>
                    <p style={inter.style} className="mt-1 text-[#666666] group-hover:text-white  font-semibold mb-8">

                    Explore a premier online platform for cutting-edge environmental management solutions. 
                    </p>
                    
                    <img className="absolute bottom-2 py-6" src="/images/assets/arrow-right-line.svg" width={20} height={20}/>
                    
                </Link>
                </div>
            </div>
            <div className="flex relative flex-col px-4 pb-6 bg-white border-2 border-[#11633821] rounded-xl shadow-md text-black hover:bg-green-500 hover:text-white hover:cursor-pointer group">
                <div className="p-4 flex-1 md:p-5">
                <Link href='/revit/oceanacidification'>
                    <img className="w-16 h-16 my-4" src="/images/assets/ss1.png" alt="Image Description"/>
                    <h3 style={pops.style} className="text-lg  mb-3">
                    Ocean Acidification
                    </h3>
                    <p style={inter.style} className="mt-1 text-[#666666] group-hover:text-white  font-semibold mb-8">

                    Explore a premier online platform for cutting-edge environmental management solutions. 
                    </p>
                    
                    <img className="absolute bottom-2 py-6" src="/images/assets/arrow-right-line.svg" width={20} height={20}/>
                    
                </Link>
                </div>
            </div>
            <div className="flex relative flex-col px-4 pb-6 bg-white border-2 border-[#11633821] rounded-xl shadow-md text-black hover:bg-green-500 hover:text-white hover:cursor-pointer group">
                <div className="p-4 flex-1 md:p-5">
                <Link href='/revit/soilerosion'>
                    <img className="w-16 h-16 my-4" src="/images/assets/ss1.png" alt="Image Description"/>
                    <h3 style={pops.style} className="text-lg  mb-3">
                    Soil Erosion
                    </h3>
                    <p style={inter.style} className="mt-1 text-[#666666] group-hover:text-white  font-semibold mb-8">

                    Explore a premier online platform for cutting-edge environmental management solutions. 
                    </p>
                    
                    <img className="absolute bottom-2 py-6" src="/images/assets/arrow-right-line.svg" width={20} height={20}/>
                    
                </Link>
                </div>
            </div>
            <div className="flex relative flex-col px-4 pb-6 bg-white border-2 border-[#11633821] rounded-xl shadow-md text-black hover:bg-green-500 hover:text-white hover:cursor-pointer group">
                <div className="p-4 flex-1 md:p-5">
                <Link href='/revit/waterpollution'>
                    <img className="w-16 h-16 my-4" src="/images/assets/ss1.png" alt="Image Description"/>
                    <h3 style={pops.style} className="text-lg  mb-3">
                    Water Pollution
                    </h3>
                    <p style={inter.style} className="mt-1 text-[#666666] group-hover:text-white  font-semibold mb-8">

                    Explore a premier online platform for cutting-edge environmental management solutions. 
                    </p>
                    
                    <img className="absolute bottom-2 py-6" src="/images/assets/arrow-right-line.svg" width={20} height={20}/>
                    
                </Link>
                </div>
            </div>

                 
        </div>

    </div>
  )
}

export default revit