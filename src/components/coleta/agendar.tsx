import Link from 'next/link'
import React from 'react'

export default function Agenda() {
  return (
    <>
        <div className='flex bg-green-500 rounded-full h-56 w-56 items-center justify-center text-white font-bold text-2xl'>Energia Verde</div>
        <div className='text-left font-bold text-2xl text-green-950'>Próxima Coleta</div>
        <div className='p-4 rounded-xl w-full flex flex-col gapp-2 bg-green-200 ont-semibold text-xl'> 
            <div className='text-center font-bold'>Resíduos Recicláveis</div>
            <div className='text-green-800 text-center font-semibold'>Segunda-Feira, 9:00</div>
        </div>

        <Link href="/agendar" className='bg-green-500 mt-4 rounded-full  font-bold text-2xl p-4 duration-300 hover:bg-green-600'>Agendar</Link>
    </>
  )
}
