
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
                            <p className="text-gray-500">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                            </p>
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
                            <p className="text-gray-500">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                            </p>
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


        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:pt-0 mx-auto">
            {/*// <!-- Grid -->*/}
            <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
            <div className="mt-5 sm:mt-10 lg:mt-0">
                    <div className="space-y-6 sm:space-y-8">
                        {/*// <!-- Title -->*/}
                        <div className="space-y-2 md:space-y-4">
                            <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                               Words from our Founder
                            </h2>
                            <blockquote className=" text-lg italic text-gray-700 mb-6">
          "Focus on your goals , you will get many holes" - Ashish Yadav, CTO and Founder, SustainSphere
        </blockquote>
                           <div className="pt-6">
                         </div>
                        </div>
                    </div>
                </div>

                <div>
                    <img className=" rounded-full" src="/images/assets/founder.jpg" alt="Image Description"/>
                </div>
                {/*// <!-- End Col -->*/}

                {/*// <!-- End Col -->*/}
            </div>
            {/*// <!-- End Grid -->*/}
        </div>

        {/* <blockquote className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-lg italic text-gray-700 mb-6">
          "Focus on your goals , you will get many holes" - Ashish Yadav, CTO and Founder, SustainSphere
        </blockquote> */}
  
        {/* Add more content as needed */}
      </>
    )
}
