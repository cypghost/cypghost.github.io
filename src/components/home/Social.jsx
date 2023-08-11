import React from "react";
import { FiInstagram, FiTwitter, FiGithub, FiLinkedin} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://instagram.com/biruk__m" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiInstagram />
            </a>
            <a href="https://twitter.com/Bi2kmes" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiTwitter />
            </a>
            <a href="https://www.github.com/cypghost" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/biruk-mesfin/" className="home__social-icon" target="_blank"  rel="noreferrer">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;