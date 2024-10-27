import React from 'react';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import {Route, Routes} from "react-router-dom";
import Home from "./page/home/home";
import About from "./page/about/about";
import Contact from "./page/contact/contact";
import Sign from "./page/sign/sign";

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="sign" element={<Sign/>}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default App;