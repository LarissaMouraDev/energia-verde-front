import React from 'react'
import { text } from 'stream/consumers'

interface HeaderProps {
    text?: string
    handleFunction?: () => void
}

export default function Header({ text, handleFunction }: HeaderProps) { 
  return (
    <>
      <div className='bg-green-500 h-18 py-2 w-full flex text-center items-center justify-center text-white text-2xl font-bold'>
        {handleFunction && <div onClick={handleFunction} className='absolute left-4 cursor-pointer text-sm hover:text-zinc-950'>Voltar</div>}
        {text}
      </div>
    </>
  )
}
