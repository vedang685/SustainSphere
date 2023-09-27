'use client'
import React from 'react'
import { DonApp } from '../components/environment/PieChart'
import { LineApp } from '../components/LineChart'

function page() {
  return (
    <div className="relative w-full">
        <div className='main ml-[8%] mr-[8%] px-5 text-white relative'>
            <div className="sidebar flex gap-x-2 items-center justify-center mt-8 w-[11%] rounded-md p-2 bg-[#119958] mb-2">
                Overview
                <div className="image">
                    <img src='/images/assets/dashboardasts/upper.png' width={15}/>
                </div>
            </div>
            <div className="bg-white rounded-md shadow-lg relative flex items-center justify-center">
                <div className="w-[40%] mt-5 mb-5">
                    <img className='object-contain mt-5 mb-5' src="/images/assets/dashboardasts/ev.png" />
                </div>
                <div className="absolute top-[30%] left-[10%] w-[20%]">
                    <p className='text-[#009765] text-xl'>ENVIRONMENT</p>
                    <p className='w-[80%] text-black text-xs'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
                <div className="absolute top-[2%] right-[5%] w-[20%]">
                    <p className='text-[#009765] text-xl'>SOCIAL</p>
                    <p className='w-[80%] text-black text-xs'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
                <div className="absolute bottom-2 right-[10%] w-[20%]">
                    <p className='text-[#009765] text-xl'>GOVERNMENT</p>
                    <p className='w-[80%] text-black text-xs'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
            </div>
            <div className="mt-4 mb-4 flex rounded-lg items-center justify-around bg-white h-[30vh] shadow-lg w-full">
                <div className="h-full flex flex-col items-center justify-center">
                    <div className='text-xl text-black mb-0'>E</div>
                    <div className='h-[20vh]'>
                        <DonApp label={"33%"} data={{  
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
                </div>
                <div className="h-full flex flex-col items-center justify-center">
                    <div className='text-xl text-black mb-0'>E</div>
                    <div className='h-[20vh]'>
                        <DonApp label={"55%"} data={{  
                    datasets: [
                        {
                            label: '# of Votes',
                            data: [20, 30],
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
                <div className="h-full flex flex-col items-center justify-center">
                    <div className='text-xl text-black mb-0'>E</div>
                    <div className='h-[20vh]'>
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
            <div className="z-10 mt-4 mb-4 flex rounded-lg items-center justify-around bg-white shadow-lg w-full">
                <LineApp/>
            </div>
        </div>
        <div className=" mt-[-30%] xl:mt-[-28%] flex w-full justify-end">
            <img src="/images/assets/revit/bottom.png"/>
        </div>
    </div>
  )
}

export default page