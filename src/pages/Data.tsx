import { DataTable } from '@/components/DataTable'
import { HeaderApp } from '../components/HeaderApp'
import './Data.css'
import { DataSelector } from '@/components/DataSelector'


export const Data = () => {
  return (
  <>
    <HeaderApp title='DATA'/>
    <main>
        <h2 className='text-center mt-5 text-2xl font-semibold'>From 1965 To 2022</h2>
        <section data-testid='data-container'
          className='p-10 pb-24 md:pl-[9rem] md:pr-[9rem]'
        >
        <DataSelector/>
        <DataTable/>
        </section>
    </main>
  </>

  )
}