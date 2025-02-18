import { MenuInformation } from '../components/MenuInformation'
import './Home.css'


export const Home = () => {
  return (
  <section data-testid='home-container'>
    <header>
      <figure>
        <div id='mask-header' className='w-full h-[130px]'></div>
      </figure>
      <h1 className="text-center text-3xl font-bold mt-5">INFORMATION</h1> 
    </header>
    <section className='pl-6 pr-6'>
      <MenuInformation className='mt-10' />

    </section>
  </section>
  )
}