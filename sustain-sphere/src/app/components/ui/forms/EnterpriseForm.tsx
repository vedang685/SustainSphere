
import { useSession } from "next-auth/react"
import { useState } from "react"

export default function EnterpriseForm() {
    const [enterprise, setEnterprise] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
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
                                       value={firstName}
                                        onChange={(e)=>{setFirstName(e.target.value)}}
                                       />
                                    <input type="text"
                                           className="py-2 px-3 pr-11 block w-full border
                                           shadow-sm -mt-px -ml-px rounded-lg text-sm relative
                                           focus:z-10 focus:border-blue-500 focus:ring-blue-500
                                           text-black border-gray-700" placeholder="Bale"
                                           value={lastName}
                                            onChange={(e)=>{setLastName(e.target.value)}}
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