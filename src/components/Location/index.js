/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FiNavigation } from 'react-icons/fi'
const Location = ({ embed, name, url }) => {
    return (

        <div
            className={[
                'flex flex-col p-4 text-content font-medium bg-layout-600 rounded-md my-2 w-full gap-3 transition-all',
            ].join(' ')}

        >
            <div className="flex items-center gap-2">
                <div className="flex justify-between items-center">
                    <img src='/assets/icons/location.png' alt={name} width='34px' />
                </div>
                <p className='leading-none'>
                    {name}
                </p>
            </div>

            <>
                <iframe src={embed} width="100%" height="300" style={{ border: 0, borderRadius: '6px' }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <a
                    className={[
                        'flex items-center justify-center leading-none p-3 w-full gap-2 bg-primary-600 rounded-md transition-all',
                        'hover:bg-primary-700 hover:scale-[1.02]',
                        'active:bg-primary-600 active:scale-100',
                    ].join(' ')}
                    href={url}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <FiNavigation size={20} />
                    Navigate
                </a>
            </>
        </div>
    )
}

export default Location