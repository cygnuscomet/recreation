import React from 'react'
import Image from 'next/image'

import DropDownIcon from './dropdownIcon'

import styles from './navbar.module.css'
import Link from 'next/link'
import DropDownComponent from './dropDownComponent'
import ButtonComponent from './buttonComponent'

const Navbar = () => {
    return (
        <nav className={`flex flex-row space-x-11 justify-between py-10 mx-20 font-bold text-lg items-center`}>
            <Link href='/'>
                <Image
                    src="/ioni_logo.svg"
                    width={90}
                    height={90}
                    alt="Website logo"
                />
            </Link>
            <ul className='flex flex-row space-x-7'>
                <li className='flex items-center'>
                    Features
                    <DropDownIcon />

                    <DropDownComponent list={['AI Assistant', 'AI Chatbot', 'AI Search', 'AI Widget Builder', 'Conversations Analytics', 'Chatbot to Human']} />
                </li>
                <li className='flex items-center'>
                    Resources
                    <DropDownIcon />
                </li>
                <li>
                    <Link href='/pricing'>
                        Pricing
                    </Link>
                </li>
                <li>FAQ</li>
            </ul>
            <ButtonComponent text='Contact Sales' />
        </nav>
    )
}

export default Navbar