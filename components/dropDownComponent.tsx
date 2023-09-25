import React from 'react'

import styles from './navbar.module.css'

interface dropDownList {
        list: string[]
}

const DropDownComponent = ({ list }: dropDownList) => {
    return (
        <div className={`absolute hidden ${styles.dropDownMenu} mt-64 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
            <div className="py-1" role="none">
                {list.map((item, index) => (
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm font-light hover:bg-gray-300" role="menuitem" tabIndex={-1} id={`menu-item-${index}`} key={index}>
                        {item}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default DropDownComponent