import { useTranslation } from "react-i18next"

interface SolarProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}


export const ContentInformationSolar = (props:SolarProps) => {
  const {t} = useTranslation();
  return (
    <div className="mt-4" data-testid='content-info-solar' {...props}>
      <div dangerouslySetInnerHTML={{ __html: t('information.solar_energy.description') }}></div>
      
      <h3 className="mt-4 text-3xl font-semibold">{t('information.solar_energy.how_it_works.title')}</h3>
      <ol className='pl-6 mt-4'>
        <li dangerouslySetInnerHTML={{ __html: t('information.solar_energy.how_it_works.steps.capture_sunlight') }}></li>
        <li className="mt-3.5" dangerouslySetInnerHTML={{ __html: t('information.solar_energy.how_it_works.steps.conversion_power') }}></li>
        <li className="mt-3.5" dangerouslySetInnerHTML={{ __html: t('information.solar_energy.how_it_works.steps.storage') }}></li>
      </ol>

      <h3 className="mt-4 text-3xl font-semibold">{t('information.solar_energy.types.title')}</h3>
      <ul id="types" className="mt-3 pl-8">
        <li dangerouslySetInnerHTML={{ __html: t('information.solar_energy.types.list.pv') }}></li>
        <li className="mt-3.5" dangerouslySetInnerHTML={{ __html: t('information.solar_energy.types.list.thermal') }}></li>
        <li className="mt-3.5" dangerouslySetInnerHTML={{ __html: t('information.solar_energy.types.list.csp') }}></li>
      </ul>

      <h3 className="mt-4 text-3xl font-semibold">{t('information.solar_energy.advantages.title')}</h3>
      <ul className="mt-3 pl-3">
        <li>{t('information.solar_energy.advantages.list.renewable')}</li>
        <li>{t('information.solar_energy.advantages.list.cost_savings')}</li>
        <li>{t('information.solar_energy.advantages.list.low_maintenance')}</li>
        <li>{t('information.solar_energy.advantages.list.eco_friendly')}</li>
      </ul>

      <h3 className="mt-4 text-3xl font-semibold">{t('information.solar_energy.disadvantages.title')}</h3>
      <ul className="m-3 pl-3">
        <li>{t('information.solar_energy.disadvantages.list.sunlight_dependency')}</li>
        <li>{t('information.solar_energy.disadvantages.list.high_install_cost')}</li>
        <li>{t('information.solar_energy.disadvantages.list.space_requirement')}</li>
      </ul>

      <p>{t('information.solar_energy.conclusion')}</p>
    </div>
  )
}