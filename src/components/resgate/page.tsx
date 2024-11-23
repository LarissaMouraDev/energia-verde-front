'use client'
import React from 'react'
import style from 'styled-jsx/style'

interface ResgateProps {
    valor: number
    pontos: number
}


export default function Resgate({ slug } : { slug: string }) {
    const [desconto, setDesconto] = React.useState<ResgateProps[]>([
        {
            valor: 30,
            pontos: 500
        },
        {
            valor: 60,
            pontos: 1000
        }
    ])
    const [saldo, setSaldo] = React.useState(1300)   
    const [instalacao, setInstalacao] = React.useState('545544')
    const [novoSaldo, setNovoSaldo] = React.useState(0)

    // Pegar as informações com request para a API com tipo

    const handleConfirmarResgate = () => {}

    return (
        <>
        <div className='text-left font-bold text-4xl text-green-950'>Conta de {slug}</div>
          {desconto.map((item, index) => (
              <div key={index} onClick={() => setNovoSaldo(item.valor)} className='cursor-pointer p-4 rounded-xl w-full flex flex-col gapp-2 bg-green-200'> 
                <div className='flex flex-col gap-2 pl-10 text-2xl'>
                    <div className='text-green-950 font-semibold'>
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(item.valor)} de desconto
                    </div>
                    <div className='text-xl text-right'>{item.pontos} pontos</div>
                </div>                  
            </div>
          ))}
          <div className='flex flex-col gap-1'>
            <div className='text-left font-bold text-4xl text-green-950'>Número da Instalação</div>
            <div  className='p-4 rounded-xl w-full flex flex-col gapp-2 bg-green-200'> 
                {instalacao}     
            </div>
          </div>
          <div className='p-4 rounded-xl w-full flex flex-col gapp-2 bg-green-200 font-semibold text-xl'> 
                <div>Saldo Atual: {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(saldo)}</div>  
                <div>Saldo após o Resgate: {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(saldo - novoSaldo)}</div>  
            </div>
          <button className='bg-green-500 mt-4 rounded-full  font-bold text-2xl p-4 duration-300 hover:bg-green-600' onClick={handleConfirmarResgate}>Confirmar Resgate</button>
        </>
    )
}
