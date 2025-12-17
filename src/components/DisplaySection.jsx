import React from "react";
import gsap from "gsap";

function DisplaySection() {


    const handleScrollToTop = () => {
        gsap.to(window, {
            duration: 1.5,
            scrollTo: ".jumbotron-section",
            ease: "power2.inOut"
        });
    };
    return (
        <div className="display-section wrapper">
            <h2 className="title">Nuevo</h2>
            <p className="text">Brillante</p>
            <span className="description">Lorem ipsum dolor sit amet.</span>
            <button className="button">Pruebame</button>
            <button className="back-button" onClick={handleScrollToTop}>Top</button>

        </div>
    );
}

export default DisplaySection;