import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Quote from "./Quote";
import RandomQuote from "./RandomQuote";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quote" element={<Quote />} />
        <Route path="randomquote" element={<RandomQuote />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
