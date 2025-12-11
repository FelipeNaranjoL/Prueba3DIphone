import React from "react";
import Iphone from "../assets/images/iphone-14.jpg"
import HoldingIphone from "../assets/images/iphone-hand.png"

function Jumbotron() {

    const handleLearnMore = () => {
        const element = document.querySelector('.sound-section');
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior: 'smooth'
        })
    };


    return (
        <div className="jumbotron-section wrapper">
            <h2 className="title">Nuevo</h2>
            <img className="logo" src= {Iphone} alt="" />
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
            <img className="iphone-img" src= {HoldingIphone} alt="" />
        </div>
    );
}

export default Jumbotron;