'use client'

import {useState } from "react"
import { useSession } from "next-auth/react";

const IndividualForm= ()=> {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [occupation, setOccupation] = useState('')
    const [reason, setReason] = useState('')

    const {data: session} = useSession({required: true})

    const email = session?.user?.email ?? ""

    const handleSubmit = () => {

    }

    return(
    <>
        <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                        Indivudual
                    </h2>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">

                        <div className="sm:col-span-3">
                            <label htmlFor="af-account-full-name" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                Full name
                            </label>
                        </div>

                        <div className="sm:col-span-9">
                            <div className="sm:flex">
                                <input id="af-account-full-name" type="text"
                                       className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm
                                       -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg
                                       sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none
                                       sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500
                                        focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700
                                        dark:text-gray-400" placeholder="Ian"
                                        value={firstName}
                                        onChange = { (e) => setFirstName(e.target.value)}
                                        />
                                    <input type="text"
                                           className="py-2 px-3 pr-11 block w-full border-gray-200
                                           shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg
                                           sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none
                                           sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative
                                           focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900
                                           dark:border-gray-700 dark:text-gray-400" placeholder="Bale"
                                           value={lastName}
                                        onChange = { (e) => setLastName(e.target.value)}
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
                                   className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm
                                   rounded-lg focus:border-blue-500 focus:ring-blue-500 text-black" 
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
                                   className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm
                                   rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900
                                   dark:border-gray-700 dark:text-gray-400" placeholder="300,sector-229,Rohini,New Delhi-110078"
                                   value={address}
                                        onChange = { (e) => setAddress(e.target.value)}
                                   />
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="af-account-email" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                Occupation
                            </label>
                        </div>


                        <div className="sm:col-span-9">
                            <input id="af-account-email" type="email"
                                   className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm
                                   rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900
                                   dark:border-gray-700 dark:text-gray-400" placeholder="Engineer"
                                   value={occupation}
                                        onChange = { (e) => setOccupation(e.target.value)}
                                   />
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="af-account-bio" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                Reason for joining
                            </label>
                        </div>


                        <div className="sm:col-span-9">
                            <textarea id="af-account-bio" className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" rows={6} placeholder="Type your message..."
                            value={reason}
                            onChange = { (e) => setReason(e.target.value)}
                            ></textarea>
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
    );
}

export default IndividualForm;
