import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import BookingPage from "./components/BookingPage/BookingPage";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Home from "./components/Home/Home";

function App() {
  return (
    <main className="">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/bookingpage" element={<BookingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer></Footer>
    </main>
  );
}

export default App;
