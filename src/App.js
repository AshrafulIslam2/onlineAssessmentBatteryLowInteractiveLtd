import logo from "./logo.svg";
import "./App.css";
import FormContainer from "./components/FormContainer";

function App() {
  return (
    <div className="App">
      <header className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 h-screen">
        <FormContainer />
      </header>
    </div>
  );
}

export default App;
