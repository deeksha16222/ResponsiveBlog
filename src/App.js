import Navbar from "./components/navbar/Navbar";
import Home from "./home/Home";
import Footer from "./footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./details/Details";
function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
