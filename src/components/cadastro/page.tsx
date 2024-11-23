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
    confirmPassword: string
}

interface AddressProps {
    cep: string
    rua:    string
    numero: string
    complemento: string
    bairro: string
}

interface InstalacaoProps {
    luz: string
    agua: string
}

export default function Cadastro() {
    const [step, setStep] = React.useState(2)
    const [loading, setLoading] = React.useState(false)
    const [data, setData] = React.useState<CadastroProps>({name: '', cpf: '', email: '', cellphone: '', password: '', confirmPassword: ''})
    const [address, setAddress] = React.useState<AddressProps>({cep: '', rua: '', numero: '', complemento: '', bairro: ''})
    const [instalacao, setInstalacao] = React.useState<InstalacaoProps>({luz: '', agua: ''})


    const handleNextStep = () => { 
        // Checar se os campos estão preenchidos
        if (step === 1) {
            if (!data.name || !data.cpf || !data.cellphone || !data.password || !data.confirmPassword) {
                alert('Preencha todos os campos')
                return
            }
            if (data.password != data.confirmPassword) {
                alert('As senhas não conferem')
                return
            }            
        }
      
        const newStep = step + 1
        setStep(newStep)
    }

    const handleFinalizar = () => {
        // Checar se os campos estão preenchidos
        if (!address.cep || !address.rua || !address.numero || !address.bairro || !instalacao.luz || !instalacao.agua) {
            alert('Preencha todos os campos')
            return
        }

        // Cadastrar
        console.log(data)

        setStep(3)

    }

    // Voltar a etapada
    const handleBack = () => {
        if (step != 1) {
            const newStep = step - 1
            setStep(newStep)
        }
    }



  return (
    <div className='flex flex-col items-center w-full h-screen'>
        {step === 1 ? (
            <Header text="Criar conta" />
        ) : (

            <Header text="Criar conta" handleFunction={handleBack} />
        )}
      <div className='flex items-center flex-col gap-6 py-6 px-16 w-full'>
        {step === 1 && (           
            <>   
                <div className='text-left font-bold text-xl text-green-950'>Dados pessoais</div>
                <div className='flex flex-col gap-2 w-full'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="name" className='text-zinc-500 font-semibold'>Nome Completo</label>
                        <input type="text" id="name" onChange={(e) => setData({ ...data, name: e.target.value })} placeholder='Maria' className='bg-zinc-300 rounded-md h-12 p-2 text-black border-2 data-[error=true]:border-red-500' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="cpf" className='text-zinc-500 font-semibold'>CPF</label>
                        <input type="text" id="cpf" placeholder='123.456.789-10' onChange={(e) => setData({ ...data, cpf: e.target.value })} className='bg-zinc-300 rounded-md h-12 p-2 text-black border-2 data-[error=true]:border-red-500' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="phone" className='text-zinc-500 font-semibold'>Celular ou Telefone</label>
                        <input type="text" id="phone" placeholder='11 99999-9999' onChange={(e) => setData({ ...data, cellphone: e.target.value })} className='bg-zinc-300 rounded-md h-12 p-2 text-black border-2 data-[error=true]:border-red-500' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="password" className='text-zinc-500 font-semibold'>Senha</label>
                        <input type="password" placeholder='***********' onChange={(e) => setData({ ...data, password: e.target.value })} className='bg-zinc-300 rounded-md h-12 p-2 text-black border-2 data-[error=true]:border-red-500' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="password" className='text-zinc-500 font-semibold'>Confirmar senha</label>
                        <input type="password" placeholder='***********' onChange={(e) => setData({ ...data, confirmPassword: e.target.value })} className='bg-zinc-300 rounded-md h-12 p-2 text-black border-2 data-[error=true]:border-red-500' />
                    </div>                
                    <button className='bg-green-500 mt-4 rounded-full text-white font-bold text-2xl p-4 duration-300 hover:bg-green-600' onClick={handleNextStep}>Continuar</button>
                   
                </div>
            </>
        )}
       {step === 2 && (           
            <>                  
                <div className='text-left font-bold text-xl text-green-950'>Endereço</div>          
                <div className='flex flex-col gap-2 w-full'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="cep" className='text-zinc-500 font-semibold'>CEP</label>
                        <input type="text" id="cep" onChange={(e) => setAddress({ ...address, cep: e.target.value })} placeholder='01234-567' className='bg-zinc-300 rounded-md h-12 p-2 text-black border-2 data-[error=true]:border-red-500' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="rua" className='text-zinc-500 font-semibold'>Rua</label>
                        <input type="text" id="rua" placeholder='Rua dos Bobos' onChange={(e) => setAddress({ ...address, rua: e.target.value })} className='bg-zinc-300 rounded-md h-12 p-2 text-black border-2 data-[error=true]:border-red-500' />
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="numero" className='text-zinc-500 font-semibold'>Número</label>
                            <input type="text" id="numero" placeholder='10' onChange={(e) => setAddress({ ...address, numero: e.target.value })} className='bg-zinc-300 rounded-md h-12 p-2 text-black border-2 data-[error=true]:border-red-500' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="complemento" className='text-zinc-500 font-semibold'>Complemento</label>
                            <input type="text" placeholder="Casa amarela" onChange={(e) => setAddress({ ...address, complemento: e.target.value })} className='bg-zinc-300 rounded-md h-12 p-2 text-black border-2 data-[error=true]:border-red-500' />
                        </div>
                    </div>                    
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="bairro" className='text-zinc-500 font-semibold'>Bairro</label>
                        <input type="bairro" placeholder="Ipiranga" onChange={(e) => setAddress({ ...address, bairro: e.target.value })} className='bg-zinc-300 rounded-md h-12 p-2 text-black border-2 data-[error=true]:border-red-500' />
                    </div>  
                </div>

                <div className='text-left font-bold text-xl text-green-950 mt-6'>Contas para Desconto</div>          
                <div className='flex flex-col gap-2 w-full'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="luz" className='text-zinc-500 font-semibold'>N° da instalação da Luz</label>
                        <input type="text" id="luz" onChange={(e) => setInstalacao({ ...instalacao, luz: e.target.value })} placeholder='01234-567' className='bg-zinc-300 rounded-md h-12 p-2 text-black border-2 data-[error=true]:border-red-500' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="agua" className='text-zinc-500 font-semibold'>N° da instalação da Água</label>
                        <input type="text" id="agua" placeholder='Rua dos Bobos' onChange={(e) => setInstalacao({ ...instalacao, agua: e.target.value })} className='bg-zinc-300 rounded-md h-12 p-2 text-black border-2 data-[error=true]:border-red-500' />
                    </div>                   
                </div>        
                <button className='bg-green-500 mt-4 rounded-full text-white font-bold text-2xl p-4 duration-300 hover:bg-green-600' onClick={handleFinalizar}>Finalizar Cadastro</button>
                   
            </>
        )}
        {step === 3 && (
                <>
                     <div className='flex bg-green-500 rounded-full h-56 w-56 items-center justify-center text-white font-bold text-2xl'>Energia Verde</div>
                     <div className='font-bold text-2xl'>Cadastro Concluído com Sucesso!</div>
                     <div className='p-2 rounded-xl w-full flex flex-col text-lg bg-green-300 px-4'>
                        <div className='text-center mb-6'>Você já pode começar:</div>
                        <div>Agendar Coleta</div>
                        <div>Acumular pontos</div>
                        <div>Resgatar Descontos</div>
                        <div>Contribuir com o Meio Ambiente</div>
                     </div>
                     <Link href="/painel" className='bg-green-500 mt-4 rounded-full font-bold text-2xl p-2 px-24 duration-300 hover:bg-green-600'>Começar</Link>
                </>
            )
        }
      </div>
    </div>
  )
}
