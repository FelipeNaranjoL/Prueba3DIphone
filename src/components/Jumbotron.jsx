import React from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Iphone from "../assets/images/iphone-14.jpg"
import HoldingIphone from "../assets/images/iphone-hand.png"

gsap.registerPlugin(ScrollToPlugin);

function Jumbotron() {

    const handleLearnMore = () => {
        gsap.to(window, {
            duration: 1.5,
            scrollTo: ".sound-section",
            ease: "power2.inOut"
        });
    };

    return (
        <div className="jumbotron-section wrapper">
            <h2 className="title">Nuevo</h2>
            <img className="logo" src={Iphone} alt="" />
            <p className="text">Lorem ipsum dolor sit.</p>
            <span className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, fugiat?
            </span>
            <ul className="links">
                <li>
                    <button className="button">Comprar</button>
                </li>
                <li>
                    <a className="link" onClick={handleLearnMore}>Saber Más</a>
                </li>
            </ul>
            <img className="iphone-img" src={HoldingIphone} alt="" />
        </div>
    );
}

export default Jumbotron;