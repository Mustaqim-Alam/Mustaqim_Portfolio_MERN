import "./App.css";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        outlet
      </main>
    </div>
  );
}

export default App;
