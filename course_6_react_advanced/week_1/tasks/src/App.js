//task 1
import "./App.css";
import DessertsList from "./components/DessertList";
import Task2 from "./components/Task2/Task2";
import Root from "./components/Task3/Task3";

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
];

function App() {
  return (
    <div className="App">
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />

      <hr/>
      <br/>
      <h2>This is the task 2</h2>
      <Task2/>

      <hr/>
      <br/>
      <h2>This is the task 3</h2>
      <Root/>

    </div>
  );
}

export default App;
