/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

const Location = ({ children, name }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (

        <div
            className={[
                'flex flex-col p-4 text-content font-medium bg-layout-600 rounded-md my-2 w-full gap-3 transition-all cursor-pointer',
                'hover:bg-layout-700 hover:scale-[1.02]',
                'active:bg-layout-600 active:scale-100',
            ].join(' ')}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex items-center">
                <div className="flex justify-between items-center">
                    <img src='/assets/icons/location.png' alt={name} width='34px' />
                </div>
                <p className='leading-none'>
                    {name}
                </p>
            </div>
            {isOpen && children}
        </div>
    )
}

export default Location