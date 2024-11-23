'use client'
import React from 'react'
import Header from '../header/page'
import Link from 'next/link'

interface CadastroProps {
    name: string
    cpf: string
    email: string
    cellphone: string
    password: string
}

export default function Cadastro() {
    const [step, setStep] = React.useState(1)
    const [loading, setLoading] = React.useState(false)

    const handleLogin = () => { 
        setLoading(true)
        setStep(2)
        setTimeout(() => {
            setLoading(false)
            setStep(1)
        }, 2000)
    }


  return (
    <div className='flex flex-col items-center w-full h-screen'>
      <Header text="Criar conta" />
      <div className='flex items-center flex-col gap-6 py-6 px-16 w-full'>
        <div className='text-left font-bold text-xl text-green-950'>Dados pessoais</div>
        {step === 1 && (           
            <>                
                <div className='flex flex-col gap-2 w-full'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="name" className='text-zinc-500 font-semibold'>Nome Completo</label>
                        <input  type="email" placeholder='Maria' className='bg-zinc-300 rounded-md h-12 p-2 text-black border-2 data-[error=true]:border-red-500' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="password" className='text-zinc-500 font-semibold'>Senha</label>
                        <input type="password" placeholder='***********' className='bg-zinc-300 rounded-md h-12 p-2 text-black border-2 data-[error=true]:border-red-500' />
                    </div>
                    <div className='text-right font-semibold text-green-950 hover:underline underline-offset-2 duration-300 cursor-pointer hover:text-green-900'>Esqueci minha senha</div>
                    <button className='bg-green-500 mt-4 rounded-full text-white font-bold text-2xl p-4 duration-300 hover:bg-green-600' onClick={handleLogin}>Entrar</button>
                    <div className='text-zinc-400 text-center font-semibold'>ou</div>
                    <button className='rounded-full text-center p-3 bg-zinc-400 duration-300 font-semibold text-green-950 hover:bg-zinc-500'>Continuar com o Google</button>
                    <button className='rounded-full text-center p-3 bg-zinc-400 duration-300 font-semibold text-green-950 hover:bg-zinc-500'>Continuar com a Apple</button>
                    <div className='font-semibold text-center'>Não tem uma conta? <Link href="/cadastro" className='text-green-600 hover:text-green-700 hover:underline underline-offset-2'>Cadastre-se</Link></div>
                </div>
            </>
        )}
        {step === 2 && (
            <div className='text-green-950 font-bold text-3xl text-center mt-8'>
                <div>Entrando</div>
                <div>...</div>
            </div>
        )}
      </div>
    </div>
  )
}
