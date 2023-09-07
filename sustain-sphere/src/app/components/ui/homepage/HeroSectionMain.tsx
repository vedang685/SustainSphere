

const MainHeroSection = () => {
    return(
        <>
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                <div className="lg:col-span-3">
                    <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">Harmonizing Ethics, Enabling impacts</h1>
                    <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">Empowering progress, one step at a time. Explore your ESG journey, track improvements year-over-year, and join hands with us and NGOs to create a sustainable future while raising awareness among students.</p>
                </div>

                <div className="lg:col-span-4 mt-10 lg:mt-0">
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
