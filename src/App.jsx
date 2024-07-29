import { Outlet } from "react-router-dom";
import Footer from "./assets/components/Layout/Footer";
import Navbar from "./assets/components/Layout/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet /> 
      <Footer />
    </>
  );
}

export default App;
