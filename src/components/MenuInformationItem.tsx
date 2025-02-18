
export const MenuInformationItem = ({ src }:{src?: string}) => {
  return (
    <>
      <li data-testid='menu-info-item'>
        <button>
          <img src={src} alt={`Image of ${src}`}/>
        </button>
      </li>
    
    </>
  )
}