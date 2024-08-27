import { Outlet } from "react-router";
import "./App.css";
import { lazy } from "react";
const Header = lazy(() => import("./Components/Header"));

function App() {
  return (
    <div className=" min-h-screen w-screen">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
