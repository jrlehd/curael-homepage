import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactFullpage from "@fullpage/react-fullpage";

import ScrollToTop from "./components/ScrollToTop";

import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";

import Company from "./pages/company";
import GreetingPage from "./pages/company/greeting";
import Vision from "./pages/company/vision";

import ProductsPage from "./pages/products";
import Vegicel from "./pages/products/vegicel";
import Jayeonha from "./pages/products/jayeonha";
import Books from "./pages/products/books";
import ProductDetail from "./pages/products/ProductDetail";

import Consult from "./pages/consult";
import Location from "./pages/consult/location";

import RNDPage from "./pages/rnd";

import Inquiry from "./pages/inquiry";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header onMobileMenuChange={setMenuOpen} />

        <Routes>
          <Route
            path="/"
            element={
              !menuOpen ? (
                <ReactFullpage
                  scrollingSpeed={1000}
                  navigation={false} // 오른쪽 동그라미 네비게이션 완전 제거
                  render={() => (
                    <ReactFullpage.Wrapper>
                      <div className="section">
                        <Section1 />
                      </div>
                      <div className="section">
                        <Section2 />
                      </div>
                      <div className="section">
                        <Section3 />
                      </div>
                      <div className="section">
                        <Section4 />
                      </div>
                      <div className="section !h-fit !min-h-[250px] !py-0">
                        <Footer />
                      </div>
                    </ReactFullpage.Wrapper>
                  )}
                />
              ) : null
            }
          />

          <Route path="/company" element={<Company />} />
          <Route path="/company/greeting" element={<GreetingPage />} />
          <Route path="/company/vision" element={<Vision />} />

          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/vegicel" element={<Vegicel />} />
          <Route path="/products/jayeonha" element={<Jayeonha />} />
          <Route path="/products/books" element={<Books />} />
          <Route path="/products/:slug" element={<ProductDetail />} />

          <Route path="/consult" element={<Consult />} />
          <Route path="/consult/location" element={<Location />} />

          <Route path="/rnd" element={<RNDPage />} />

          <Route path="/inquiry" element={<Inquiry />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
