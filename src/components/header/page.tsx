import React from 'react'
import { text } from 'stream/consumers'

interface HeaderProps {
    text?: string
}

export default function Header({
    text = 'Header',
}: HeaderProps) { 
  return (
    <>
      <div className='h-20 w-full text-center items-center justify-center'>{text}</div>
    </>
  )
}
