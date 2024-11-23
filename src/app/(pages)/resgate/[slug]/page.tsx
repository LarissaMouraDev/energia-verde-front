'use client'

import React from 'react'
import { usePathname } from 'next/navigation';
import Resgate from '@/components/resgate/page'
import Header from '@/components/header/page';

export default function Page() {
    const pathname = usePathname()   
    const slug = pathname.split('/').pop()

    if (!slug) {
        return <div>Página não encontrado</div>
    }

    const handleBack = () => {
        window.history.back()
    }


  return (
    <>
        <Header text="Resgate" handleFunction={handleBack} />
        <div className='flex flex-col gap-6 p-6 px-16'>
            <Resgate slug={slug} />
        </div>
    </>
  )
}
