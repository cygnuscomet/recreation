import React from 'react'

import styles from './learnMoreComponent.module.css'

const LearnMoreComponent = () => {
    return (
        <div className={`${styles.learnMore} flex gap-2 mt-8 font-bold text-xl items-center`}>
            
            Learn More
            
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="24"
            height="24"
            >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
            />
            <line x1="3" y1="12" x2="16" y2="12" stroke="currentColor" stroke-width="2" />
            </svg>
        </div>
    )
}

export default LearnMoreComponent