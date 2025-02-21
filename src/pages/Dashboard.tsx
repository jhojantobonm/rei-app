import { HeaderApp } from '../components/HeaderApp'
import './Dashboard.css'


export const Dashboard = () => {
  return (
  <>
    <HeaderApp title='DASHBOARD'/>
    <main>
        <section data-testid='dashboard-container'
          className='p-10 pb-24 md:pl-[9rem] md:pr-[9rem]'
        >

        </section>
    </main>
  </>

  )
}