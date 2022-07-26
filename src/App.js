import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Philosophy from "./components/Philosophy/Philosophy";
import GiftCards from "./components/GiftCards/GiftCards";
import Footer from "./components/Footer/Footer";
import Team from "./components/Team/Team";
import Dining from "./components/Dining/Dining";
import SpasAndBaths from "./components/SpasAndBaths/SpasAndBaths";


function App() {
  return (
    <div className="">

      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/philosophy" element={<Philosophy/>}></Route>
          <Route path="/giftcards" element={<GiftCards/>}></Route>
          <Route path="/team" element={<Team/>}></Route>
          <Route path="/dining" element={<Dining/>}></Route>
          <Route path="/spasandbaths" element={<SpasAndBaths/>}></Route>

        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
