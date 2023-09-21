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
                    <img className="w-full rounded-2xl opacity-[70%] " src="/images/assets/deforestation/defor.jpeg"/>
                </div>
                <div className="absolute w-full top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p style={pops.style} className=" text-4xl">Deforestation</p>
                </div>
                <div className="absolute sm:bottom-[5%] md:bottom-[20%] lg:bottom-[30%] xl:bottom-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p style={pops.style} className="text-white leading-6 text-xs">Explore a premier online platform for cutting-edge environmental management solutions. Discover a wealth of resources, tools, and insights to assist your organization in achieving excellence in sustainability and environmental stewardship.</p>
                </div>
            </div>
            <div className="w-full relative overflow-hidden">
                <div style={lora.style} className="w-[70%] leading-7 ml-[15%] mb-10 text-[#495057]">
                    <p style={lora.style} className="text-2xl text-black mb-8">
                        Deforestation
                    </p>
                    Welcome to our dedicated webpage on deforestation, an urgent global issue that demands our immediate attention. In this comprehensive guide, we will delve into the causes, impacts, and potential solutions to combat the alarming rate at which our planet's forests are disappearing.
                    <p style={lora.style} className="text-2xl text-black mt-8 mb-8">
                        The causes:
                    </p>
                    Deforestation is driven by various complex factors, including:
                    <div className="mt-3 mb-3"></div>
                    Logging: The timber industry often clears vast forested areas for commercial purposes, leading to habitat destruction and loss of biodiversity. Unsustainable logging practices can further exacerbate this issue.
                    <div className="mt-3 mb-3"></div>
                    Agriculture: The expansion of agricultural land, particularly for crops like soy and palm oil, is a major driver of deforestation. As the global demand for food grows, forests are frequently converted into farmland.
                    <div className="mt-3 mb-3"></div>
                    Infrastructure Development: Road construction, urbanization, and the expansion of human settlements result in the clearing of forests, as land is repurposed for housing, industry, and transportation networks.
                    <div className="mt-3 mb-3"></div>
                    Mining: Extracting valuable minerals and resources often necessitates the removal of forests, leading to habitat disruption and ecosystem degradation.
                    <div className="mt-3 mb-3"></div>
                    Fire: Natural and human-induced fires can ravage forests, particularly in dry and vulnerable regions. Uncontrolled fires, often exacerbated by climate change, can lead to large-scale deforestation.
                    <p style={lora.style} className="text-2xl text-black mt-8 mb-8">
                        The Impacts:
                    </p>
                    The consequences of deforestation are profound and wide-ranging:
                    <div className="mt-3 mb-3"></div>
                    Loss of Biodiversity: Deforestation is a leading cause of species extinction as it destroys habitats crucial for countless plant and animal species. Many species, some of which may hold potential for medical or ecological breakthroughs, are at risk.
                    <div className="mt-3 mb-3"></div>
                    Climate Change: Forests play a critical role in absorbing carbon dioxide, acting as "carbon sinks." Their removal contributes significantly to greenhouse gas emissions, exacerbating global climate change.
                    <div className="mt-3 mb-3"></div>
                    Disruption of Ecosystems: Forests are intricate ecosystems with delicate balances. Their destruction can lead to imbalances in natural processes, affecting everything from water purification to pollination.
                    <div className="mt-3 mb-3"></div>
                    Water Cycle Disruption: Forests help regulate the water cycle by absorbing and releasing moisture. The removal of forests can lead to altered rainfall patterns, increased flooding, and decreased water availability in some regions.
                    <p style={lora.style} className="text-2xl text-black mt-8 mb-8">
                        The Solutions:
                    </p>
                    Addressing deforestation requires a multifaceted and collaborative approach:
                    <div className="mt-3 mb-3"></div>
                    Sustainable Logging: Promote sustainable forestry practices that prioritize the long-term health and regeneration of forests. Certified programs like the Forest Stewardship Council (FSC) set standards for responsible logging.
                    <div className="mt-3 mb-3"></div>
                    Rethink Agriculture: Encourage sustainable agriculture that avoids deforestation and protects existing forests. Initiatives such as agroforestry, which combines farming and tree planting, can provide sustainable solutions.
                    <div className="mt-3 mb-3"></div>
                    Conservation Efforts: Establish protected areas and conservation projects to preserve vital habitats. These areas serve as sanctuaries for endangered species and can aid in reforestation efforts.
                    <div className="mt-3 mb-3"></div>
                    Forest Restoration: Support initiatives to reforest and restore degraded land. Tree planting campaigns, like the "Billion Tree Campaign," aim to combat deforestation and its effects.
                    <div className="mt-3 mb-3"></div>
                    Consumer Choices: Choose products made from sustainably sourced materials and support companies committed to deforestation-free supply chains. Look for certification labels like the FSC or Rainforest Alliance.
                    <div className="mt-3 mb-3"></div>
                    Policy and Legislation: Advocate for strong environmental policies and regulations to curb deforestation. International agreements like the Paris Agreement and regional initiatives can be instrumental in combating this crisis.
                    <div className="mt-3 mb-3"></div>
                    Deforestation is a global crisis with far-reaching consequences for the environment, biodiversity, and climate. However, it's a challenge we can address through collective action, education, and responsible consumer choices. By supporting sustainable practices, conservation efforts, and advocating for change, we can slow down and eventually halt the destruction of our planet's precious forests.
                    Thank you for visiting our Deforestation webpage. We hope you leave with a deeper understanding of this critical issue and the inspiration to contribute to its resolution. Together, we can make a difference.

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
