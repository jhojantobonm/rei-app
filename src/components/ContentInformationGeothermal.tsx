import { useTranslation } from "react-i18next"

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}


export const ContentInformationGeothermal = (props:Props) => {
  const {t} = useTranslation();
  return (
    <div className="mt-4" data-testid='content-info-geothermal' {...props}>
      <div dangerouslySetInnerHTML={{__html: t('information.geothermal_energy.description')}}></div>      
      <h3 className="mt-4 text-3xl font-semibold">{t('information.geothermal_energy.how_it_works.title')}</h3>
      <ol className='pl-6 mt-4'>
        <li dangerouslySetInnerHTML={{__html: t('information.geothermal_energy.how_it_works.steps.heat_extraction')}}></li>
        <li dangerouslySetInnerHTML={{__html: t('information.geothermal_energy.how_it_works.steps.steam_generation')}}></li>
        <li dangerouslySetInnerHTML={{__html: t('information.geothermal_energy.how_it_works.steps.turbine_activation')}}></li>
        <li dangerouslySetInnerHTML={{__html: t('information.geothermal_energy.how_it_works.steps.electricity_production')}}></li>
      </ol>

      <h3 className="mt-4 text-3xl font-semibold">{t('information.geothermal_energy.types.title')}</h3>
      <ul id="types" className="mt-3 pl-8">
        <li dangerouslySetInnerHTML={{__html: t('information.geothermal_energy.types.list.dry_steam')}}></li>
        <li className="mt-3.5" dangerouslySetInnerHTML={{__html: t('information.geothermal_energy.types.list.flash_steam')}}></li>
        <li className="mt-3.5" dangerouslySetInnerHTML={{__html: t('information.geothermal_energy.types.list.binary_cycle')}}></li>
      </ul>
      <h3 className="mt-4 text-3xl font-semibold">{t('information.geothermal_energy.advantages.title')}:</h3>
      <ul className="mt-3 pl-3">
        <li>{t('information.geothermal_energy.advantages.list.reliable')}</li>
        <li>{t('information.geothermal_energy.advantages.list.low_emissions')}</li>
        <li>{t('information.geothermal_energy.advantages.list.small_land_footprint')}</li>
      </ul>
      <h3 className="mt-4 text-3xl font-semibold">{t('information.geothermal_energy.disadvantages.title')}:</h3>
      <ul className="m-3 pl-3">
        <li>{t('information.geothermal_energy.advantages.list.high_cost')}</li>
        <li>{t('information.geothermal_energy.advantages.list.location_limit')}</li>
        <li>{t('information.geothermal_energy.advantages.list.earthquake_risk')}</li>
      </ul>
      <p>{t('information.geothermal_energy.conclusion')}</p>
    </div>
  )
}