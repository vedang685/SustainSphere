import Blogbg from "../blogbg"
import { Poppins, Lora} from "@next/font/google"

const pops = Poppins({
    weight: ["500"],
    style: ["normal"],
    subsets: ["latin"]
})
const lora = Lora({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"]
})

export default function Deforestation(){
    return(
        <div className="mx-3">
            <div className="relative">
                <div className="rounded-2xl border-2 border-green-700 w-full mt-6 mb-10 bg-black">
                    <img className="w-full rounded-2xl opacity-[70%] " src="/images/assets/ssfeatpages/soilerosion.jpeg"/>
                </div>
                <div className="absolute w-full top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p style={pops.style} className=" text-4xl">Soil Erosion</p>
                </div>
                <div className="absolute sm:bottom-[5%] md:bottom-[20%] lg:bottom-[30%] xl:bottom-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p style={pops.style} className="text-white leading-6 text-xs">Explore a premier online platform for cutting-edge environmental management solutions. Discover a wealth of resources, tools, and insights to assist your organization in achieving excellence in sustainability and environmental stewardship.</p>
                </div>
            </div>
            <div className="w-full relative overflow-hidden">
                <div style={lora.style} className="w-[70%] leading-7 ml-[15%] mb-10 text-[#495057]">
                    <p style={lora.style} className="text-2xl text-black mb-8">
                        Soil Erosion
                    </p>
                    Welcome to our comprehensive webpage on soil erosion, a critical environmental issue that often goes unnoticed but has far-reaching consequences. In this in-depth guide, we will explore the causes, impacts, and potential solutions to address the erosion of one of our planet's most valuable resources - soil.
                    <p style={lora.style} className="text-2xl text-black mt-8 mb-8">
                        The causes:
                    </p>
                    Soil erosion is driven by a range of factors, including:
                    <div className="mt-3 mb-3"></div>
                    Natural Forces: Wind, rainfall, and water runoff naturally erode exposed soil surfaces.
                    <div className="mt-3 mb-3"></div>
                    Deforestation: The removal of trees and vegetation disrupts the natural protection that
                    forests provide against erosion.
                    <div className="mt-3 mb-3"></div>
                    Agricultural Practices: Unsustainable farming methods, such as overgrazing, monoculture,
                    and excessive plowing, leave soil vulnerable to erosion.
                    <div className="mt-3 mb-3"></div>
                    Urbanization: Construction and urban development disturb soil, increasing its susceptibility
                    to erosion.
                    <div className="mt-3 mb-3"></div>
                    Climate Change: Altered weather patterns and increased rainfall intensity can exacerbate
                    soil erosion.
                    <p style={lora.style} className="text-2xl text-black mt-8 mb-8">
                        The Impacts:
                    </p>
                    Soil erosion has cascading effects on ecosystems and society:
                    <div className="mt-3 mb-3"></div>
                    Loss of Fertile Soil: Eroded soil is often nutrient-rich, and its loss decreases agricultural productivity, threatening food security.
                    <div className="mt-3 mb-3"></div>
                    Sedimentation: Eroded soil ends up in water bodies, causing sedimentation that can harm aquatic ecosystems and impair water quality.
                    <div className="mt-3 mb-3"></div>
                    Biodiversity Decline: Erosion destroys habitats, leading to the decline or extinction of plant and animal species.
                    <div className="mt-3 mb-3"></div>
                    Increased Flooding: Sediment clogs waterways, increasing the risk of flooding during heavy rainfall events.
                    <p style={lora.style} className="text-2xl text-black mt-8 mb-8">
                        The Solution:
                    </p>
                    Mitigating soil erosion requires a multifaceted approach:
                    <div className="mt-3 mb-3"></div>
                    Conservation Farming: Implement sustainable farming practices like no-till farming, crop rotation, and contour farming to reduce soil disturbance.
                    <div className="mt-3 mb-3"></div>
                    Riparian Buffers: Establish buffer zones of native vegetation along water bodies to trap sediment and reduce runoff.
                    <div className="mt-3 mb-3"></div>
                    Reforestation and Afforestation: Plant trees and restore natural vegetation to stabilize soil and prevent erosion.
                    <div className="mt-3 mb-3"></div>
                    Terracing: In hilly or sloping areas, construct terraces to slow down runoff and prevent soil from being washed away.
                    <div className="mt-3 mb-3"></div>
                    Erosion Control Structures: Install erosion control measures like silt fences, sediment basins, and gabion baskets to mitigate soil loss.
                    <div className="mt-3 mb-3"></div>
                    Education and Awareness: Educate farmers, landowners, and the public about the importance of soil conservation and sustainable land use.
                    <div className="mt-3 mb-3"></div>
                    Soil erosion is a silent but significant threat to our environment, food security, and water quality. However, it is a challenge we can address through proactive measures and responsible land management. By promoting sustainable farming, reforestation, and erosion control practices, we can protect our soil resources and ensure a more sustainable future.
                    <div className="mt-3 mb-3"></div>
                    Thank you for visiting our Soil Erosion webpage. We hope you leave with a deeper understanding of this critical issue and the motivation to contribute to its resolution. Together, we can preserve Earth's skin and safeguard the health of our planet.
                </div>
                <div className="flex w-[70%] leading-7 ml-[15%] mb-10">
                    <button className="text-[#6C757D] text-sm border-[3px] mr-2 border-[#E5E5E5] px-3 py-1 rounded-lg">tag1</button>
                    <button className="text-[#6C757D] text-sm border-[3px] mr-2 border-[#E5E5E5] px-3 py-1 rounded-lg">tag2</button>
                    <button className="text-[#6C757D] text-sm border-[3px] mr-2 border-[#E5E5E5] px-3 py-1 rounded-lg">tag3</button>
                </div>
                <div className="w-[70%] leading-7 ml-[15%] mb-10 border border-gray-300 border-solid"></div>
                <p className="w-[70%] leading-7 ml-[15%] pb-12 text-black">
                    By Author
                    <br />
                    <span className ="font-thin text-gray-600">Designation</span>
                </p>
                <div>
                    <img className="absolute bottom-0 right-0 z-0" src="/images/assets/revit/bottom.png"/>
                </div>
            </div>
            <Blogbg/>
        </div>
            
    )
        
}