'use client'
import React, {useRef, useState} from "react"
import { useSession } from "next-auth/react";
import Image from "next/image";
import account from "../../../../../public/images/account.png"
import {ImagePicker} from "@/app/components/ui/forms/ImageUploader";


const IndividualForm= ()=> {

    const [fullName, setFullName] = useState('')
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
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
                            <label htmlFor="af-account-email" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                Email
                            </label>
                        </div>


                        <div className="sm:col-span-9">
                            <input id="af-account-email" type="email"
                                   className="py-2 px-3 pr-11 block w-full border
                                           shadow-sm -mt-px -ml-px rounded-lg text-sm relative
                                           focus:z-10 focus:border-blue-500 focus:ring-blue-500
                                           border-gray-700 text-gray-400"
                                   disabled
                                   value={email}
                            />
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="af-account-full-name" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                Full name
                            </label>
                        </div>

                        <div className="sm:col-span-9">
                            <div className="sm:flex">
                                    <input type="text"
                                           className="py-2 px-3 pr-11 block w-full border
                                           shadow-sm -mt-px -ml-px rounded-lg text-sm relative
                                           focus:z-10 focus:border-blue-500 focus:ring-blue-500
                                          text-black border-gray-700" placeholder="Viraj Dobriyal"
                                           value={fullName}
                                        onChange = { (e) => setFullName(e.target.value)}
                                           />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="af-account-email" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                Country
                            </label>
                        </div>


                        <div className="sm:col-span-9">
                            <input id="af-account-email" type="text"
                                   className="py-2 px-3 pr-11 block w-full border
                                           shadow-sm -mt-px -ml-px rounded-lg text-sm relative
                                           focus:z-10 focus:border-blue-500 focus:ring-blue-500
                                          text-black border-gray-700" placeholder="Country"
                                   value={country}
                                   onChange = { (e) => setCountry(e.target.value)}
                            />
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="af-account-email" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                State
                            </label>
                        </div>


                        <div className="sm:col-span-9">
                            <input id="af-account-email" type="text"
                                   className="py-2 px-3 pr-11 block w-full border
                                           shadow-sm -mt-px -ml-px rounded-lg text-sm relative
                                           focus:z-10 focus:border-blue-500 focus:ring-blue-500
                                          text-black border-gray-700" placeholder="State"
                                   value={state}
                                   onChange = { (e) => setState(e.target.value)}
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
                                          text-black border-gray-700" placeholder="Street 501,City"
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
                                   className="py-2 px-3 pr-11 block w-full border
                                           shadow-sm -mt-px -ml-px rounded-lg text-sm relative
                                           focus:z-10 focus:border-blue-500 focus:ring-blue-500
                                           focus:text-black
                                           text-black
                                           border-gray-700" placeholder="Engineer"
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
                            <textarea id="af-account-bio" className="py-2 px-3 block w-full border
                                           shadow-sm -mt-px -ml-px rounded-lg text-sm relative
                                           focus:z-10 focus:border-blue-500 focus:ring-blue-500
                                           focus:text-black
                                           border-gray-700 text-black" rows={6} placeholder="Type your message..."
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

                <div id="hs-vertically-centered-modal" className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
                    <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
                        <div className="flex items-center flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                                <h3 className="font-bold text-gray-800 dark:text-white">
                                    Upload Image
                                </h3>
                                <button type="button" className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-vertically-centered-modal">
                                    <span className="sr-only">Close</span>
                                    <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
                                    </svg>
                                </button>
                            </div>
                            <div className="p-4 overflow-y-auto flex justify-center items-center">
                                    <ImagePicker key={email}/>
                            </div>
                            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                                <button type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-vertically-centered-modal">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        </>
    );
}

export default IndividualForm;
