import { ReactNode } from "react"


interface ContentInfoProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string,
  image?: string,
  children?: ReactNode,
}

export const ContentInformation = ({title,image,children,...props}: ContentInfoProps) => {

  return (
      <div data-testid='content-info' {...props}>
        <h2 className="text-3xl font-semibold">{title}</h2>
        <figure className="mt-3.5 rounded-2xl overflow-hidden">
          <img src={image} alt={`This is an image about ${title}`}
          className="w-full w-full" />
        </figure>
        {children}
      </div>
  )
}