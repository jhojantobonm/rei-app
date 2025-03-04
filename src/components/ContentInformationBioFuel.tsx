import { useTranslation } from "react-i18next"

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}


export const ContentInformationBioFuel = (props:Props) => {
  const {t} = useTranslation();
  return (
    <div className="mt-4" data-testid='content-info-biofuel' {...props}>  
      <div dangerouslySetInnerHTML={{__html: t('information.biofuel_energy.description')}}></div>
      
      <h3 className="mt-4 text-3xl font-semibold">{t('information.biofuel_energy.types.title')}</h3>
      <ul id="types" className="mt-3 pl-8">
        <li><p dangerouslySetInnerHTML={{__html: t('information.biofuel_energy.types.list.bioethanol')}}></p></li>
        <li className="mt-3.5"><p dangerouslySetInnerHTML={{__html: t('information.biofuel_energy.types.list.biodiesel')}}></p></li>
        <li className="mt-3.5"><p dangerouslySetInnerHTML={{__html: t('information.biofuel_energy.types.list.biogas')}}></p></li>
        <li className="mt-3.5"><p dangerouslySetInnerHTML={{__html: t('information.biofuel_energy.types.list.wood_pellets')}}></p></li>
      </ul>

      <h3 className="mt-4 text-3xl font-semibold">{t('information.biofuel_energy.advantages.title')}</h3>
      <ul className="mt-3 pl-3">
        <li>{t('information.biofuel_energy.advantages.list.renewable')}</li>
        <li>{t('information.biofuel_energy.advantages.list.waste_reduction')}</li>
        <li>{t('information.biofuel_energy.advantages.list.lower_emissions')}</li>
      </ul>

      <h3 className="mt-4 text-3xl font-semibold">{t('information.biofuel_energy.disadvantages.title')}</h3>
      <ul className="m-3 pl-3">
        <li>{t('information.biofuel_energy.disadvantages.list.food_competition')}</li>
        <li>{t('information.biofuel_energy.disadvantages.list.land_requirement')}</li>
        <li>{t('information.biofuel_energy.disadvantages.list.emissions')}</li>
      </ul>

      <p>{t('information.biofuel_energy.conclusion')}</p>
    </div>
  )
}