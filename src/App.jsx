 import Counter from "./assets/components/Counter";
import RandomNumber from "./assets/components/RandomNumber";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>React Utility Dashboard</h1>
        <p>Practice React State Management & Event Handling</p>
      </header>

      <main className="dashboard">
        <Counter />
        <RandomNumber />
      </main>
    </div>
  );
}

export default App;