
import { useSession } from "next-auth/react"
import { useState } from "react"
import Image from "next/image";
import account from "../../../../../public/images/account.png"

export default function EnterpriseForm() {
    const [enterprise, setEnterprise] = useState("")
    const [fullName, setFullName] = useState("")
    const [address, setAddress] = useState("")
    const [sector, setSector] = useState("")
    const [website, setWebsite] = useState("")
    const [employee, setEmployee] = useState("")
    const [tax, setTax] = useState("")
    const [revenue, setRevenue] = useState("")
    const [reason, setReason] = useState("")
    
    const {data: session} = useSession({required: true})

    const email = session?.user?.email ?? ""

    const handleSubmit = ()=>{

    }
    
    return (
        <>
        <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                        Enterprise
                    </h2>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
                    <div className="sm:col-span-3">
                            <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                Profile photo
                            </label>
                        </div>

                        <div className="sm:col-span-9">
                            <div className="flex items-center gap-5">
                                <Image
                                    src={account}
                                    className="inline-block h-16 w-16 rounded-full ring-2 ring-white dark:ring-gray-800"
                                    alt="Image Description"
                                />
                                    <div className="flex gap-x-2">
                                        <div>
                                            <button type="button"
                                                    data-hs-overlay="#hs-vertically-centered-modal"
                                                    className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16"
                                                     height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path
                                                        d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                                    <path
                                                        d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                                </svg>
                                               Upload Image

                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="af-account-full-name" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                Name of Enterprise
                            </label>
                        </div>

                        <div className="sm:col-span-9">
                            <div className="sm:flex">
                                <input id="af-account-full-name" type="text"
                                       className="py-2 px-3 pr-11 block w-full border
                                       shadow-sm -mt-px -ml-px rounded-lg text-sm relative
                                       focus:z-10 focus:border-blue-500 focus:ring-blue-500
                                       text-black border-gray-700" placeholder="XYZ"
                                       value={enterprise}
                                        onChange={(e)=>{setEnterprise(e.target.value)}}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="af-account-email" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                Email
                            </label>
                        </div>


                        <div className="sm:col-span-9">
                            <input id="af-account-email" type="email"
                                   className="py-2 px-3 pr-11 block w-full border
                                   shadow-sm -mt-px -ml-px rounded-lg text-sm relative
                                   focus:z-10 focus:border-blue-500 focus:ring-blue-500
                                   text-black border-gray-700" placeholder="maria@site.com"
                                   disabled
                                   value={email}
                                   />
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="af-account-email" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                               Address
                            </label>
                        </div>


                        <div className="sm:col-span-9">
                            <input id="af-account-email" type="address"
                                   className="py-2 px-3 pr-11 block w-full border
                                   shadow-sm -mt-px -ml-px rounded-lg text-sm relative
                                   focus:z-10 focus:border-blue-500 focus:ring-blue-500
                                   text-black border-gray-700" placeholder="300,sector-229,Rohini,New Delhi-110078"
                                   value={address}
                                    onChange={(e)=>{setAddress(e.target.value)}}
                                   />
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="af-account-email" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                Sector
                            </label>
                        </div>

                        <div className="sm:col-span-9">
                            <input id="af-account-email" type="text"
                                   className="py-2 px-3 pr-11 block w-full border
                                   shadow-sm -mt-px -ml-px rounded-lg text-sm relative
                                   focus:z-10 focus:border-blue-500 focus:ring-blue-500
                                   text-black border-gray-700" placeholder="Technology"
                                   value={sector}
                                    onChange={(e)=>{setSector(e.target.value)}}
                                   />
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="af-account-full-name" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                Name of Contact Person
                            </label>
                        </div>

                        <div className="sm:col-span-9">
                            <div className="sm:flex">
                                <input id="af-account-full-name" type="text"
                                       className="py-2 px-3 pr-11 block w-full border
                                       shadow-sm -mt-px -ml-px rounded-lg text-sm relative
                                       focus:z-10 focus:border-blue-500 focus:ring-blue-500
                                       text-black border-gray-700" placeholder="Ian"
                                       value={fullName}
                                        onChange={(e)=>{setFullName(e.target.value)}}
                                       />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="af-account-email" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                Website (optional)
                            </label>
                        </div>

                        <div className="sm:col-span-9">
                            <input id="af-account-email" type="website"
                                   className="py-2 px-3 pr-11 block w-full border
                                   shadow-sm -mt-px -ml-px rounded-lg text-sm relative
                                   focus:z-10 focus:border-blue-500 focus:ring-blue-500
                                   text-black border-gray-700" placeholder="https://xyz.com"
                                   value={website}
                                    onChange={(e)=>{setWebsite(e.target.value)}}
                                   />
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="af-account-email" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                             No. of Employees
                            </label>
                        </div>

                        <div className="sm:col-span-9">
                            <input id="af-account-email" type="number"
                                   className="py-2 px-3 pr-11 block w-full border
                                   shadow-sm -mt-px -ml-px rounded-lg text-sm relative
                                   focus:z-10 focus:border-blue-500 focus:ring-blue-500
                                   text-black border-gray-700" placeholder="10000"
                                   value={employee}
                                    onChange={(e)=>{setEmployee(e.target.value)}}
                                   />
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="af-account-email" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                            Tax ID
                            </label>
                        </div>

                        <div className="sm:col-span-9">
                            <input id="af-account-email" type="text"
                                   className="py-2 px-3 pr-11 block w-full border
                                   shadow-sm -mt-px -ml-px rounded-lg text-sm relative
                                   focus:z-10 focus:border-blue-500 focus:ring-blue-500
                                   text-black border-gray-700" placeholder="AAAAA8888A"
                                   value={tax}
                                    onChange={(e)=>{setTax(e.target.value)}}
                                   />
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="af-account-email" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                             Annual Revenue
                            </label>
                        </div>

                        <div className="sm:col-span-9">
                            <input id="af-account-email" type="number"
                                   className="py-2 px-3 pr-11 block w-full border
                                   shadow-sm -mt-px -ml-px rounded-lg text-sm relative
                                   focus:z-10 focus:border-blue-500 focus:ring-blue-500
                                   text-black border-gray-700" placeholder="10000"
                                   value={revenue}
                                    onChange={(e)=>{setRevenue(e.target.value)}}
                                   />
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="af-account-bio" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                Reason for joining
                            </label>
                        </div>


                        <div className="sm:col-span-9">
                            <textarea id="af-account-bio" className="py-2 px-3 pr-11 block w-full border
                                       shadow-sm -mt-px -ml-px rounded-lg text-sm relative
                                       focus:z-10 focus:border-blue-500 focus:ring-blue-500
                                       text-black border-gray-700" 
                                       rows={6} 
                                       placeholder="Type your message..."
                                       value={reason}
                                        onChange={(e)=>{setReason(e.target.value)}}
                                       >

                                       </textarea>
                        </div>


                    </div>


                    <div className="mt-5 flex justify-end gap-x-2">
                        
                        <button type="button" className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                            Submit
                        </button>
                    </div>
                </form>
            </div>

        </div>

        </>
    )
}