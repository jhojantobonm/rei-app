import { ContentInformation } from '../components/ContentInformation'
import { HeaderApp } from '../components/HeaderApp'
import { MenuInformation } from '../components/MenuInformation'
import { content } from '../content/content'
import { useContextApp } from '../context/useContextApp'
import './Home.css'


export const Home = () => {
  const {contentId} = useContextApp();
  
  return (
  <>
    <HeaderApp title='INFORMATION'/>
    <main>
        <section data-testid='home-container' 
          className='pl-6 pr-6 pb-[6rem] md:pl-[9rem] md:pr-[9rem]' >
          <MenuInformation className='mt-3 md:mt-12' />
          {
            <ContentInformation 
            title={content[contentId].title} 
            image={content[contentId].image}>{content[contentId].description}</ContentInformation>
          }
        </section>
    </main>
  </>

  )
}