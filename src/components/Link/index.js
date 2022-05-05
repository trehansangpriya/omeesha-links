/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Link = ({ name, url, icon }) => {
    return (
        <a
            className={[
                'flex items-center p-4 text-content font-medium bg-layout-600 rounded-md my-2 w-full gap-3 transition-all',
                'hover:bg-layout-700 hover:scale-[1.02]',
                'active:bg-layout-600 active:scale-100',
            ].join(' ')}
            href={url}
            target='_blank'
            rel='noopener noreferrer'
        >
            <div className="flex justify-between items-center">
                <img src={`/assets/icons/${icon}.png`} alt={name} width='34px' />
            </div>
            <p className='leading-none'>
                {name}
            </p>
        </a>
    )
}

export default Link