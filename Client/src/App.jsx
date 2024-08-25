import { Outlet } from "react-router";
import "./App.css";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
