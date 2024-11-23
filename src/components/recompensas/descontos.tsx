'use client'
import React from 'react'
import saldo from './saldo'
import Link from 'next/link'

export default function Descontos() {
    const [descontoAgua, setDescontoAgua] = React.useState(10)
    const [descontoLuz, setDescontoLuz] = React.useState(15)

    const handleResgate = (tipo: string) => {}


    return (
        <>
            <div className='text-left font-bold text-xl text-green-950'>Descontos Disponíveis</div>
            <div className='p-4 text-2xl rounded-xl w-full flex flex-col gapp-2 bg-green-300'>
                <div className='flex gap-2'>
                    <div className='h-8 w-8 bg-yellow-300 rounded-full'></div>
                    <div>Conta de Luz</div>
                </div>
                <div className='flex flex-col gap-2 pl-10'>
                    <div>500 pontos = R$ 30,00</div>
                    <div>1000 pontos = R$ 70,00</div>
                </div>
                <button className='bg-green-500 mt-4 rounded-full  font-bold text-2xl p-4 duration-300 hover:bg-green-600' onClick={() => handleResgate('luz')}>Resgatar Pontos</button>
            </div>
            <div className='p-4 text-2xl rounded-xl w-full flex flex-col gapp-2 bg-green-300'>
                <div className='flex gap-2'>
                    <div className='h-8 w-8 bg-blue-800 rounded-full'></div>
                    <div>Conta de Água</div>
                </div>
                <div className='flex flex-col gap-2 pl-10'>
                    <div>500 pontos = R$ 25,00</div>
                    <div>1000 pontos = R$ 60,00</div>
                </div>
                <button className='bg-green-500 mt-4 rounded-full  font-bold text-2xl p-4 duration-300 hover:bg-green-600' onClick={() => handleResgate('agua')}>Resgatar Pontos</button>
            </div>
            <Link href="/coleta" className='bg-green-500 mt-4 rounded-full text-center  font-bold text-2xl p-4 duration-300 hover:bg-green-600'>Coleta</Link>
        </>
    )
}
