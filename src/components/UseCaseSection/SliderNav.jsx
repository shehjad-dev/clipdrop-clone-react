import React, { useState, useRef } from "react";

const SliderNav = ({ carouselData }) => {
    const [activeLinkIndex, setActiveLinkIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    const handleClick = (index, event) => {
        event.preventDefault();
        setActiveLinkIndex(index);

        const targetId = `slide-${index + 1}`;
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const containerElement = targetElement.parentNode;
            const containerRect = containerElement.getBoundingClientRect();
            const targetRect = targetElement.getBoundingClientRect();
            const scrollTo =
                targetRect.left -
                containerRect.left +
                containerElement.scrollLeft;

            containerElement.scrollTo({
                left: scrollTo,
                behavior: "smooth",
            });
        }
    };
    return (
        <>
            {carouselData.map((item, index) => (
                <a
                    /* href={`#slide-${index + 1}`} */
                    key={index}
                    className={`buttonLinks ${
                        index === activeLinkIndex ? "activeCarouselNavitem" : ""
                    }`}
                    onClick={(event) => handleClick(index, event)}
                >
                    {item.title}
                </a>
            ))}
        </>
    );
};

export default SliderNav;
