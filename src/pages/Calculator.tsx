import { CalculatorComp } from '@/components/CalculatorComp'
import { HeaderApp } from '../components/HeaderApp'
import './Calculator.css'
import { useTranslation } from 'react-i18next'


export const Calculator = () => {
  const {t} = useTranslation();
  return (
  <>
    <HeaderApp title={t('calculator.title')}/>
    <main data-testid='calculator-container' id='calculator-container' >
        <section 
          className='p-10 pb-24 md:pl-[9rem] md:pr-[9rem]'
        >
        <p className='text-[1.4rem] text-center'>{t('calculator.description')}</p>
        <div className='flex justify-center mt-10 md:mt-16'>
          <CalculatorComp/>
        </div>
        </section>
    </main>
  </>

  )
}