import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
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
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import Booking from "./components/Booking/Booking";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { useEffect } from "react";
import Contacts from "./components/Contacts/Contacts";
import MyBookings from "./components/MyBookings/MyBookings";


function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }

  return (
    <div className="">

      <BrowserRouter>
      <ScrollToTop />
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
          <Route path="/login" element={<LogIn/>}></Route>
          <Route path="/contacts" element={<Contacts/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          {/* <Route path="/mybookings" element={<MyBookings/>}></Route> */}
          <Route path="/mybookings/:email" element={<PrivateRoute><MyBookings/></PrivateRoute>}></Route>
          <Route path="/booking/:serviceid" element={<PrivateRoute><Booking/></PrivateRoute>}></Route>

        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
