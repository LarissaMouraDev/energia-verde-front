'use client'
import Header from '@/components/header/page'
import Descontos from '@/components/recompensas/descontos'
import Saldo from '@/components/recompensas/saldo'
import React from 'react'

export default function Recompensas() {
    const [saldo, setSaldo] = React.useState(1300)

    return (
        <>
         <Header text="Minhas Recompensas" />
         <div className='flex flex-col gap-8 p-8'>
            <Saldo />
            <Descontos />
         </div>
        </>
    )
}
