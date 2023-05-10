import React, { useState } from "react";

const SliderNav = ({ carouselData }) => {
    const [activeLinkIndex, setActiveLinkIndex] = useState(0);
    const handleClick = (index) => {
        setActiveLinkIndex(index);
    };
    return (
        <>
            {carouselData.map((item, index) => (
                <a
                    href={`#slide-${index + 1}`}
                    key={index}
                    className={`buttonLinks ${
                        index === activeLinkIndex ? "activeCarouselNavitem" : ""
                    }`}
                    onClick={() => handleClick(index)}
                >
                    {item.title}
                </a>
            ))}
        </>
    );
};

export default SliderNav;
