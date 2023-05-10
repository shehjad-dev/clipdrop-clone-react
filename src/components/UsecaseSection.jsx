import React, { useRef } from "react";
import "./UsecaseSection.css";
import SliderItem from "./SliderItem";
import SliderNav from "./SliderNav";

const carouselData = [
    {
        title: "Photographers",
        description:
            "Teleport your models anywhere, in one click. You don't need Photoshop to make impressive shoots anymore.",
        img: [
            {
                text: "Original",
                src: "https://static.clipdrop.co/web/replace-background/use-cases/Photo.jpg",
            },
            {
                text: "A blurry desert background",
                src: "https://static.clipdrop.co/web/replace-background/use-cases/Photo_1.jpg",
            },
            {
                text: "A field of flower",
                src: "https://static.clipdrop.co/web/replace-background/use-cases/Photo_3.jpg",
            },
            {
                text: "In a forest",
                src: "https://static.clipdrop.co/web/replace-background/use-cases/Photo_2.jpg",
            },
        ],
    },
    {
        title: "Creative Agency",
        description:
            "Create as many concepts as you want for your products or your clients. Your only limit is your imagination.",
        img: [
            {
                text: "Original",
                src: "https://static.clipdrop.co/web/replace-background/use-cases/Concept.jpg",
            },
            {
                text: "On a road in a forest with snow",
                src: "https://static.clipdrop.co/web/replace-background/use-cases/Concept_1.jpg",
            },
            {
                text: "In a warehouse",
                src: "https://static.clipdrop.co/web/replace-background/use-cases/Concept_2.jpg",
            },
            {
                text: "In a city at night",
                src: "https://static.clipdrop.co/web/replace-background/use-cases/Concept_3.jpg",
            },
        ],
    },
    {
        title: "Pack Shot",
        description:
            "You want an insane ad for your product ? Take a simple photo and teleport them in an amazing photoshoot studio, in a volcano or in a cosy living room.",
        img: [
            {
                text: "Original",
                src: "https://static.clipdrop.co/web/replace-background/use-cases/Packshot.jpg",
            },
            {
                text: "In a simple white backdrop studio",
                src: "https://static.clipdrop.co/web/replace-background/use-cases/Packshot_1.jpg",
            },
            {
                text: "On concrete plate",
                src: "https://static.clipdrop.co/web/replace-background/use-cases/Packshot_2.jpg",
            },
            {
                text: "In a Parisian street at night and blurred",
                src: "https://static.clipdrop.co/web/replace-background/use-cases/Packshot_3.jpg",
            },
        ],
    },
    {
        title: "Selfie",
        description:
            "Transport yourself wherever you want for a joke or to impress your friends.",
        img: [
            {
                text: "Original",
                src: "https://static.clipdrop.co/web/replace-background/use-cases/Selfi.jpg",
            },
            {
                text: "A Tokyo street at night with a blurry background",
                src: "https://static.clipdrop.co/web/replace-background/use-cases/Selfi_1.jpg",
            },
            {
                text: "On the beach",
                src: "https://static.clipdrop.co/web/replace-background/use-cases/Selfi_2.jpg",
            },
            {
                text: "In the middle of a house in fire",
                src: "https://static.clipdrop.co/web/replace-background/use-cases/Selfi_3.jpg",
            },
        ],
    },
];

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
