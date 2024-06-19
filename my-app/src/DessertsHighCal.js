import high from './assets/high.jpg';

function DessertsHighCal(props) {
    // Implement the component here.
    const { data } = props;
    
    const highCalDessert = data.filter(dessert => dessert.calories >= 500);
    const sortedDesserts = highCalDessert.sort((a, b) => a.calories - b.calories);
  
    const dessertItems = sortedDesserts.map(dessert => (
      <li key={dessert.name}>
        {dessert.name} - {dessert.calories} cal
      </li>
    ));
  
    return (
      <div className="card">
        <img src={high} alt="high" />
        <div className="cardLow">
          <h2>High calorie:</h2>
          <ul>
            {dessertItems}
          </ul>
        </div>
    </div>
    );
  }
  
  export default DessertsHighCal;