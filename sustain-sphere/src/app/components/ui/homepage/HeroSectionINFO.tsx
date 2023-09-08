import Link from "next/link";



const HeroSectionINFO = () => {
    return( <>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/*// <!-- Grid -->*/}
            <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                <div>
                    <img className="rounded-xl" src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80" alt="Image Description"/>
                </div>
                {/*// <!-- End Col -->*/}

                <div className="mt-5 sm:mt-10 lg:mt-0">
                    <div className="space-y-6 sm:space-y-8">
                        {/*// <!-- Title -->*/}
                        <div className="space-y-2 md:space-y-4">
                            <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                                We tackle the challenges start-ups face
                            </h2>
                            <p className="text-gray-500">
                                Besides working with start-up enterprises as a partner for digitalization, we have built enterprise products for common pain points that we have encountered in various products and projects.
                            </p>
                        </div>
                        {/*// <!-- End Title -->*/}
                        {/*//*/}
                        {/*// <!-- List -->*/}
                        <ul role="list" className="space-y-2 sm:space-y-4">
                            <li className="flex space-x-3">
                                {/*// <!-- Solid Check -->*/}
                                <svg className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1"/>
                                    <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor"/>
                                </svg>
                                {/*// <!-- End Solid Check -->*/}

                                <span className="text-sm sm:text-base text-gray-500">
              <span className="font-bold">Easy & fast</span> designing
            </span>
                            </li>

                            <li className="flex space-x-3">
                                {/*// <!-- Solid Check -->*/}
                                <svg className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1"/>
                                    <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor"/>
                                </svg>
                                {/*// <!-- End Solid Check -->*/}

                                <span className="text-sm sm:text-base text-gray-500">
              Powerful <span className="font-bold">features</span>
            </span>
                            </li>

                            <li className="flex space-x-3">
                                {/*// <!-- Solid Check -->*/}
                                <svg className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1"/>
                                    <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor"/>
                                </svg>
                                {/*// <!-- End Solid Check -->*/}

                                <span className="text-sm sm:text-base text-gray-500">
              User Experience Design
            </span>
                            </li>
                        </ul>
                        {/*// <!-- End List -->*/}
                    </div>
                    <div className="pt-10">
                           <Link href="#" className=" text-green-700 basis-1/3 text-0.5xl  md:hover:translate-x-8 md:hover:underline md:hover:underline-offset-8 ">Explore
                           </Link>
                           </div>
                </div>
                {/*// <!-- End Col -->*/}
            </div>
            {/*// <!-- End Grid -->*/}
        </div>


        {/* 2nd info section */}

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/*// <!-- Grid -->*/}
            <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                
            <div className="mt-5 sm:mt-10 lg:mt-0">
                    <div className="space-y-6 sm:space-y-8">
                        {/*// <!-- Title -->*/}
                        <div className="space-y-2 md:space-y-4">
                            <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                            Cimate Change
                            </h2>
                        </div>
                        {/*// <!-- End Title -->*/}
                        {/*//*/}
                        {/*// <!-- List -->*/}
                        <ul role="list" className="space-y-2 sm:space-y-4">
    <li className="flex space-x-3 items-baseline">
        <span className="flex-shrink-0 h-2 w-2 bg-blue-600 dark:bg-blue-500 rounded-full"></span>
        <span className="text-sm sm:text-base text-gray-500">
            According to the Climate Change Performance Index, the top 10 emitters of greenhouse gases are China, the United States, India, Russia, Japan, Germany, Iran, Saudi Arabia, South Korea, and Canada.
        </span>
    </li>
    <li className="flex space-x-3 items-baseline">
        <span className="flex-shrink-0 h-2 w-2 bg-blue-600 dark:bg-blue-500 rounded-full"></span>
        <span className="text-sm sm:text-base text-gray-500">
            The top 10 emitters account for 72% of global greenhouse gas emissions.
        </span>
    </li>
    <li className="flex space-x-3 items-baseline">
        <span className="flex-shrink-0 h-2 w-2 bg-blue-600 dark:bg-blue-500 rounded-full"></span>
        <span className="text-sm sm:text-base text-gray-500">
            The average global temperature has increased by 1 degree Celsius since the pre-industrial era.
        </span>
    </li>
    <li className="flex space-x-3 items-baseline">
        <span className="flex-shrink-0 h-2 w-2 bg-blue-600 dark:bg-blue-500 rounded-full"></span>
        <span className="text-sm sm:text-base text-gray-500">
            In 2015, India pledged in COP21 to reduce its emissions intensity by 33-35% below 2005 levels by 2030. This means that India will reduce the amount of greenhouse gases it emits per unit of GDP. India has also pledged to achieve 40% of its electricity from non-fossil fuel sources by 2030.
        </span>
    </li>
    <li className="flex space-x-3 items-baseline">
        <span className="flex-shrink-0 h-2 w-2 bg-blue-600 dark:bg-blue-500 rounded-full"></span>
        <span className="text-sm sm:text-base text-gray-500">
            India has made progress in achieving these goals. In 2020, India's emissions intensity was 1.6 tons of CO2 per thousand dollars of GDP, down from 2.1 tons in 2005. India also generated 38% of its electricity from non-fossil fuel sources in 2020.
        </span>
    </li>
