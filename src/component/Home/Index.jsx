import React from "react";
import Nav from './Nav.jsx'
import Slider from "./Slider.jsx";
import Finance_ac from "./Finance_ac.jsx";
import About from "./About.jsx";
import Scheme from "./Scheme.jsx";


export default function Index(){
    return(
        <>
       <Nav></Nav>
       <Slider></Slider>
       <Finance_ac></Finance_ac>
       <About></About>
       <Scheme></Scheme>
        </>
    )
}