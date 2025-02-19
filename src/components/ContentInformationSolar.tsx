
interface SolarProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}


export const ContentInformationSolar = (props:SolarProps) => {

  return (
    <div className="mt-4" data-testid='content-info-solar' {...props}>
      <p><b>Solar energy</b> is a renewable energy source that harnesses sunlight to generate electricity and heat. It is one of the most widely available and sustainable energy sources on Earth</p>
      <h3 className="mt-4 text-3xl font-semibold">How It Works:</h3>
      <ol className='pl-6 mt-4'>
      <li><p><b>Solar Panels Capture Sunlight</b> - Photovoltaic (PV) cells convert sunlight into electricity.</p></li>
      <li className="mt-3.5"><p><b>Conversion to Usable Power </b> - An inverter converts the generated direct current (DC) into alternating current (AC) for home or industrial use.</p></li>
      <li className="mt-3.5"><p><b>Storage (Optional)</b> - Batteries can store excess energy for nighttime or cloudy days.</p></li>
      </ol>

      <h3 className="mt-4 text-3xl font-semibold">Types of Solar Energy:</h3>
      <ul id="types" className="mt-3 pl-8">
        <li><p><b>Solar Photovoltaic (PV)</b> - Converts sunlight directly into electricity using solar panels.</p></li>
        <li className="mt-3.5"><p><b>Solar Thermal Energy</b> - Uses the sun’s heat to warm water or air for residential and industrial use.</p></li>
        <li className="mt-3.5"><p><b>Concentrated Solar Power (CSP)</b> - Uses mirrors or lenses to focus sunlight and generate high temperatures for electricity production.</p></li>
      </ul>

      <h3 className="mt-4 text-3xl font-semibold">Advantages:</h3>
      <ul className="mt-3 pl-3">
        <li>✅ Renewable and abundant</li>
        <li>✅ Reduces electricity bills</li>
        <li>✅ Low maintenance costs</li>
        <li>✅ No greenhouse gas emissions</li>
      </ul>
      <h3 className="mt-4 text-3xl font-semibold">Disadvantages:</h3>
      <ul className="m-3 pl-3">
        <li>❌ Energy production depends on sunlight availability</li>
        <li>❌ High initial installation costs</li>
        <li>❌ Requires large space for large-scale installations</li>
      </ul>
      <p>Solar energy is widely used for homes, businesses, and large power plants.</p>
    </div>
  )
}