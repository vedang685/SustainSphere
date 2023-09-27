'use client'
import exp from "constants";
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

const Features= () =>{
    return(
        <div className="w-full flex gap-x-6 py-8 pt-10 px-10 my-6">
            <div className="flex relative flex-col px-4 py-6 bg-white border-2 border-[#11633821] rounded-xl shadow-md text-black hover:bg-green-500 hover:text-white hover:cursor-pointer group">
                <div className="p-4 flex-1 md:p-5">
                <Link href='/revit'>
                    <img className="w-16 h-16 my-4" src="/images/assets/ss1.png" alt="Image Description"/>
                    <h3 style={pops.style} className="text-lg  mb-3">
                    Environmental Management
                    </h3>
                    <p style={inter.style} className="mt-1 text-[#666666] group-hover:text-white  font-semibold mb-8">

                    Explore a premier online platform for cutting-edge environmental management solutions. Discover a wealth of resources, tools, and insights to assist your organization in achieving excellence in sustainability and environmental stewardship.
                    </p>
                    
                    <img className="absolute bottom-2 py-6" src="/images/assets/arrow-right-line.svg" width={20} height={20}/>
                    
                </Link>
                </div>
            </div>

            <div className="flex relative flex-col px-4 py-6 bg-white border-2 border-[#11633821] rounded-xl shadow-md text-black hover:bg-green-500 hover:text-white hover:cursor-pointer group">
                <div className="p-4 flex-1 md:p-5">
                <Link href='/blog'>
                    <img className="w-16 h-16 my-4" src="/images/assets/ss2.png" alt="Image Description"/>
                    <h3 style={pops.style} className="text-lg  mb-3">
                        Community Engagement & Partnering
                    </h3>
                    <p style={inter.style} className="mt-1 text-[#666666] group-hover:text-white  font-semibold mb-8">
                        Harness the power of community engagement and volunteering through SustainSphere. Connect organizations with impactful volunteer opportunities, access valuable resources, and strengthen your commitment to social responsibility for a better future.
                    </p>
                    
                    <img className="absolute bottom-2 py-6" src="/images/assets/arrow-right-line.svg" width={20} height={20}/>
                </Link>
                </div>
            </div>

            <div className="flex relative flex-col px-4 py-6 bg-white border-2 border-[#11633821] rounded-xl shadow-md text-black hover:bg-green-500 hover:text-white hover:cursor-pointer group">
                <div className="p-4 flex-1 md:p-5">
                <Link href='/dashboard/main'>
                   <img className="w-16 h-16 my-4" src="/images/assets/ss3.png" alt="Image Description"/>
                   <h3 style={pops.style} className="text-lg  mb-3 ">
                    Integrated Reporting Dashboard
                    </h3>
                    <p style={inter.style} className="mt-1 text-[#666666] group-hover:text-white  font-semibold">
                    With SustainSphere's Integrated Reporting Dashboard. Consolidate and visualize your organization's environmental, social, and financial data in one user-friendly platform. Gain valuable insights, track performance, and streamline reporting for a more sustainable future.
                    </p>
                   
                    <img className="absolute bottom-2 py-6" src="/images/assets/arrow-right-line.svg" width={20} height={20}/>
                </Link>
                </div>
            </div>

            <div className="flex relative flex-col px-4 py-6 bg-white border-2 border-[#11633821] rounded-xl shadow-md text-black hover:bg-green-500 hover:text-white hover:cursor-pointer group">
                <div className="p-4 flex-1 md:p-5">
                <Link href='/revit'>
                    <img className="w-16 h-16 my-4" src="/images/assets/ss4.png" alt="Image Description"/>
                    <h3 style={pops.style} className="text-lg  mb-3 ">
                        View All
                    </h3>
                    <p style={inter.style} className="mt-1 text-[#666666] group-hover:text-white  font-semibold">
                        Explore a premier online platform for cutting-edge environmental management solutions. Discover a wealth of resources, tools, and insights to assist your organization in achieving excellence in sustainability and environmental stewardship.
                    </p>
                    
                    <img className="absolute bottom-2 py-6" src="/images/assets/arrow-right-line.svg" width={20} height={20}/>
                </Link>
                </div>
            </div>           
        </div>
    );
}

export default Features;
