import low from './assets/low.jpg';

function DessertsLowCal(props) {
    // Implement the component here.
    const { data } = props;
    
    const lowCalDessert = data.filter(dessert => dessert.calories <= 500);
    const sortedDesserts = lowCalDessert.sort((a, b) => a.calories - b.calories);
  
    const dessertItems = sortedDesserts.map(dessert => (
      <li key={dessert.name}>
        {dessert.name} - {dessert.calories} cal
      </li>
    ));
  
    return (
      <div className="card">
        <img src={low} alt="low" />
        <div className="cardLow">
          <h2>Low calorie:</h2>
          <ul>
            {dessertItems}
          </ul>
        </div>
    </div>
    );
  }
  
  export default DessertsLowCal;