
interface SolarProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}


export const ContentInformationHydro = (props:SolarProps) => {

  return (
    <div className="mt-4" data-testid='content-info-hydro' {...props}>
      <p><b>Hydro energy</b>, or <b>hydroelectric power</b>, is a renewable energy source that uses the movement of water to generate electricity. It is one of the most widely used renewable energy sources worldwide.</p>
      <h3 className="mt-4 text-3xl font-semibold">How It Works:</h3>
      <ol className='pl-6 mt-4'>
      <li><p><b>Water Flow</b> - A dam or river channels water towards turbines.</p></li>
      <li className="mt-3.5"><p><b>Turbine Rotation</b> - The force of moving water spins the turbines.</p></li>
      <li className="mt-3.5"><p><b>Electricity Generation</b> - The turbines power a generator, converting kinetic energy into electrical energy.</p></li>
      </ol>
      <h3 className="mt-4 text-3xl font-semibold">Advantages:</h3>
      <ul className="mt-3 pl-3">
        <li>✅ Renewable and sustainable</li>
        <li>✅ Low greenhouse gas emissions</li>
        <li>✅ Reliable and efficient</li>
      </ul>
      <h3 className="mt-4 text-3xl font-semibold">Disadvantages:</h3>
      <ul className="m-3 pl-3">
        <li>❌ Can impact ecosystems and fish migration</li>
        <li>❌ High initial construction costs</li>
        <li>❌ Dependence on water availability</li>
      </ul>
    </div>
  )
}