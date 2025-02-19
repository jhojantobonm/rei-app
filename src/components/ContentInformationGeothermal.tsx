
interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}


export const ContentInformationGeothermal = (props:Props) => {

  return (
    <div className="mt-4" data-testid='content-info-geothermal' {...props}>
      <p><b>Geothermal energy</b> is a renewable energy source that harnesses heat from the Earth's core to generate electricity and provide direct heating. This energy comes from the natural heat stored beneath the Earth's surface, mainly from molten rock (magma) and hot water reservoirs.</p>
      <h3 className="mt-4 text-3xl font-semibold">How It Works:</h3>
      <ol className='pl-6 mt-4'>
        <li><p><b>Heat Extraction</b> - Wells are drilled to access hot water or steam from underground reservoirs.</p></li>
        <li className="mt-3.5"><p><b>Steam Generation</b> - The heat is used to produce steam.</p></li>
        <li className="mt-3.5"><p><b>Turbine Activation</b> - The steam drives a turbine connected to a generator.</p></li>
        <li className="mt-3.5"><p><b>Electricity Production</b> - The generator converts mechanical energy into electricity.</p></li>
      </ol>


      <h3 className="mt-4 text-3xl font-semibold">Types of Geothermal Systems:</h3>
      <ul id="types" className="mt-3 pl-8">
        <li><p><b>Dry Steam Plants</b> - Use steam directly from underground to spin turbines.</p></li>
        <li className="mt-3.5"><p><b>Flash Steam Plants</b> - Convert high-pressure hot water into steam.</p></li>
        <li className="mt-3.5"><p><b>Binary Cycle Plants</b> - Transfer heat to a secondary fluid with a lower boiling point to generate steam.</p></li>
      </ul>
      <h3 className="mt-4 text-3xl font-semibold">Advantages:</h3>
      <ul className="mt-3 pl-3">
        <li>✅ Reliable and operates 24/7</li>
        <li>✅ Low greenhouse gas emissions</li>
        <li>✅ Small land footprint compared to other renewables</li>
      </ul>
      <h3 className="mt-4 text-3xl font-semibold">Disadvantages:</h3>
      <ul className="m-3 pl-3">
        <li>❌ High upfront drilling and installation costs</li>
        <li>❌ Limited to areas with geothermal activity</li>
        <li>❌ Potential risk of triggering small earthquakes</li>
      </ul>
      <p>Geothermal energy is widely used in countries with high volcanic activity, such as Iceland, the U.S., and the Philippines.</p>
    </div>
  )
}