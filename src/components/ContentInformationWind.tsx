import { useTranslation } from "react-i18next"

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}


export const ContentInformationWind = (props:Props) => {
  const {t} = useTranslation();

  return (
    <div className="mt-4" data-testid='content-info-wind' {...props}>
      <div dangerouslySetInnerHTML={{__html: t('information.wind_energy.description')}}></div>
      <h3 className="mt-4 text-3xl font-semibold">{t('information.wind_energy.how_it_works.title')}</h3>
      <ol className='pl-6 mt-4'>
      <li dangerouslySetInnerHTML={{__html: t('information.wind_energy.how_it_works.steps.wind_blows')}}></li>
      <li className="mt-3.5" dangerouslySetInnerHTML={{__html: t('information.wind_energy.how_it_works.steps.rotor_rotation')}}></li>
      <li className="mt-3.5" dangerouslySetInnerHTML={{__html: t('information.wind_energy.how_it_works.steps.electricity_generation')}}></li>
      </ol>
      <h3 className="mt-4 text-3xl font-semibold">{t('information.wind_energy.advantages.title')}:</h3>
      <ul className="mt-3 pl-3">
        <li>{t('information.wind_energy.advantages.list.renewable')}</li>
        <li>{t('information.wind_energy.advantages.list.low_impact')}</li>
        <li>{t('information.wind_energy.advantages.list.versatile')}</li>
      </ul>
      <h3 className="mt-4 text-3xl font-semibold">{t('information.wind_energy.disadvantages.title')}:</h3>
      <ul className="m-3 pl-3">
        <li>{t('information.wind_energy.disadvantages.list.variable_wind')}</li>
        <li>{t('information.wind_energy.disadvantages.list.wildlife_impact')}</li>
        <li>{t('information.wind_energy.disadvantages.list.space_requirement')}</li>
      </ul>
    </div>
  )
}