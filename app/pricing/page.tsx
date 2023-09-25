import Footer from '@/components/footerComponent'
import Navbar from '@/components/navbar'
import React from 'react'

import Image from 'next/image'
import ButtonComponent from '@/components/buttonComponent'

const PricingPage = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center my-10">
				<div className="text-5xl font-bold">
                Pricing plans
				</div>
				<div className="text-lg mt-6">
                Use ioni for free with your whole team. Upgrade to enable unlimited issues, enhanced security controls, and additional features.
				</div>	
			</div>
            <div className="grid grid-cols-3 px-40 py-10 gap-2 place-items-center my-2">
                <div className="p-14 w-96 flex flex-col justify-center shadow-lg rounded-lg">
						<div className="font-bold text-2xl my-2">
							Basic
						</div>
                        <div className="font-bold text-xl my-2">
							Free Beta
						</div>
                        <div className="font-bold text-3xl my-2">
                        $ 29.00 <span className='text-xl font-normal'> /mo </span>
						</div>
                        
                        <hr></hr>
						<div className="text-xl mt-2 font-bold">
                            What's included
                            
                            <ul className='text-base font-normal'>
                                <li className='my-4'>
                                    <div className='flex flex-row justify-center items-center gap-6'>
                                        <Image src='/check.svg' width={24} height={24} alt='Check icon'/>
                                        Up to 1000 AI-generated responses
                                    </div>
                                    
                                </li>
                                    
                                <li className='my-4'>
                                    <div className='flex flex-row justify-center items-center gap-6'>
                                        <Image src='/check.svg' width={24} height={24} alt='Check icon'/>
                                        0.20 USD per each additional auto response
                                    </div>
                                </li>

                                <li className='my-4'>
                                    <div className='flex flex-row justify-center items-center gap-6'>
                                        <Image src='/check.svg' width={24} height={24} alt='Check icon'/>
                                        Up to 100 Guide AI responses
                                    </div>
                                </li>
                            </ul>
                            <div className='mt-10'>
                                <ButtonComponent text='Free trial' />
                            </div>
						</div>
				</div>

                <div className="p-14 w-96 flex flex-col justify-center shadow-lg rounded-lg">
						<div className="font-bold text-2xl my-2">
                        Advanced
						</div>
                        <div className="font-bold text-xl my-2">
							Free Beta
						</div>
                        <div className="font-bold text-3xl my-2">
                        $ 69.00 <span className='text-xl font-normal'> /mo </span>
						</div>
                        
                        <hr></hr>
						<div className="text-xl mt-2 font-bold">
                            What's included
                            
                            <ul className='text-base font-normal'>
                                <li className='my-4'>
                                    <div className='flex flex-row justify-center items-center gap-6'>
                                        <Image src='/check2.svg' width={24} height={24} alt='Check icon'/>
                                        Up to 5000 AI-generated responses
                                    </div>
                                    
                                </li>
                                    
                                <li className='my-4'>
                                    <div className='flex flex-row justify-center items-center gap-6'>
                                        <Image src='/check2.svg' width={24} height={24} alt='Check icon'/>
                                        0.15 USD per each additional auto response
                                    </div>
                                </li>

                                <li className='my-4'>
                                    <div className='flex flex-row justify-center items-center gap-6'>
                                        <Image src='/check2.svg' width={24} height={24} alt='Check icon'/>
                                        Up to 500 Guide AI responses
                                    </div>
                                </li>
                            </ul>
                            <div className='mt-10'>
                                <ButtonComponent text='Free trial' />
                            </div>
						</div>
				</div>

                <div className="p-14 w-96 flex flex-col justify-center shadow-lg rounded-lg">
						<div className="font-bold text-2xl my-2">
							Professional
						</div>
                        <div className="font-bold text-xl my-2">
							Custom
						</div>
                        <div className="font-bold text-3xl my-2">
                        Custom <span className='text-xl font-normal'> /mo </span>
						</div>
                        
                        <hr></hr>
						<div className="text-xl mt-2 font-bold">
                            What's included
                            
                            <ul className='text-base font-normal'>
                                <li className='my-4'>
                                    <div className='flex flex-row justify-center items-center gap-6'>
                                        <Image src='/check.svg' width={24} height={24} alt='Check icon'/>
                                        Сustom number of AI-generated responseses
                                    </div>
                                    
                                </li>
                                    
                                <li className='my-4'>
                                    <div className='flex flex-row justify-center items-center gap-6'>
                                        <Image src='/check.svg' width={24} height={24} alt='Check icon'/>
                                        Сustom price per each additional auto response
                                    </div>
                                </li>

                                <li className='my-4'>
                                    <div className='flex flex-row justify-center items-center gap-6'>
                                        <Image src='/check.svg' width={24} height={24} alt='Check icon'/>
                                        Сustom number of guide AI responses
                                    </div>
                                </li>
                            </ul>

                            <div className='mt-10'>
                                <ButtonComponent text='Free trial' />
                            </div>
						</div>
				</div>
			</div>
            <Footer />
        </>
    )
}

export default PricingPage