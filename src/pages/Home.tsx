import { ContentInformation } from '../components/ContentInformation'
import { ContentInformationSolar } from '../components/ContentInformationSolar'
import { FooterApp } from '../components/FooterApp'
import { HeaderApp } from '../components/HeaderApp'
import { MenuInformation } from '../components/MenuInformation'
import './Home.css'


export const Home = () => {
  return (
  <section data-testid='home-container'>
    <HeaderApp title='INFORMATION'/>
    <section className='pl-6 pr-6'>
      <MenuInformation className='mt-3' />
      <ContentInformation className='mt-7 text-[1.4rem]' 
      title='Solar Energy' 
      image='https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'>
        <ContentInformationSolar/>
        
      </ContentInformation>
    

    </section>
    <FooterApp/>
  </section>
  )
}