import * as React from "react";

import { Routes, Route} from "react-router-dom";

import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Header from "./layouts/Header";

const Routing = () => {
  return (
    <>
        <Routes>
            <Route  path="/" element={<Header />}>
                <Route index element={<Home />} />
                <Route  path="blog" element={<Blog />} />
                <Route  path="contact" element={<Contact />} />
            </Route>
        </Routes>
    </>
  );
};

export default Routing;
