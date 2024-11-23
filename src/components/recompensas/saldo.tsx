'use client'
import React from 'react'

export default function Saldo() {
    const [saldo, setSaldo] = React.useState(1300)

    return (
        <div className='p-4 rounded-xl w-full flex flex-col gapp-2 text-lg bg-green-300'>
            <div className='text-green-500 text-2xl'>Saldo Disponível</div>
            <div className='grid grid-cols-2 gap-2 items-center'>
                <div className='text-6xl font-semibold'>{saldo}</div>
                <div className='text-center text-2xl'>Pontos</div>
            </div>
        </div>
    )
}