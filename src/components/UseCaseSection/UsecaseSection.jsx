import React, { useRef } from "react";
import "./UsecaseSection.css";
import SliderItem from "./SliderItem";
import SliderNav from "./SliderNav";
import { carouselData } from "../../data/carouselData";

const UsecaseSection = () => {
    return (
        <section className="useCase-container">
            <h3 className="useCase-heading">USE-CASES</h3>
            <div className="slider-wrapper">
                <div className="slider-nav2">
                    <SliderNav carouselData={carouselData} />
                </div>
                <div className="slider" /*  ref={sliderRef} */>
                    {carouselData.map((item, index) => (
                        <SliderItem item={item} index={index} key={index} />
                    ))}
                </div>
                {/* <div className="slider-nav">
                    {carouselData.map((item, index) => (
                        <a
                            href={`#slide-${index + 1}`}
                            key={index}
                            onClick={(event) => handleClick(event, index)}
                            className="dotCircle"
                        ></a>
                    ))}
                    <a href="#slide-1"></a>
                    <a href="#slide-2"></a>
                    <a href="#slide-3"></a>
                </div> */}
            </div>
        </section>
    );
};

export default UsecaseSection;
