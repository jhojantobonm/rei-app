import { useTranslation } from 'react-i18next'
import { ContentInformation } from '../components/ContentInformation'
import { HeaderApp } from '../components/HeaderApp'
import { MenuInformation } from '../components/MenuInformation'
import { getContent } from '../content/content'
import { useContextApp } from '../context/useContextApp'
import './Home.css'


export const Home = () => {
  const {contentId} = useContextApp();
  const {t} = useTranslation();
  const content = getContent(t);
  
  return (
  <>
    <HeaderApp title={t('information.home-title')}/>
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