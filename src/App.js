import "./App.css";
import Calculator from "./components/Calculator";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container ">
      <br />
      <br />
      <div className="row justify-content-md-center">
        <h2 className="mt-4">Area Calculator</h2>
      </div>
      <br />
      <Calculator />
    </div>
  );
}

export default App;
