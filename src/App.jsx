import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactFullpage from "@fullpage/react-fullpage";

import ScrollToTop from "./components/ScrollToTop";

import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "./pages/About"; // ⬅️ 새로 만든 페이지 import
import Brands from "./pages/Brands";
import Product_List from "./pages/Product_List";
import ProductDetail from "./pages/Product_Detail";
import Vegicel from "./pages/Vegicel";
import Jayeonha from "./pages/Jayeonha";
import RNDPage from "./pages/RND";
import Consult from "./pages/Consult"; 



export default function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        {/* 메인 페이지: fullpage.js로 구성된 섹션 */}
        <Route
          path="/"
          element={
            <ReactFullpage
              scrollingSpeed={1000}
              navigation
              recordHistory={false}
              credits={{ enabled: false }}
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
          }
        />

        {/* /about 정적 페이지 연결 */}
        <Route path="/about" element={<About />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/products" element={<Product_List />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/rnd" element={<RNDPage />} />
        <Route path="/brands/vegicel" element={<Vegicel />} />
        <Route path="/brands/jayeonha" element={<Jayeonha />} />
        <Route path="/consult" element={<Consult />} />
      </Routes>
    </Router>
  );
}
