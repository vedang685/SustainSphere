

const IndividualForm= ()=> {
    return(<>
        <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                        Profile
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Manage your name, password and account settings.
                    </p>
                </div>

                <form>
                    <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
                        <div className="sm:col-span-3">
                            <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                Profile photo
                            </label>
                        </div>

                        <div className="sm:col-span-9">
                            <div className="flex items-center gap-5">
                                <img className="inline-block h-16 w-16 rounded-full ring-2 ring-white dark:ring-gray-800"
                                     src="../assets/img/160x160/img1.jpg" alt="Image Description"/>
                                    <div className="flex gap-x-2">
                                        <div>
                                            <button type="button" className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                                </svg>
                                                Upload photo
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="af-account-full-name" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                Full name
                            </label>
                            <div className="hs-tooltip inline-block">
                                <button type="button" className="hs-tooltip-toggle ml-1">
                                    <svg className="inline-block w-3 h-3 text-gray-400 dark:text-gray-600"
                                         xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                    </svg>
                                </button>
                                <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700" role="tooltip">
              Displayed on public forums, such as Preline
            </span>
                            </div>
                        </div>

                        <div className="sm:col-span-9">
                            <div className="sm:flex">
                                <input id="af-account-full-name" type="text"
                                       className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm
                                       -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg
                                       sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none
                                       sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500
                                        focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700
                                        dark:text-gray-400" placeholder="Maria"/>
                                    <input type="text"
                                           className="py-2 px-3 pr-11 block w-full border-gray-200
                                           shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg
                                           sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none
                                           sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative
                                           focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900
                                           dark:border-gray-700 dark:text-gray-400" placeholder="Boone"/>
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
                                   rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900
                                   dark:border-gray-700 dark:text-gray-400" placeholder="maria@site.com"/>
                        </div>


                        <div className="sm:col-span-3">
                            <label htmlFor="af-account-password"
                                   className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                Password
                            </label>
                        </div>

                        <div className="sm:col-span-9">
                            <div className="space-y-2">
                                <input id="af-account-password" type="text"
                                       className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm
                                       rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500
                                       dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                       placeholder="Enter current password"/>
                                    <input type="text"
                                           className="py-2 px-3 pr-11 block w-full border-gray-200
                                           shadow-sm rounded-lg text-sm focus:border-blue-500
                                           focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700
                                           dark:text-gray-400" placeholder="Enter new password"/>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <div className="inline-block">
                                <label htmlFor="af-account-phone" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                    Phone
                                </label>
                                <span className="text-sm text-gray-400 dark:text-gray-600">
              (Optional)
            </span>
                            </div>
                        </div>

                        <div className="sm:col-span-9">
                            <div className="sm:flex">
                                <input id="af-account-phone" type="text"
                                       className="py-2 px-3 pr-11 block w-full border-gray-200
                                       shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg
                                       sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none
                                       sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10
                                        focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900
                                        dark:border-gray-700 dark:text-gray-400" placeholder="+x(xxx)xxx-xx-xx"/>
                                    <select className="py-2 px-3 pr-9 block w-full sm:w-auto border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                                        <option selected>Mobile</option>
                                        <option>Home</option>
                                        <option>Work</option>
                                        <option>Fax</option>
                                    </select>
                            </div>

                            <p className="mt-3">
                                <a className="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium" href="../docs/index.html">
                                    <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                    </svg>
                                    Add phone
                                </a>
                            </p>
                        </div>


                        <div className="sm:col-span-3">
                            <label htmlFor="af-account-gender-checkbox" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                Gender
                            </label>
                        </div>

                        <div className="sm:col-span-9">
                            <div className="sm:flex">
                                <label htmlFor="af-account-gender-checkbox" className="flex py-2 px-3 block w-full border border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                                    <input type="radio" name="af-account-gender-checkbox" className="shrink-0 mt-0.5
                                    border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500
                                    dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500
                                    dark:focus:ring-offset-gray-800" id="af-account-gender-checkbox" checked/>
                                        <span className="text-sm text-gray-500 ml-3 dark:text-gray-400">Male</span>
                                </label>

                                <label htmlFor="af-account-gender-checkbox-female" className="flex py-2 px-3 block w-full border border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                                    <input type="radio" name="af-account-gender-checkbox-female"
                                           className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600
                                            pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700
                                            dark:checked:bg-blue-500 dark:checked:border-blue-500
                                            dark:focus:ring-offset-gray-800" id="af-account-gender-checkbox-female"/>
                                        <span className="text-sm text-gray-500 ml-3 dark:text-gray-400">Female</span>
                                </label>

                                <label htmlFor="af-account-gender-checkbox-other" className="flex py-2 px-3 block w-full border border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                                    <input type="radio" name="af-account-gender-checkbox-other"
                                           className="shrink-0 mt-0.5 border-gray-200 rounded-full
                                           text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800
                                            dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500
                                             dark:focus:ring-offset-gray-800" id="af-account-gender-checkbox-other"/>
                                        <span className="text-sm text-gray-500 ml-3 dark:text-gray-400">Other</span>
                                </label>
                            </div>
                        </div>


                        <div className="sm:col-span-3">
                            <label htmlFor="af-account-bio" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                BIO
                            </label>
                        </div>


                        <div className="sm:col-span-9">
                            <textarea id="af-account-bio" className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" rows={6} placeholder="Type your message..."></textarea>
                        </div>

                    </div>


                    <div className="mt-5 flex justify-end gap-x-2">
                        <button type="button" className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                            Cancel
                        </button>
                        <button type="button" className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                            Save changes
                        </button>
                    </div>
                </form>
            </div>

        </div>

        </>
    );
}

export default IndividualForm;
