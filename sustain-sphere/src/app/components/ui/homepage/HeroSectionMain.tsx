const MainHeroSection = () => {
    return(
        <>
            <div className="w-full h-100vh relative mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="grid lg:grid-cols-12 lg:gap-x-8 xl:gap-x-12 lg:items-center ml-10">
                    <div className="lg:col-span-6">
                        <h1 style={{lineHeight: '1.1'}} className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">HARMONIZING ETHICS <br/> ENABLING IMPACTS</h1>
                        <p className= "mt-9 leading-9 text-lg text-gray-800 dark:text-gray-400">Empowering <span className="bg-green-500 px-2 py-[3px] rounded-full text-[#F1F1F1] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mx-1 ">Progress</span> one step at a time. Explore your ESG journey, track improvements year-over-year, and join hands with us and NGOs to create a sustainable future while raising awareness among students.</p>
                    </div>

                    <div className="lg:col-span-6 mt-10 lg:mt-0">
                        <img className="w-full rounded-xl z-10 relative" src="/images/assets/earth_3d.png" alt="Image Description"/>
                        <div className="absolute bottom-0 right-0">
                            <img className="w-full h-full" src="/images/assets/vector_home_bottom.png" alt="Vector Image"/>
                        </div>
                    </div>
                </div>
        </div>

        </>
    );
}

export default MainHeroSection;
