import "./App.css";
import Car from "./Car";
import Hello from "./Hello";

function App() {
  return (
    <>
      <div className="container">
        <Hello />
      </div>
      <p>Hello Component</p>
      <div>
        <Car />
      </div>{" "}
      <p>Cars Component</p>
    </>
  );
}

export default App;
