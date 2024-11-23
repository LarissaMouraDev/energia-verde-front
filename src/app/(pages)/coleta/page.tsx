'use client'
import Agenda from '@/components/coleta/agendar'
import Header from '@/components/header/page'
import React from 'react'

export default function Page() {
    const handleInicio = () => {
        window.location.href = "/recompensas"
    }


  return (
    <>
      <Header text="Coleta" handleFunction={handleInicio} />
      <div className='flex flex-col gap-6 mt-8 items-center p-8'>
        <Agenda />
      </div>
    </>
  )
}
