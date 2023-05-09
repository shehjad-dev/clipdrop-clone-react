import React, { useState, useEffect, useRef } from "react";
import { Stage, Layer, Image, Transformer, Rect, Arc } from "react-konva";
import { useRafLoop } from "react-use";
import "./ImgUpSection.css";

const ImgUpSection = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const imageRef = useRef(null);
    const trRef = useRef(null);
    const [selected, setSelected] = useState(false);
    const [image, setImage] = useState(null);

    const [progress, setProgress] = useState(0);
    const [isLoadingImg, setIsLoadingImg] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((progress) => (progress + 1) % 100);
        }, 20);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        const img = new window.Image();
        img.src = selectedImage;
        img.onload = () => {
            setImage(img);
        };

        if (imageRef.current) {
            const imageNode = imageRef.current;
            const parentWidth = imageNode.getParent().width();
            const parentHeight = imageNode.getParent().height();
            const imageWidth = imageNode.width() * 0.2;
            const imageHeight = imageNode.height() * 0.2;

            const x = (parentWidth - imageWidth) / 2;
            const y = (parentHeight - imageHeight) / 2;

            imageNode.setAttrs({
                scaleX: 0.2,
                scaleY: 0.2,
                x,
                y,
            });
        }
    }, [selectedImage, image]);

    const handleSelect = () => {
        setSelected(true);
        trRef.current.nodes([imageRef.current]);
    };

    const handleDeselect = () => {
        setSelected(false);
    };

    const handleDragEnd = (e) => {
        // Update the image position after dragging
        const imageNode = imageRef.current;
        imageNode.setAttrs({
            x: e.target.x(),
            y: e.target.y(),
            width: imageNode.width() * scaleX,
            height: imageNode.height() * scaleY,
        });
    };

    const handleTransformEnd = () => {
        // Update the image size after scaling
        const imageNode = imageRef.current;
        const scaleX = imageNode.scaleX();
        const scaleY = imageNode.scaleY();
        console.log(scaleX, scaleX);
        imageNode.setAttrs({
            scaleX: scaleX,
            scaleY: scaleY,
            width: imageNode.width() * scaleX,
            height: imageNode.height() * scaleY,
        });
    };

    /* from here down - handle Input */
    const fakeApiBgRemove = () => {
        setTimeout(() => {
            setIsLoadingImg(false);
        }, 2000);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            setSelectedImage(event.target.result);
        };

        reader.readAsDataURL(file);
        setIsLoadingImg(true);
        fakeApiBgRemove();
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDefaultInput = (event) => {
        if (event.target.files && event.target.files[0]) {
            console.log("dsadas");
            setSelectedImage(URL.createObjectURL(event.target.files[0]));
        }
        setIsLoadingImg(true);
        fakeApiBgRemove();

        /* setSelectedImage(e.target.result); */
    };
    return (
        <>
            <div className="imgUpSection-container">
                <div className="imgInput-box">
                    <div
                        className="imgInput-dropperBox"
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                    >
                        <p>Click, paste, or drop a file here to start.</p>
                        <input
                            type="file"
                            accept="image/png,image/jpeg,image/webp"
                            onChange={(e) => handleDefaultInput(e)}
                        ></input>
                    </div>
                </div>
                {/* <div>
                {selectedImage ? (
                    <img src={selectedImage} alt="Selected" />
                ) : (
                    <p>No image to show</p>
                )}
            </div> */}
                {/* img up text */}
                <div
                    className="imgOptionalText" /* class="flex mt-3 mb-3 gap-1 items-center justify-center text-black dark:text-white " */
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        width="32"
                        height="32"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 13l-5 5m0 0l-5-5m5 5V6"
                        ></path>
                    </svg>
                    <p>Or try with an example</p>
                </div>
                {/* Supplementary Box */}
                <div className="optionalImg-container">
                    <img
                        loading="lazy"
                        width="130"
                        height="130"
                        src="https://static.clipdrop.co/web/replace-background/examples/car.jpg"
                    />
                    <img
                        loading="lazy"
                        width="130"
                        height="130"
                        src="https://static.clipdrop.co/web/replace-background/examples/shoes.jpg"
                    />
                    <img
                        loading="lazy"
                        width="130"
                        height="130"
                        src="https://static.clipdrop.co/web/replace-background/examples/woman.jpg"
                    />
                    <img
                        loading="lazy"
                        width="130"
                        height="130"
                        src="https://static.clipdrop.co/web/replace-background/examples/dish.jpg"
                    />
                </div>
            </div>
            {/* img preview */}
            {selectedImage ? (
                <div className="imgPreview-container">
                    <div className="imgPreview-box">
                        <div className="canvasContainer">
                            <div className="checkerboard"></div>
                            <div className="canvasP1">
                                <Stage width={500} height={500}>
                                    {!isLoadingImg ? (
                                        <Layer>
                                            {image && (
                                                <Image
                                                    image={image}
                                                    draggable
                                                    onClick={handleSelect}
                                                    onTap={handleSelect}
                                                    onDragEnd={handleDragEnd}
                                                    ref={imageRef}
                                                />
                                            )}
                                            {selected && (
                                                <Transformer
                                                    ref={trRef}
                                                    boundBoxFunc={(
                                                        oldBox,
                                                        newBox
                                                    ) => {
                                                        // Limit minimum width and height
                                                        newBox.width = Math.max(
                                                            30,
                                                            newBox.width
                                                        );
                                                        newBox.height =
                                                            Math.max(
                                                                30,
                                                                newBox.height
                                                            );
                                                        return newBox;
                                                    }}

                                                    /* onTransformEnd={
                                                        handleTransformEnd
                                                    }
                                                    onChange={
                                                        handleTransformEnd
                                                    } */
                                                />
                                            )}
                                        </Layer>
                                    ) : (
                                        <Layer>
                                            <Arc
                                                x={250}
                                                y={250}
                                                innerRadius={30}
                                                outerRadius={40}
                                                angle={progress * 3.6}
                                                rotation={-90}
                                                fill="black"
                                            />
                                        </Layer>
                                    )}
                                </Stage>
                            </div>
                        </div>

                        {/* <canvas
                             width="500"
                            height="500"
                        ></canvas> */}
                    </div>

                    {/* <div>
                        {selectedImage ? (
                            <img src={selectedImage} alt="Selected" />
                        ) : (
                            <p>No image to show</p>
                        )}
                    </div>{" "} */}
                </div>
            ) : (
                <p>No image to show</p>
            )}
        </>
    );
};

export default ImgUpSection;
