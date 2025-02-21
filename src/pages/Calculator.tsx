import { CalculatorComp } from '@/components/CalculatorComp'
import { HeaderApp } from '../components/HeaderApp'
import './Calculator.css'


export const Calculator = () => {
  return (
  <>
    <HeaderApp title='CALCULATOR'/>
    <main>
        <section data-testid='calculator-container'
          className='p-10 pb-24 md:pl-[9rem] md:pr-[9rem]'
        >
        <p className='text-[1.4rem] text-center'>Calculates the percentage of renewable energy consumption based on data collected from 1965 to 2022.</p>
        <div className='flex justify-center mt-10 md:mt-16'>
          <CalculatorComp/>
        </div>
        </section>
    </main>
  </>

  )
}