import './MenuInformationItem.css'

export const MenuInformationItem = ({ src }:{src?: string}) => {
  return (
    <>
      <li data-testid='menu-info-item'>
        <button className='cursor-pointer'>
          <img id="menu-info-item-image" 
          src={src} alt={`Image of ${src}`}/>
        </button>
      </li>
    
    </>
  )
}