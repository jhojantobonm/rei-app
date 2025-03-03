import { useTranslation } from 'react-i18next'
import { ContentInformation } from '../components/ContentInformation'
import { HeaderApp } from '../components/HeaderApp'
import { MenuInformation } from '../components/MenuInformation'
import { content } from '../content/content'
import { useContextApp } from '../context/useContextApp'
import './Home.css'
import { useState } from 'react'


export const Home = () => {
  const {contentId} = useContextApp();

  const {t, i18n: {changeLanguage, language}} = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);


  const handleChangeLanguage = ()=>{
    const newLanguage  =  currentLanguage === 'en' ? 'es':'en';
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  }

  
  return (
  <>
    <HeaderApp title={t('headerTitle',{appName: 'Jhojan'})}/>
    <button onClick={handleChangeLanguage}>
       change
    </button>
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