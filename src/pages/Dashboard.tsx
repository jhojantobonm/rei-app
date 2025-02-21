import { HeaderApp } from '../components/HeaderApp'
import './Dashboard.css'
import { ChartWrapper } from '@/components/ChartWrapper'
import { chartContents } from '@/content/content'
import { CarouselComp } from '@/components/CarouselComp'
import { useContextApp } from '@/context/useContextApp'




export const Dashboard = () => {
  const {carouselCount} = useContextApp();

  return (
  <>
    <HeaderApp title='DASHBOARD'/>
    <main>
        <section data-testid='dashboard-container'
          className='p-10 pb-24 md:pl-[9rem] md:pr-[9rem]'
        >
          <CarouselComp/>
          {
            <ChartWrapper 
              title={chartContents[carouselCount].title}
              desc={chartContents[carouselCount].description}
            >
              {chartContents[carouselCount].chart}
            </ChartWrapper>
          }

        </section>
    </main>
  </>

  )
}