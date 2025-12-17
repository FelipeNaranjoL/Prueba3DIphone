import React from "react";
import gsap from "gsap";

function SoundSection() {

    const handleLearnMore = () => {
        gsap.to(window, {
            duration: 1.5,
            scrollTo: ".display-section",
            ease: "power2.inOut"
        });
    };

    return (
        <div className="sound-section wrapper">
            <div className="body">
                <div className="sound-section-content content">
                    <h2 className="title">Nuevo sistema de sonido</h2>
                    <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <span className="description">Lorem ipsum dolor sit amet.</span>
                    <ul className="links">
                        <li>
                            <button className="button">Comprar</button>
                        </li>
                        <li>
                            <a className="link" onClick={handleLearnMore}>Saber Más</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SoundSection;