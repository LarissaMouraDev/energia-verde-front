import React from 'react'
import Header from '../header/page'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex flex-col items-center w-full h-screen'>
      <Header />
      <div className='flex items-center flex-col gap-8 p-6'>
        <div className="text-center text-green-900 font-bold text-4xl">Bem - Vindo</div>
        <div className='flex bg-green-500 rounded-full h-56 w-56 items-center justify-center text-white font-bold text-2xl'>Energia Verde</div>
        <div className='grid grid-cols-2 items-center gap-2  justify-center w-full mt-6'>
          <Link href="/login" className='bg-green-600 text-center w-full text-white rounded-xl cursor-pointer hover:bg-green-700 duration-200 px-12 py-1'>Login</Link>
          <Link href="/cadastro" className='bg-green-700 text-center w-full text-white rounded-xl cursor-pointer hover:bg-green-800 duration-200 px-12 py-1'>Cadastro</Link>
        </div>
      </div>
    </div>
  )
}
