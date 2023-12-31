import React from 'react'

import Image from 'next/image'

import styles from './footerComponent.module.css'

const Footer = () => {
    return (
        <div className="grid grid-cols-5">
            <div className="bg-gray-800 p-4 border-r border-gray-500 text-white h-96 px-32 py-24 col-span-2">
            
            <svg width="85" height="24" viewBox="0 0 85 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 3.97547C0 2.16004 1.4717 0.688337 3.28714 0.688337C5.10257 0.688337 6.57427 2.16004 6.57427 3.97547V20.1163C6.57427 21.9317 5.10257 23.4034 3.28714 23.4034C1.4717 23.4034 0 21.9317 0 20.1163V3.97547Z" fill="white"/>
                <path d="M26.5647 24C24.219 24 22.1047 23.4646 20.222 22.3939C18.37 21.2925 16.8885 19.8394 15.7774 18.0344C14.6971 16.1989 14.157 14.1797 14.157 11.9771C14.157 9.77438 14.6971 7.77056 15.7774 5.96558C16.8885 4.16061 18.3855 2.72275 20.2683 1.65201C22.151 0.550669 24.2499 0 26.5647 0C28.9413 0 31.0556 0.550669 32.9075 1.65201C34.7903 2.72275 36.2718 4.17591 37.3521 6.01147C38.4632 7.81644 39.0188 9.80497 39.0188 11.9771C39.0188 14.1797 38.4632 16.1989 37.3521 18.0344C36.2718 19.8394 34.7903 21.2925 32.9075 22.3939C31.0248 23.4646 28.9105 24 26.5647 24ZM26.5647 17.8968C27.7067 17.8968 28.7099 17.6367 29.5741 17.1166C30.4692 16.566 31.1636 15.847 31.6575 14.9598C32.1822 14.0727 32.4445 13.0937 32.4445 12.0229C32.4445 10.9522 32.1822 9.97323 31.6575 9.08604C31.1636 8.19885 30.4692 7.49522 29.5741 6.97514C28.7099 6.42448 27.7067 6.14914 26.5647 6.14914C25.4536 6.14914 24.4505 6.42448 23.5554 6.97514C22.6912 7.49522 21.9967 8.19885 21.472 9.08604C20.9782 9.97323 20.7312 10.9522 20.7312 12.0229C20.7312 13.0937 20.9782 14.0727 21.472 14.9598C21.9967 15.847 22.6912 16.566 23.5554 17.1166C24.4505 17.6367 25.4536 17.8968 26.5647 17.8968Z" fill="white"/>
                <path d="M57.6511 6.37859C56.4165 6.37859 55.3979 6.68451 54.5954 7.29637C53.7929 7.87763 53.2065 8.65774 52.8361 9.63671C52.4658 10.5851 52.2806 11.6558 52.2806 12.849V20.1163C52.2806 21.9317 50.8089 23.4034 48.9934 23.4034C47.178 23.4034 45.7063 21.9317 45.7063 20.1163V12.0688C45.7063 9.86616 46.1384 7.86233 47.0026 6.05736C47.8977 4.2218 49.2249 2.76864 50.9842 1.6979C52.7435 0.59656 54.9658 0.0458912 57.6511 0.0458912C60.3364 0.0458912 62.5587 0.59656 64.318 1.6979C66.1081 2.76864 67.4508 4.2065 68.3459 6.01147C69.2409 7.81644 69.6885 9.83557 69.6885 12.0688V20.1163C69.6885 21.9318 68.2168 23.4034 66.4014 23.4034C64.5859 23.4034 63.1142 21.9317 63.1142 20.1163V12.849C63.1142 11.6864 62.9136 10.6157 62.5123 9.63671C62.1111 8.65774 61.5092 7.87763 60.7067 7.29637C59.9351 6.68451 58.9166 6.37859 57.6511 6.37859Z" fill="white"/>
                <path d="M78.4257 3.97547C78.4257 2.16004 79.8974 0.688337 81.7129 0.688337C83.5283 0.688337 85 2.16004 85 3.97547V20.1163C85 21.9317 83.5283 23.4034 81.7129 23.4034C79.8974 23.4034 78.4257 21.9317 78.4257 20.1163V3.97547Z" fill="white"/>
            </svg>

            <div className='mt-10 text-lg'>
                Boost your customer support productivity with ChatGPT-4
            </div>

            </div>
            
            <div className="bg-gray-800 p-4 text-white h-96 col-span-3 py-24 px-36 grid grid-cols-2">
                <div>
                    <div className='font-bold text-3xl mb-4'>Features</div>
                    <ul>
                        <li className='text-lg hover:text-purple-400 cursor-pointer'>AI Assistant</li>
                        <li className='text-lg hover:text-purple-400 cursor-pointer'>AI Chatbot</li>
                        <li className='text-lg hover:text-purple-400 cursor-pointer'>AI Search</li>
                        <li className='text-lg hover:text-purple-400 cursor-pointer'>AI Widget Builder</li>
                        <li className='text-lg hover:text-purple-400 cursor-pointer'>Conversations Analytics</li>
                        <li className='text-lg hover:text-purple-400 cursor-pointer'>Chatbot to Human</li>
                    </ul>
                </div>

                <div>
                    <div className='font-bold text-3xl mb-4'>Resources</div>
                    <ul>
                        <li className='text-lg hover:text-purple-400 cursor-pointer'>Pricing</li>
                        <li className='text-lg hover:text-purple-400 cursor-pointer'>Contact</li>
                        <li className='text-lg hover:text-purple-400 cursor-pointer'>Blog</li>
                        <li className='text-lg hover:text-purple-400 cursor-pointer'>FAQ</li>
                        <li className='text-lg hover:text-purple-400 cursor-pointer'>Security</li>
                        <li className='text-lg hover:text-purple-400 cursor-pointer'>Terms & Conditions</li>
                        <li className='text-lg hover:text-purple-400 cursor-pointer'>Privacy Policy</li>
                    </ul>
                </div>
            </div>
            
            <div className="bg-gray-800 p-4 border-t border-gray-500 text-white col-span-5 px-32">
                <div className='flex justify-between'>
                    <div className='font-bold text-lg'>
                        Copyright © 2023 | ioni
                    </div>
                    <div className='ml-auto flex flex-row gap-2 justify-center items-center'>
                        <Image src='/iconmonstr-facebook-1.svg' width={24} height={24} alt='Facebook icon' className={`${styles.footerSocialIcon}`}/>
                        <Image src='/iconmonstr-linkedin-3.svg' width={24} height={24} alt='Linkedin icon' className={`${styles.footerSocialIcon}`}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer