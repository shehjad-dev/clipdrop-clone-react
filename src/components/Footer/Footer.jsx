import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="footerBox">
                <div>
                    <h3>Clipdrop</h3>
                    <ul>
                        <li>Home</li>
                        <li>Affiliate Program</li>
                        <li>Stability.ai</li>
                    </ul>
                </div>
                <div>
                    <h3>Support</h3>
                    <ul>
                        <li>Contact us</li>
                        <li>Help</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div>
                    <h3>Legal</h3>
                    <ul>
                        <li>Privacy</li>
                        <li>Terms of use</li>
                        <li>Legal Notice</li>
                    </ul>
                </div>
            </div>
            <div className="footerBottom">Copyright 2023 © Init ML</div>
        </div>
    );
};

export default Footer;
