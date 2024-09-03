import { Outlet } from "react-router";
import "./App.css";
import { lazy } from "react";
const Footer = lazy(() => import("./Components/Footer"));
const Header = lazy(() => import("./Components/Header"));

function App() {
  return (
    < >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
