import { ReactNode } from "react"
import './ContentInformationSolar.css'

interface ContentInfoProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string,
  image?: string,
  children?: ReactNode,
}

export const ContentInformation = ({title,image,children,...props}: ContentInfoProps) => {

  return (
      <div data-testid='content-info' {...props} className=' mt-7 text-[1.4rem]'>
        <h2 className="text-3xl font-semibold">{title}</h2>
        <div className="md:flex md:flex-row-reverse">
          <figure className="md:w-[50%] md:h-[25rem] mt-3.5 rounded-2xl overflow-hidden shadow-2xl">
            <img src={image} alt={`This is an image about ${title}`}
            className="w-full h-full object-fill" />
          </figure>
          <div className="md:w-[50%] mr-6">
            {children}
          </div>
        </div>
      </div>
  )
}