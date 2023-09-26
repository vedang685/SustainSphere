import {LineApp} from "@/app/(webpages)/dashboard/components/LineChart";
import {PieApp} from "@/app/(webpages)/dashboard/components/Pie";

export default function CoEmission() {
    return(<>
        <div className="grid grid-rows-1 p-12 gap-x-10 grid-flow-col gap-4 grid-cols-2">
            <div>
                <div
                    className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div
                        className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
                           Global CO<sub>2</sub> Emission
                        </p>
                    </div>
                    <div className="p-4 md:p-5">
                        {/*<h3 className="text-lg font-bold text-gray-800 dark:text-white">*/}
                        {/*    Card title*/}
                        {/*</h3>*/}
                        <div className="h-96 justify-center flex">
                            <LineApp/>
                        </div>

                    </div>
                </div>

            </div>

                <div
                    className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div
                        className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
                            Total Water Consumption
                        </p>
                    </div>
                    <div className="p-4 md:p-5">
                        {/*<h3 className="text-lg font-bold text-gray-800 dark:text-white">*/}
                        {/*    Card title*/}
                        {/*</h3>*/}
                        <div className="h-96 justify-center flex">
                            <PieApp/>
                        </div>

                    </div>
                </div>
            </div>
    </>)
}
