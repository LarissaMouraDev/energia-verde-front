'use client'
import Inputs from '@/components/agendar/page'
import Header from '@/components/header/page'
import React from 'react'

export default function Page() {
    const handleVoltar = () => {
        window.history.back()
    }

  return (
    <>
        <Header text="Agendar Coleta" handleFunction={handleVoltar} />
       <Inputs />
    </>
  )
}
