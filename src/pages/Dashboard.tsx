import { HeaderApp } from '../components/HeaderApp'
import './Dashboard.css'
import { ChartWrapper } from '@/components/ChartWrapper'
import { chartContents } from '@/content/content'




export const Dashboard = () => {
  return (
  <>
    <HeaderApp title='DASHBOARD'/>
    <main>
        <section data-testid='dashboard-container'
          className='p-10 pb-24 md:pl-[9rem] md:pr-[9rem]'
        >
          {
            <ChartWrapper 
              title={chartContents[0].title}
              desc={chartContents[0].description}
            >
              {chartContents[0].chart}
            </ChartWrapper>
          }

        </section>
    </main>
  </>

  )
}