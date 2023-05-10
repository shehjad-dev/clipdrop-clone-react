import React, { useState } from "react";

const SliderItem = ({ item, index }) => {
    const [activeImg, setActiveImg] = useState({ ...item.img[0] });

    const handleImgOptionClick = (currItem) => {
        setActiveImg({ ...currItem });
    };
    return (
        <div id={`slide-${index + 1}`} key={index}>
            {" "}
            <p className="description">{item.description}</p>
            <img
                src={activeImg.src}
                alt="3D rendering of an imaginary orange planet in space"
            />
            <p className="text">{activeImg.text}</p>
            <div className="extraImgBox">
                {item.img.map((currItem, index) => (
                    <img
                        src={currItem.src}
                        alt={currItem.text}
                        key={index}
                        className={`${
                            activeImg.src === currItem.src ? "activeSubImg" : ""
                        }`}
                        onClick={() => handleImgOptionClick(currItem)}
                    />
                ))}
            </div>
        </div>
    );
};

export default SliderItem;
