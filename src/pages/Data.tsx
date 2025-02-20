import { DataTable } from '@/components/DataTable'
import { HeaderApp } from '../components/HeaderApp'
import './Data.css'


export const Data = () => {
  return (
  <>
    <HeaderApp title='DATA'/>
    <main>
        <section data-testid='data-container'>
        <DataTable/>
        </section>
    </main>
  </>

  )
}