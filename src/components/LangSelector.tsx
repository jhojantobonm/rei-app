
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
// import { useContextApp } from "@/context/useContextApp";
import spanishIcon from '@/assets/images/icons/spanish.png'
import englishIcon from '@/assets/images/icons/english.png'
import germanIcon from '@/assets/images/icons/german.png'
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}

const languages = [
  {
    lang: 'es',
    icon: spanishIcon,
    name: 'Español'
  },
  {
    lang: 'en',
    icon: englishIcon,
    name: 'English'
  },
  {
    lang: 'de',
    icon: germanIcon,
    name: 'Deutsch'
  },
]

export const LangSelector = ({...props}: Props)=>{

    const {i18n: {changeLanguage, language}} = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language);

  
  const handleChangeLanguage = (value: string)=>{
    setCurrentLanguage(value);
    changeLanguage(value);
  }
  
  useEffect(()=>{
    console.log(currentLanguage);
    document.documentElement.setAttribute('lang',currentLanguage);
    
  },[currentLanguage])

  
  return(
    <div data-testid='lang-selector-component' {...props}>
      <Select value={currentLanguage} onValueChange={handleChangeLanguage}>
        <SelectTrigger className="bg-app-secondary-background text-[1.4rem] p-8 rounded-2xl text-foreground">
          <SelectValue/>
        </SelectTrigger>
        <SelectContent>
          {languages.map((l) => (
            <SelectItem key={l.lang} value={l.lang} className="flex">
              <div className="flex items-center space-x-5">
                <img src={l.icon} alt={l.lang} className="w-[3rem]"/>
                <p>{l.lang.toUpperCase()}</p>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
     
    )
  }
    
