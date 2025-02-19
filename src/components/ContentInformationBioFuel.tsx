
interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}


export const ContentInformationBioFuel = (props:Props) => {

  return (
    <div className="mt-4" data-testid='content-info-biofuel' {...props}>
      <p><b>Biofuel energy</b> is a renewable energy source derived from organic materials, such as plants, agricultural waste, and animal fats. It can be used for transportation, electricity generation, and heating.</p>
      
      <h3 className="mt-4 text-3xl font-semibold">Types of Biofuels:</h3>
      <ul id="types" className="mt-3 pl-8">
        <li><p><b>Bioethanol</b> - Made from crops like corn, sugarcane, and wheat, often blended with gasoline.</p></li>
        <li className="mt-3.5"><p><b>Biodiesel</b> - Produced from vegetable oils, animal fats, or algae, used as an alternative to diesel fuel.</p></li>
        <li className="mt-3.5"><p><b>Biogas</b> - Generated from organic waste decomposition (e.g., food waste, manure), mainly composed of methane.</p></li>
        <li className="mt-3.5"><p><b>Wood and Biomass Pellets</b> - Used for heating and electricity generation.</p></li>
      </ul>
      <h3 className="mt-4 text-3xl font-semibold">Advantages:</h3>
      <ul className="mt-3 pl-3">
        <li>✅ Renewable and reduces dependence on fossil fuels</li>
        <li>✅ Can use agricultural waste, reducing waste pollution</li>
        <li>✅ Lower carbon emissions compared to fossil fuels</li>
      </ul>
      <h3 className="mt-4 text-3xl font-semibold">Disadvantages:</h3>
      <ul className="m-3 pl-3">
        <li>❌ Can compete with food production (e.g., using corn for fuel instead of food)</li>
        <li>❌ Requires large land areas for crops</li>
        <li>❌ Some biofuels still produce emissions when burned</li>
      </ul>
      <p>Biofuels are widely used in transportation, especially in countries promoting green energy.</p>
    </div>
  )
}