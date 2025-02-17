import headImage from '../assets/renewable-energy.jpg'

export const Home = () => {
  return (
  <section data-testid='home-container'>
    <header>
      <figure className="h-[130px]">
        <img className='w-full h-full object-cover' 
          src={headImage} 
          alt="Renewable energy image"/>
      </figure>
      <h1 className="text-center text-2xl font-bold mt-5">INFORMATION</h1>  
    </header>
  </section>
  )
}