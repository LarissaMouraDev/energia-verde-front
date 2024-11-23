import React from 'react'

interface ColetaProps {
    data: string
    horario: string
    tipo: string
    peso: string
    foto: string
}


export default function Inputs() {
    const [data, setData] = React.useState<ColetaProps>({ data: '', horario: '', tipo: '', peso: '', foto: '' })
   
    const handleConfirmarAgenda = () => {

        window.location.href = '/recompensas'
    }
   
    return (
        <div className='flex flex-col gap-2 p-12'>        
            <div className='text-left font-bold text-xl text-green-950'>Agendar Coleta</div>
            <div className='flex flex-col gap-2 w-full'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="data" className='text-zinc-500 font-semibold'>Data da Coleta</label>
                    <input type="date" id="data" onChange={(e) => setData({ ...data, data: e.target.value })} className='bg-zinc-300 rounded-md h-12 p-2 text-black border-2 data-[error=true]:border-red-500' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="horario" className='text-zinc-500 font-semibold'>Horário</label>
                    <input type="time" id="horario" placeholder='08:00' onChange={(e) => setData({ ...data, horario: e.target.value })} className='bg-zinc-300 rounded-md h-12 p-2 text-black border-2 data-[error=true]:border-red-500' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="tipo" className='text-zinc-500 font-semibold'>Tipo de Resíduo</label>
                    <input type="text" id="tipo" placeholder='Ôrganico' onChange={(e) => setData({ ...data, tipo: e.target.value })} className='bg-zinc-300 rounded-md h-12 p-2 text-black border-2 data-[error=true]:border-red-500' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="peso" className='text-zinc-500 font-semibold'>Peso estimado (kg)</label>
                    <input type="number" placeholder="10" onChange={(e) => setData({ ...data, peso: e.target.value })} className='bg-zinc-300 rounded-md h-12 p-2 text-black border-2 data-[error=true]:border-red-500' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="foto" className='text-zinc-500 font-semibold'>Confirmar senha</label>
                    <textarea placeholder="Link para foto" onChange={(e) => setData({ ...data, foto: e.target.value })} className='bg-zinc-300 rounded-md h-12 p-2 text-black border-2 data-[error=true]:border-red-500' />
                </div>        
            </div>       
            <button className='bg-green-500 mt-4 rounded-full text-white font-bold text-2xl p-4 duration-300 hover:bg-green-600' onClick={handleConfirmarAgenda}>Confirmar Agendar</button>
        </div>
    )
}
