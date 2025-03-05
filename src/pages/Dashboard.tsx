import { HeaderApp } from '../components/HeaderApp'
import './Dashboard.css'
import { ChartWrapper } from '@/components/ChartWrapper'
import { getChartContents } from '@/content/content'
import { CarouselComp } from '@/components/CarouselComp'
import { useContextApp } from '@/context/useContextApp'
import { useTranslation } from 'react-i18next'

export const Dashboard = () => {
  const {carouselCount} = useContextApp();
  const {t} = useTranslation();

  const chartContents = getChartContents(t)

  return (
  <>
    <HeaderApp title={t('dashboard.title')}/>
    <main>
        <section data-testid='dashboard-container' id='dashboard-container'
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