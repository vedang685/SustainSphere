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
                    <img className="w-full rounded-2xl opacity-[70%] " src="/images/assets/revit/oceanAcid.png"/>
                </div>
                <div className="absolute w-full top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p style={pops.style} className=" text-4xl">Soil Erosion</p>
                </div>
                <div className="absolute sm:bottom-[5%] md:bottom-[10%] lg:bottom-[25%] xl:bottom-[38%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p style={pops.style} className="text-white leading-6 text-xs">Explore a premier online platform for cutting-edge environmental management solutions. Discover a wealth of resources, tools, and insights to assist your organization in achieving excellence in sustainability and environmental stewardship.</p>
                </div>
            </div>
            <div className="w-full relative overflow-hidden">
                <div style={lora.style} className="w-[70%] leading-7 ml-[15%] mb-10 text-[#495057]">
                    <p style={lora.style} className="text-2xl text-black mb-8">
                        Ocean Acidification
                    </p>
                    Welcome to our dedicated webpage on ocean acidification, a hidden but profound environmental issue that poses a threat to marine ecosystems and biodiversity. In this comprehensive guide, we will delve into the causes, impacts, and potential solutions to address the acidification of our oceans.
                    <p style={lora.style} className="text-2xl text-black mt-8 mb-8">
                        The Causes:
                    </p>
                    Ocean acidification results primarily from anthropogenic activities, including:
                    <div className="mt-3 mb-3"></div>
                    Carbon Emissions: The excessive release of carbon dioxide (CO2) into the atmosphere from the burning of fossil fuels is absorbed by the ocean, triggering the formation of carbonic acid. This process lowers the pH of seawater and disrupts its chemical balance.
                    <div className="mt-3 mb-3"></div>
                    Deforestation: The widespread loss of forests diminishes the planet's capacity to absorb CO2, allowing more of it to enter the atmosphere and subsequently dissolve into the oceans.
                    <div className="mt-3 mb-3"></div>
                    Agricultural Runoff: Nutrient and chemical runoff from agricultural activities can exacerbate acidification in coastal areas.
                    <p style={lora.style} className="text-2xl text-black mt-8 mb-8">
                        The Impacts:
                    </p>
                    Ocean acidification has multifaceted and profound consequences:
                    <div className="mt-3 mb-3"></div>
                    Marine Life: Acidic conditions hinder the ability of marine organisms with calcium carbonate shells or skeletons, including corals, mollusks, and some plankton species, to build and maintain their protective structures. This jeopardizes their survival and disrupts ocean food webs.
                    <div className="mt-3 mb-3"></div>
                    Food Webs: Disruptions to marine food webs can affect the availability of seafood, impacting both the livelihoods of coastal communities and the global seafood industry.
                    <div className="mt-3 mb-3"></div>
                    Ecosystems: Coral reefs, some of the most biodiverse ecosystems on Earth, are especially vulnerable to acidification. As these reefs degrade, numerous species that depend on them for habitat and sustenance are put at risk.
                    <div className="mt-3 mb-3"></div>
                    Global Climate: The impacts of ocean acidification can further contribute to climate change as altered marine ecosystems affect the planet's carbon cycle and may exacerbate the feedback loop of global warming.
                    <p style={lora.style} className="text-2xl text-black mt-8 mb-8">
                        The Solutions:
                    </p>
                    Mitigating ocean acidification is a complex challenge that requires global cooperation and commitment:
                    <div className="mt-3 mb-3"></div>
                    Reducing Carbon Emissions: Transition to renewable energy sources, improve energy efficiency, and reduce carbon emissions from industrial processes and transportation to slow the rate of ocean acidification.
                    <div className="mt-3 mb-3"></div>
                    Sustainable Fishing and Aquaculture: Promote sustainable fishing practices and responsible aquaculture to minimize additional stress on marine ecosystems.
                    <div className="mt-3 mb-3"></div>
                    Marine Conservation: Establish marine protected areas and conserve critical habitats like coral reefs to provide refuges for vulnerable species and allow ecosystems to recover.
                    <div className="mt-3 mb-3"></div>
                    Research and Monitoring: Invest in ongoing research and monitoring programs to better understand the effects of acidification, develop adaptive strategies, and identify areas of immediate concern.
                    <div className="mt-3 mb-3"></div>
                    Ocean acidification is a global crisis with profound implications for marine life, economies, and climate systems. However, it is a challenge we can address through coordinated efforts to reduce carbon emissions, protect vulnerable ecosystems, and promote sustainable practices.
                    <div className="mt-3 mb-3"></div>
                    Thank you for visiting our Ocean Acidification webpage. We hope you leave with a comprehensive understanding of this critical issue and the motivation to contribute to its resolution. Together, we can protect our oceans, preserving the biodiversity and ecosystems that depend on them.
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