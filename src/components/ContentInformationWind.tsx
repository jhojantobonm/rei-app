
interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}


export const ContentInformationWind = (props:Props) => {

  return (
    <div className="mt-4" data-testid='content-info-wind' {...props}>
      <p><b>Wind energy</b> is a renewable energy source that converts the kinetic energy of the wind into electricity using wind turbines.</p>
      <h3 className="mt-4 text-3xl font-semibold">How It Works:</h3>
      <ol className='pl-6 mt-4'>
      <li><p><b>Wind Blows</b> - The wind turns the blades of a wind turbine.</p></li>
      <li className="mt-3.5"><p><b>Rotation of the Rotor</b> - The blades are connected to a rotor, which spins a generator.</p></li>
      <li className="mt-3.5"><p><b>Electricity Generation</b> - The generator converts mechanical energy into electrical energy.</p></li>
      </ol>
      <h3 className="mt-4 text-3xl font-semibold">Advantages:</h3>
      <ul className="mt-3 pl-3">
        <li>✅ Renewable and sustainable</li>
        <li>✅ Low environmental impact (no emissions)</li>
        <li>✅ Can be installed on land or offshore</li>
      </ul>
      <h3 className="mt-4 text-3xl font-semibold">Disadvantages:</h3>
      <ul className="m-3 pl-3">
        <li>❌ Wind speed is variable and unpredictable</li>
        <li>❌ Can impact bird and bat populations</li>
        <li>❌ Requires large open spaces for optimal efficiency</li>
      </ul>
    </div>
  )
}