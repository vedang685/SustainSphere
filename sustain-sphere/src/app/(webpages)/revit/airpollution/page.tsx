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
                    <img className="w-full rounded-2xl opacity-[70%] " src="/images/assets/revit/airpol.png"/>
                </div>
                <div className="absolute w-full top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p style={pops.style} className=" text-4xl">Air Pollution</p>
                </div>
                <div className="absolute sm:bottom-[5%] md:bottom-[20%] lg:bottom-[30%] xl:bottom-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p style={pops.style} className="text-white leading-6 text-xs">Explore a premier online platform for cutting-edge environmental management solutions. Discover a wealth of resources, tools, and insights to assist your organization in achieving excellence in sustainability and environmental stewardship.</p>
                </div>
            </div>
            <div className="w-full relative overflow-hidden">
                <div style={lora.style} className="w-[70%] leading-7 ml-[15%] mb-10 text-[#495057]">
                    <p style={lora.style} className="text-2xl text-black mb-8">
                        Air Pollution
                    </p>
                    <p className="text-[#495057]"> 
                    India, a land of diverse cultures and landscapes, also grapples with a formidable challenge that looms over its skies – air pollution. This website page serves as a comprehensive exploration of the multifaceted issue of air pollution in India, shedding light on the underlying causes, far- reaching consequences, and actionable solutions.
                    <br/><p className=" text-black mt-4 mb-4">The Air Pollution Predicament:</p>
                    As a nation rapidly advancing in various sectors, India has experienced unprecedented urbanization and industrialization over the past few decades. While these developments have bolstered economic growth and improved living standards for many, they have also ushered in a silent menace that affects every citizen, rich or poor, urban or rural – air pollution.
                    <br/> <p className="text-black mt-4 mb-4">The Scale of the Problem:</p>
                    India is home to some of the world's most polluted cities, where residents often endure air quality levels that breach safe limits, exposing them to a plethora o f health hazards. The predominant culprits, fine particulate matter (PM2.5 and PM10), ground-level ozone, and an array of toxic gases, infiltrate the very air we breathe, infiltrating our homes, schools, and workplaces.
                    </p>
                    <p style={lora.style} className="text-2xl text-black mt-8 mb-8">
                        Problems of Air pollution in India:
                    </p>
                    High Particulate Matter (PM) Levels: India frequently experiences elevated levels of PM2.5 and PM10, which are fine particles that can penetrate deep into the respiratory system. These particles can cause respiratory diseases, including asthma and bronchitis.
                    <div className="my-2 mb-2"></div>
                    Vehicle Emissions: The rapid increase in the number of vehicles on Indian roads has led to substantial emissions of air pollutants such as carbon monoxide (CO), nitrogen oxides (NOx), and volatile organic compounds (VOCs). This is a significant contributor to urban air pollution.
                    <div className="my-2 mb-2"></div>
                    Industrial Emissions: Many industries in India still use outdated technologies, leading to the release of harmful pollutants into the atmosphere. Industries, especially in urban areas, are major contributors to air pollution.
                    <div className="my-2 mb-2"></div>
                    Biomass Burning: In rural areas, the practice of burning crop residues and biomass for cooking and heating contributes to air pollution. This releases particulate matter and harmful gases, affecting both indoor and outdoor air quality.
                    <div className="my-2 mb-2"></div>
                    Construction Dust: Rapid urbanization and construction activities release significant amounts of dust and particulate matter into the air, especially in metropolitan regions.
                    <div className="my-2 mb-2"></div>
                    Inadequate Waste Management: Improper waste disposal and lack of effective waste management systems result in the burning of waste materials, emitting harmful pollutants into the air.
                    <div className="my-2 mb-2"></div>
                    Natural Factors: Certain natural factors, such as dust storms and meteorological conditions, can exacerbate air pollution problems in specific regions.
                    <p style={lora.style} className="text-2xl text-black mt-8 mb-8">
                        Solution to address Air pollution in India:
                    </p>
                    Promote Renewable Energy: Encourage the use of clean and renewable energy sources like solar and wind power to reduce reliance on fossil fuels, particularly in the energy and transportation sectors.
                    <div className="my-2 mb-2"></div>
                    Improved Public Transportation: Develop efficient and affordable public transportation systems to reduce the number of private vehicles on the road. Encourage the use of electric and hybrid vehicles.
                    <div className="my-2 mb-2"></div>
                    Stringent Emission Standards: Enforce strict emission standards for vehicles and industries to reduce the release of harmful pollutants. Regular inspections and penalties for non-compliance are essential.
                    <div className="my-2 mb-2"></div>
                    Rural Clean Cooking Initiatives: Promote the adoption of clean cooking technologies in rural areas to reduce the reliance on biomass and promote healthier indoor air quality.
                    <div className="my-2 mb-2"></div>
                    Urban Planning: Integrate green spaces and promote eco-friendly urban planning to reduce construction dust and create healthier urban environments.
                    <div className="my-2 mb-2"></div>
                    Waste Management: Invest in efficient waste management systems, including recycling and waste-to-energy facilities, to minimize open burning and landfill emissions.
                    <div className="my-2 mb-2"></div>
                    Awareness and Education: Launch public awareness campaigns to educate people about the dangers of air pollution and the steps they can take to reduce their contribution.
                    <div className="my-2 mb-2"></div>
                    Monitoring and Data Transparency: Implement real-time air quality monitoring systems in major cities and make the data easily accessible to the public to raise awareness and enable informed decision-making.
                    <div className="my-2 mb-2"></div>
                    Policy and Regulation: Develop and enforce comprehensive air quality policies and regulations at the national and regional levels. Engage stakeholders, including industry, in the process. 
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