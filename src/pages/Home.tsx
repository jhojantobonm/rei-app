import { ContentInformation } from '../components/ContentInformation'
import { FooterApp } from '../components/FooterApp'
import { HeaderApp } from '../components/HeaderApp'
import { MenuInformation } from '../components/MenuInformation'
import { content } from '../content/content'
import './Home.css'


export const Home = () => {

  return (
  <>
    <HeaderApp title='INFORMATION'/>
    <main>
        <section data-testid='home-container' 
          className='pl-6 pr-6 md:pl-[9rem] md:pr-[9rem]' >
          <MenuInformation className='mt-3 md:mt-12' />
          {
            content.map(item=><ContentInformation 
              title={item.title} 
              image={item.image}>{item.description}</ContentInformation>)
          }
        </section>
    </main>
    <FooterApp/>
  </>

  )
}