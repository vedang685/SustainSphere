
import {DonApp} from "@/app/(webpages)/dashboard/components/environment/PieChart";

export default function EnvironmentSummary(){
    return<>
        <div className="max-w-[85rem] px-4 py-2 sm:px-6 lg:px-8 lg:py-8 mx-auto bor">

            <div className="max-w-2xl mx-auto text-center mb-2 lg:mb-14">
                <h1 className="text-2xl text-gray-800 md:text-5xl md:leading-tight">Tracking Our Green Impact</h1>
                <p className="mt-1 text-2xl mt-6 text-gray-600 dark:text-gray-400">Environmental Sustainability ESG Dashboard</p>
            </div>

        </div>
        <div className="max-w-[85rem] border-2 px-4 py-10 pb-8 sm:px-6 lg:px-8 lg:pb-8 mx-auto">

            <div className="grid items-center lg:grid-cols-12 gap-6 lg:gap-12">
                <div className="lg:col-span-2">

                    <div className="lg:pr-6 xl:pr-12">
                        <p className="text-6xl font-bold leading-10 text-blue-500">
                            1.2
                        </p>
                        <p className="mt-2 sm:mt-3 text-gray-500">Total Waste(metric tonnes)</p>
                    </div>

                </div>


                <div className="lg:col-span-10 relative lg:before:absolute lg:before:top-0 lg:before:-left-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-200 lg:before:dark:bg-gray-700">
                    <div className="grid items-center gap-8 grid-cols-3 md:grid-cols-4 lg:grid-cols-4 sm:gap-8">

                        <div className="mx-4">
                            <p className="text-2xl text-center font-semibold text-blue-500">Water Pollution</p>
                            <DonApp label={"30%"} data={{  
                    datasets: [
                        {
                            label: '# of Votes',
                            data: [1, 3],
                            backgroundColor: [
                                'rgb(17,153,88)',
                                'rgb(40,42,40)',
                                'rgba(52,51,51,0.2)',
                            ],
                            borderColor: [
                                'rgba(61,58,53,0.2)',
                                'rgba(61,58,53,0.2)'
                            ],
                            borderWidth: 1,
                        },
                    ],
                }}/>
                        </div>

                        <div className="mx-4">
                            <p className="text-2xl text-center font-semibold text-blue-500">CO<sub>2</sub> Emission</p>
                            <DonApp label={"20%"} data={{  
                    datasets: [
                        {
                            label: '# of Votes',
                            data: [1, 5],
                            backgroundColor: [
                                'rgb(17,153,88)',
                                'rgb(40,42,40)',
                                'rgba(52,51,51,0.2)',
                            ],
                            borderColor: [
                                'rgba(61,58,53,0.2)',
                                'rgba(61,58,53,0.2)'
                            ],
                            borderWidth: 1,
                        },
                    ],
                }}/>
                        </div>


                        <div className="mx-4">
                            <p className="text-2xl text-center font-semibold text-blue-500">Landfill Waste</p>
                            <DonApp label={"60%"} data={{  
                    datasets: [
                        {
                            label: '# of Votes',
                            data: [60, 40],
                            backgroundColor: [
                                'rgb(17,153,88)',
                                'rgb(40,42,40)',
                                'rgba(52,51,51,0.2)',
                            ],
                            borderColor: [
                                'rgba(61,58,53,0.2)',
                                'rgba(61,58,53,0.2)'
                            ],
                            borderWidth: 1,
                        },
                    ],
                }}/>
                        </div>

                        <div className="mx-4">
                            <p className="text-2xl text-center font-semibold text-blue-500">Misc.</p>
                            <DonApp label={"40%"} data={{  
                    datasets: [
                        {
                            label: '# of Votes',
                            data: [12, 19],
                            backgroundColor: [
                                'rgb(17,153,88)',
                                'rgb(40,42,40)',
                                'rgba(52,51,51,0.2)',
                            ],
                            borderColor: [
                                'rgba(61,58,53,0.2)',
                                'rgba(61,58,53,0.2)'
                            ],
                            borderWidth: 1,
                        },
                    ],
                }}/>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    </>
}
