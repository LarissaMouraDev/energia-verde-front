import Agenda from '@/components/coleta/agendar'
import Header from '@/components/header/page'
import React from 'react'

export default function Page() {
  return (
    <>
      <Header />
      <div className='flex flex-col gap-6 mt-8 items-center p-8'>
        <Agenda />
      </div>
    </>
  )
}