</ul>



                        {/*// <!-- End List -->*/}
                    </div>
                </div>
                
                <div>
                    <img className="rounded-xl" src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80" alt="Image Description"/>
                </div>
                {/*// <!-- End Col -->*/}

                
                {/*// <!-- End Col -->*/}
            </div>
            {/*// <!-- End Grid -->*/}
        </div>

        {/* 3rd info section */}

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/*// <!-- Grid -->*/}
            <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                <div>
                    <img className="rounded-xl" src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80" alt="Image Description"/>
                </div>
                {/*// <!-- End Col -->*/}

                <div className="mt-5 sm:mt-10 lg:mt-0">
                    <div className="space-y-6 sm:space-y-8">
                        {/*// <!-- Title -->*/}
                        <div className="space-y-2 md:space-y-4">
                            <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                            ESG: Shaping tomorrow responsibly 
                            </h2>
                            <p className="text-gray-500">
                            ESG represents a holistic framework that evaluates a company's impact on the world. It encompasses: </p>
                        </div>
                      <div className="text-gray-500">
                      Environmental (E): How a company manages its environmental footprint, addressing issues like carbon emissions, resource conservation, and pollution control.
Social (S): The company's commitment to social responsibility, including ethical labor practices, diversity and inclusion, and community engagement.
Governance (G): The effectiveness of a company's leadership, its adherence to ethical standards, and its transparency in decision-making.
At SustainSphere, we empower you to track and improve your ESG performance, enabling a sustainable and responsible future. Join us on this journey to make a positive impact.”
                      </div>
                      <div className="pt-4">
                           <Link href="#" className=" text-green-700  basis-1/3 text-0.5xl  md:hover:translate-x-8 md:hover:underline md:hover:underline-offset-8 ">Explore</Link>
                           </div>
                    </div>
                </div>
                {/*// <!-- End Col -->*/}
            </div>
            {/*// <!-- End Grid -->*/}
        </div>
            
            {/* 4th info section */}

            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/*// <!-- Grid -->*/}
            <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                
            <div className="mt-5 sm:mt-10 lg:mt-0">
                    <div className="space-y-6 sm:space-y-8">
                        {/*// <!-- Title -->*/}
                        <div className="space-y-2 md:space-y-4">
                            <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                                For NGO and Students
                            </h2>
                            <p className="text-gray-500">
                            At SustainSphere, we believe in the power of Environmental, Social, and Governance (ESG) principles to drive positive change. ESG is not just a framework; it's a commitment to building a world where businesses thrive responsibly, communities flourish, and our environment is preserved. Join us within the SustainSphere as we navigate the ESG landscape, track progress, and embrace sustainability as a collective responsibility. Together, we can create a brighter and more sustainable future for all.
                            </p>
                           <div className="pt-6">
                           <Link href="#" className=" text-green-700  basis-1/3 text-0.5xl  md:hover:translate-x-8 md:hover:underline md:hover:underline-offset-8 ">Explore</Link>
                           </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <img className="rounded-xl" src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80" alt="Image Description"/>
                </div>
                {/*// <!-- End Col -->*/}

                
                {/*// <!-- End Col -->*/}
            </div>
            {/*// <!-- End Grid -->*/}
        </div>
    </>
    );
}

export default HeroSectionINFO;
