import { ContentInformation } from '../components/ContentInformation'
import { ContentInformationSolar } from '../components/ContentInformationSolar'
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
      <MenuInformation className='mt-3' />
      <ContentInformation className='mt-7 text-[1.4rem]' 
      title='Solar Energy' 
      image='https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'>
        <ContentInformationSolar/>
        
      </ContentInformation>
    

    </section>
  </section>
  )
}