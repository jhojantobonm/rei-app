import { useTranslation } from "react-i18next"

interface SolarProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}


export const ContentInformationHydro = (props:SolarProps) => {
  const {t} = useTranslation();

  return (
    <div className="mt-4" data-testid='content-info-hydro' {...props}>
      <div dangerouslySetInnerHTML={{__html: t('information.hydro_energy.description')}}></div>
      <h3 className="mt-4 text-3xl font-semibold">{t('information.hydro_energy.how_it_works.title')}</h3>
      <ol className='pl-6 mt-4'>
      <li dangerouslySetInnerHTML={{__html: t('information.hydro_energy.how_it_works.steps.water_flow')}}></li>
      <li className="mt-3.5" 
        dangerouslySetInnerHTML={{__html: t('information.hydro_energy.how_it_works.steps.turbine_rotation')}}
        ></li>
      <li className="mt-3.5" 
        dangerouslySetInnerHTML={{__html: t('information.hydro_energy.how_it_works.steps.electricity_generation')}}></li>
      </ol>
      <h3 className="mt-4 text-3xl font-semibold">{t('information.hydro_energy.advantages.title')}</h3>
      <ul className="mt-3 pl-3">
        <li>{t('information.hydro_energy.advantages.list.renewable')}</li>
        <li>{t('information.hydro_energy.advantages.list.low_emissions')}</li>
        <li>{t('information.hydro_energy.advantages.list.reliable')}</li>
      </ul>
      <h3 className="mt-4 text-3xl font-semibold">{t('information.hydro_energy.disadvantages.title')}</h3>
      <ul className="m-3 pl-3">
        <li>{t('information.hydro_energy.disadvantages.list.ecosystem_impact')}</li>
        <li>{t('information.hydro_energy.disadvantages.list.high_cost')}</li>
        <li>{t('information.hydro_energy.disadvantages.list.water_dependency')}</li>
      </ul>
    </div>
  )
}