import "./App.css";
import DessertsLowCal from "./DessertsLowCal";
import DessertsHighCal from "./DessertsHighCal";
import "./Styles.css";

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
  {
    name: "Apple Pie",
    calories: 450,
    createdAt: "2022-02-10",
  },
  {
    name: "Brownie",
    calories: 350,
    createdAt: "2022-03-05",
  },
  {
    name: "Pecan Pie",
    calories: 500,
    createdAt: "2022-04-12",
  },
  {
    name: "Lemon Tart",
    calories: 250,
    createdAt: "2022-05-06",
  },
  {
    name: "Chocolate Mousse",
    calories: 550,
    createdAt: "2022-06-15",
  },
  {
    name: "Creme Brulee",
    calories: 300,
    createdAt: "2022-07-20",
  },
  {
    name: "Banana Split",
    calories: 600,
    createdAt: "2022-08-18",
  },
  {
    name: "Strawberry Shortcake",
    calories: 350,
    createdAt: "2022-09-25",
  },
  {
    name: "Carrot Cake",
    calories: 400,
    createdAt: "2022-10-30",
  },
  {
    name: "Key Lime Pie",
    calories: 450,
    createdAt: "2022-11-22",
  },
  {
    name: "Macarons",
    calories: 150,
    createdAt: "2022-12-01",
  },
  {
    name: "Eclair",
    calories: 300,
    createdAt: "2023-01-10",
  },
  {
    name: "Cannoli",
    calories: 400,
    createdAt: "2023-02-14",
  },
  {
    name: "Pumpkin Pie",
    calories: 500,
    createdAt: "2023-03-17",
  },
  {
    name: "Black Forest Cake",
    calories: 700,
    createdAt: "2023-04-21",
  },
  {
    name: "Baklava",
    calories: 350,
    createdAt: "2023-05-25",
  }
];


function App() {
  return (
    <div className="App">
      <DessertsLowCal data={desserts} />
      <DessertsHighCal data={desserts} />
    </div>
  );
}

export default App;
