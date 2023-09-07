"use client"
import {signIn, signOut, useSession} from "next-auth/react";

export default function Navbar() {
    const { data: session } = useSession();

    return (
       <>
           <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
               <nav
                   className="mt-6 relative max-w-7xl w-full bg-gray-800 bg-opacity-95
                   border border-gray-600 rounded-[36px] mx-2 py-3 px-4 md:flex
                   md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto"
                   aria-label="Global">
                   <div className="flex items-center justify-between">
                       <img
                           className="inline-block h-[3.875rem] w-[3.875rem] rounded-full"
                           src="/images/appLogo/ssLogo.svg"
                           alt="Image Description"/>
                       <a className="flex-none text-xl font-semibold" href="#"
                          aria-label="Brand">SustainSphere</a>
                   </div>
                   <div id="navbar-collapse-with-animation"
                        className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
                       <div
                           className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
                           <a className="font-medium text-text-white hover:text-gray-300 md:py-6 dark:text-blue-500" href="#"
                              aria-current="page">Home</a>
                           <a className="font-medium text-text-white hover:text-gray-300 md:py-6 dark:text-gray-400"
                              href="#">RevIt</a>
                           <a className="font-medium text-text-white hover:text-gray-300 md:py-6 dark:text-gray-400 "
                              href="#">Blog</a>
                           <a className="font-medium text-text-white hover:text-gray-300 md:py-6 dark:text-gray-400"
                              href="#">About Us</a>

                           <div
                               className
                                   ="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--trigger:hover] md:py-4">
                               <button type="button"
                                       className="flex items-center w-full text-text-white hover:text-gray-300 font-medium ">
                                   Dropdown
                                   <svg className="ml-2 w-2.5 h-2.5 text-text-white" width="16" height="16"
                                        viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path
                                           d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                           stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                                   </svg>
                               </button>

                               <div
                                   className="hs-dropdown-menu transition-[opacity,margin]
                                   duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100
                                   opacity-0 md:w-48 hidden z-10 bg-white md:shadow-md rounded-lg p-2
                                    dark:bg-gray-800 md:dark:border dark:border-gray-700 dark:divide-gray-700
                                    before:absolute top-full md:border before:-top-5 before:left-0 before:w-full before:h-5">
                                   <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                      href="#">
                                       About
                                   </a>
                                   <div
                                       className="hs-dropdown relative [--strategy:static]
                                       md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
                                       <button type="button"
                                               className="w-full flex justify-between w-full
                                               items-center text-sm text-gray-800 rounded-md py-2
                                               px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500
                                               dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                                           Sub Menu
                                           <svg className="md:-rotate-90 ml-2 w-2.5 h-2.5 text-gray-600" width="16"
                                                height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                               <path
                                                   d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                                   stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                                           </svg>
                                       </button>

                                       <div
                                           className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms]
                                           md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10
                                           md:mt-2 bg-white md:shadow-md rounded-lg p-2 dark:bg-gray-800 md:dark:border
                                           dark:border-gray-700 dark:divide-gray-700 before:absolute md:border
                                           before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
                                           <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800
                                            hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700
                                             dark:hover:text-gray-300"
                                              href="#">
                                               About
                                           </a>
                                           <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800
                                            hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700
                                            dark:hover:text-gray-300"
                                              href="#">
                                               Downloads
                                           </a>
                                           <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800
                                           hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700
                                           dark:hover:text-gray-300"
                                              href="#">
                                               Team Account
                                           </a>
                                       </div>
                                   </div>

                                   <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                      href="#">
                                       Downloads
                                   </a>
                                   <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                      href="#">
                                       Team Account
                                   </a>
                               </div>
                           </div>

                           <div>
                               {(session && session.user) ? (
                                   <a className="flex items-center gap-x-2 font-medium text-text-white hover:text-gray-300
                           md:border-l md:border-gray-300 md:my-6 md:pl-6 dark:border-gray-700"
                                      onClick={ () =>{
                                          signOut()
                                      }} >
                                       <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" viewBox="0 0 16 16">
                                           <path
                                               d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                       </svg>
                                       SignOut
                                   </a>
                               ) : (
                                   <a className="flex items-center gap-x-2 font-medium text-text-white hover:text-gray-300
                           md:border-l md:border-gray-300 md:my-6 md:pl-6 dark:border-gray-700"
                                      onClick={ () =>{
                                          signIn()
                                      }} >
                                       <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" viewBox="0 0 16 16">
                                           <path
                                               d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                       </svg>
                                       Sign in
                                   </a>
                               )}
                           </div>



                           {/*<a className="flex items-center gap-x-2 font-medium text-text-white hover:text-gray-300*/}
                           {/*md:border-l md:border-gray-300 md:my-6 md:pl-6 dark:border-gray-700"*/}
                           {/*   onClick={ () =>{*/}
                           {/*             signIn()*/}
                           {/*   }} >*/}
                           {/*    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"*/}
                           {/*         fill="currentColor" viewBox="0 0 16 16">*/}
                           {/*        <path*/}
                           {/*            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>*/}
                           {/*    </svg>*/}
                           {/*    Log in*/}
                           {/*</a>*/}
                       </div>
                   </div>
               </nav>
           </header>
       </>
    )
}
