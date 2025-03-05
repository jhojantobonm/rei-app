import { useTranslation } from "react-i18next"

export const FooterApp = ()=>{
  const {t} = useTranslation();
  return(
    <footer data-testid='footer' 
    className="fixed left-0 right-0 bottom-0 pt-2.5 pb-2.5 flex justify-center items-center bg-[#00ADE2] text-[1.4rem] font-semibold text-white text-center">
      <p>{t('created_by',{name: 'Jhojan Tobón M'})}.</p>
    </footer>
  )
}