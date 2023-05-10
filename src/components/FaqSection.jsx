import React from "react";
import "./FaqSection.css";
import FaqRow from "./FaqRow";

const FaqSection = () => {
    const arr = [1, 2, 3, 4, 5];

    return (
        <div className="faqSection-container">
            <div className="faqSection-box">
                <h3>FREQUENTLY ASKED QUESTIONS</h3>
                {arr.map((item) => (
                    <FaqRow />
                ))}
            </div>
        </div>
    );
};

export default FaqSection;
