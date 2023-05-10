import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [showPopMenu, setShowPopMenu] = useState(false);
    const popupRef = useRef(null);
    const linkRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                popupRef.current &&
                !popupRef.current.contains(event.target) &&
                !linkRef.current.contains(event.target)
            ) {
                setShowPopMenu(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleMenuClick = () => {
        setShowPopMenu(!showPopMenu);
    };
    return (
        <div className="myNavContainer">
            <nav className="myNav">
                <a className="logo" href="/">
                    Logo
                </a>

                <div className="linksBox">
                    <ul>
                        <li>
                            <a onClick={handleMenuClick} ref={linkRef}>
                                <span>Tools</span>
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </span>
                            </a>
                            {showPopMenu && (
                                <div className="popMenu" ref={popupRef}>
                                    <ul>
                                        <li>All tools</li>
                                        <li>Cleanup</li>
                                        <li>Relight</li>
                                        <li>All tools</li>
                                        <li>All tools</li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li>
                            <a>API</a>
                        </li>
                        <li>
                            <a>Blogs</a>
                        </li>
                        <li>
                            <a>Pricing</a>
                        </li>
                    </ul>
                    <button>Signin/Signup</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
