import exp from "constants";
import { Inter, Poppins } from "@next/font/google";
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
        <div className="w-full flex gap-x-6 py-8 pt-12 px-4 ">
            <div className="flex flex-col px-4 py-4 bg-white border-2 border-[#11633821] shadow-md text-black hover:bg-green-600 hover:text-white">
                <img className="mx-2" src="/images/assets/ss1.png" width={64} height={65} alt="Image Description"/>
                <div className="p-4 md:p-4 ">
                    <h3 style={pops.style} className="text-lg  mb-3 ">
                    Environmental Management
                    </h3>
                    <p style={inter.style} className="mt-1 ">
                    Explore a premier online platform for cutting-edge environmental management solutions. Discover a wealth of resources, tools, and insights to assist your organization in achieving excellence in sustainability and environmental stewardship.
                    </p>
                    <a href="/">
                    <img className="py-2 px-2 mt-4  rounded-full" src="/images/assets/arrow-right-line.svg" width={35} height={25}/>
                    </a>
                </div>
            </div>
            <div className="flex flex-col px-4 py-4 bg-white border-2 border-[#11633821] shadow-md text-black hover:bg-green-600 hover:text-white">
                <img className="mx-2" src="/images/assets/ss2.png" width={64} height={65} alt="Image Description"/>
                <div className="p-4 md:p-4">
                    <h3 style={pops.style} className="text-lg  mb-3">
                    Community Engagement & Partnering
                    </h3>
                    <p style={inter.style} className="mt-1">
                    Harness the power of community engagement and volunteering through SustainSphere. Connect organizations with impactful volunteer opportunities, access valuable resources, and strengthen your commitment to social responsibility for a better future.
                    </p>
                    <a href="/">
                    <img className="py-2 px-2 mt-4  rounded-full" src="/images/assets/arrow-right-line.svg" width={35} height={25}/>
                    </a>
                </div>
            </div>   
           <div className="flex flex-col px-4 py-4 bg-white border-2 border-[#11633821] shadow-md text-black hover:bg-green-600 hover:text-white">
                <img className="mx-2" src="/images/assets/ss3.png" width={64} height={65} alt="Image Description"/>
                <div className="p-4 md:p-4">
                    <h3 style={pops.style} className="text-lg  mb-3 ">
                    Integrated Reporting Dashboard
                    </h3>
                    <p style={inter.style} className="mt-1 ">
                    With SustainSphere's Integrated Reporting Dashboard. Consolidate and visualize your organization's environmental, social, and financial data in one user-friendly platform. Gain valuable insights, track performance, and streamline reporting for a more sustainable future.
                    </p>
                    <a href="/">
                    <img className="py-2 px-2 mt-4  rounded-full" src="/images/assets/arrow-right-line.svg" width={35} height={25}/>
                    </a>
                </div>
            </div>   
           <div className="flex flex-col px-4 py-4 bg-white border-2 border-[#11633821] shadow-md text-black hover:bg-green-600 hover:text-white">
                <img className="mx-3.5" src="/images/assets/ss4.png" width={60} height={60} alt="Image Description"/>
                <div className="p-4 md:p-4">
                    <h3 style={pops.style} className="text-lg  mb-3">
                    View All 
                    </h3>
                    <p style={inter.style} className="mt-1">
                    Explore a premier online platform for cutting-edge environmental management solutions. Discover a wealth of resources, tools, and insights to assist your organization in achieving excellence in sustainability and environmental stewardship.
                    </p>
                    <a href="/">
                    <img className="py-2 px-2 mt-4  rounded-full" src="/images/assets/arrow-right-line.svg" width={35} height={25}/>
                    </a>
                </div>
            </div>      
                          
        </div>
    );
}

export default Features;
