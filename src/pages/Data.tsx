import { DataTable } from '@/components/DataTable'
import { HeaderApp } from '../components/HeaderApp'

import './Data.css'
import { DataSelector } from '@/components/DataSelector'
import { useTranslation } from 'react-i18next'


export const Data = () => {
  const {t} = useTranslation();
  return (
  <>
    <HeaderApp title={t('data.title')}/>
    <main data-testid='data-container' id='data-container'>
        <h2 className='text-center mt-5 text-2xl font-semibold'>{t('data.subTitle',{yearFrom: '1965', yearTo:'2022'})}</h2>
        <section
          className='p-10 pb-24 md:pl-[9rem] md:pr-[9rem]'
        >
        <DataSelector/>
        <DataTable/>
        </section>
    </main>
  </>

  )
}