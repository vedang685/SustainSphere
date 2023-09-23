import Features from "@/app/components/ui/homepage/Features";

export default function Revit(){
    return(
        <>
        <div className="text-center py-10">
            <h1 className="text-5xl text-black hover:text-green-700 ">About Us</h1>
        </div>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/*// <!-- Grid -->*/}
            <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                
            <div className="mt-5 sm:mt-10 lg:mt-0">
                    <div className="space-y-6 sm:space-y-8">
                        {/*// <!-- Title -->*/}
                        <div className="space-y-2 md:space-y-4">
                            <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                                Our Mission
                            </h2>
                            <p className="text-gray-500 text-xl pt-2">
                            At SustainSphere, our mission is to pave the way for a more sustainable and interconnected world. We are committed to empowering enterprises to embrace and monitor Environmental, Social, and Governance (ESG) initiatives seamlessly. By providing innovative solutions, we aim to be the catalyst for change in the corporate world, where sustainability is not just a goal but a way of doing business.                             </p>
                           <div className="pt-6">
                         </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <img className="rounded-xl" src="/images/assets/home/ngo.jpg" alt="Image Description"/>
                </div>
                {/*// <!-- End Col -->*/}

                {/*// <!-- End Col -->*/}
            </div>
            {/*// <!-- End Grid -->*/}
        </div>

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/*// <!-- Grid -->*/}
            <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
            <div>
                    <img className="rounded-xl" src="/images/assets/home/ngo.jpg" alt="Image Description"/>
                </div>
            <div className="mt-5 sm:mt-10 lg:mt-0">
                    <div className="space-y-6 sm:space-y-8">
                        {/*// <!-- Title -->*/}
                        <div className="space-y-2 md:space-y-4">
                            <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                                Our Story
                            </h2>
                            <p className="text-gray-500 text-xl">
                            SustainSphere emerged from a shared vision among passionate individuals who recognized the urgent need for comprehensive ESG solutions. We understood that sustainability isn't just a buzzword; it's a fundamental shift in how organizations operate, engage with communities, and protect our planet.
Our journey began with a simple question: How can we make sustainability accessible to enterprises while fostering collaboration among like-minded organizations and individuals who share this vision?
                            </p>
                           <div className="pt-6">
                         </div>
                        </div>
                    </div>
                </div>
                {/*// <!-- End Col -->*/}

                {/*// <!-- End Col -->*/}
            </div>
            {/*// <!-- End Grid -->*/}
        </div>

        <div className="flex justify-center items-center min-h-screen ">
      <div className="p-6 rounded-lg  w-3/4">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4 text-center pb-4">Terms and Conditions</h1>
        <p className="text-gray-600">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.    
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.    
        </p>
        {/* Add more content as needed */}
      </div>
    </div>


        <div>
            <Features />
        </div>
        {/* Add more content as needed */}
      </>
    )
}
