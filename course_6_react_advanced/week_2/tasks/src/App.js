import './App.css';
import Task1 from './task1/Task1';
import Task2 from './task2/Task2';
import Task3 from './task3/Task3';

function App() {
  return (
    <div className="App">
      <h1>Taks 1</h1>
      <Task1/>
      <br/>
      <hr/>
      <h1>Taks 2</h1>
      <Task2/>
      <hr/>
      <h1>Taks 3</h1>
      <Task3/>
    </div>
  );
}

export default App;
