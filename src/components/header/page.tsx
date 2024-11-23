import React from 'react'
import { text } from 'stream/consumers'

interface HeaderProps {
    text?: string
}

export default function Header({
    text,
}: HeaderProps) { 
  return (
    <>
      <div className='bg-green-500 h-18 py-2 w-full flex text-center items-center justify-center text-white text-2xl font-bold'>{text}</div>
    </>
  )
}
