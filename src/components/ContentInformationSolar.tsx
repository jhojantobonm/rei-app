
interface SolarProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}


export const ContentInformationSolar = (props:SolarProps) => {

  return (
    <div className="mt-4" data-testid='content-info-solar' {...props}>
      <p>Solar energy is a renewable energy source that comes from the sun and can be harnessed in several ways. There are two main technologies for capturing it:</p>
      <ol className='pl-6 mt-4'>
      <li><p><b>Photovoltaic solar energy:</b> Uses solar panels to convert sunlight into electricity. Ideal for homes, businesses and large solar parks.</p></li>
      <li className="mt-3.5"><p><b>Solar thermal energy:</b> It is used to heat water or generate electricity using mirrors that concentrate sunlight on one point.</p></li>
      </ol>

      <p className="mt-3.5">In Colombia, the use of solar energy has grown due to reduced costs and abundant solar radiation.</p>  
    </div>
  )
}