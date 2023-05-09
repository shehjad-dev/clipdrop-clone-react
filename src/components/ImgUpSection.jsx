import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Stage, Layer, Image, Transformer, Rect, Arc } from "react-konva";
import { useRafLoop } from "react-use";
import "./ImgUpSection.css";

const ImgUpSection = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const imageRef = useRef(null);
    const trRef = useRef(null);
    const [selected, setSelected] = useState(false);
    const [image, setImage] = useState(null);
    const [pWidth, setPWidth] = useState(0);
    const [pHeight, setPHeight] = useState(0);

    /* handle loading start */

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
    /* handle loading end */

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
            setPWidth(parentWidth);
            setPHeight(parentHeight);
        }
    }, [selectedImage, image]);

    const isMobile = window.innerWidth <= 575.98;

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
            setSelectedImage(URL.createObjectURL(event.target.files[0]));
        }
        setIsLoadingImg(true);
        fakeApiBgRemove();
    };

    const handleExtraImgClick = (e) => {
        setSelectedImage(e.target.src);
        setIsLoadingImg(true);
        fakeApiBgRemove();
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
                        onClick={handleExtraImgClick}
                    />
                    <img
                        loading="lazy"
                        width="130"
                        height="130"
                        src="https://static.clipdrop.co/web/replace-background/examples/shoes.jpg"
                        onClick={handleExtraImgClick}
                    />
                    <img
                        loading="lazy"
                        width="130"
                        height="130"
                        src="https://static.clipdrop.co/web/replace-background/examples/woman.jpg"
                        onClick={handleExtraImgClick}
                    />
                    <img
                        loading="lazy"
                        width="130"
                        height="130"
                        src="https://static.clipdrop.co/web/replace-background/examples/dish.jpg"
                        onClick={handleExtraImgClick}
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
                                <Stage
                                    width={
                                        isMobile
                                            ? (window.innerWidth * 80) / 100
                                            : 500
                                    }
                                    height={
                                        isMobile
                                            ? (window.innerWidth * 80) / 100
                                            : 500
                                    }
                                    /* width={isMobile ? 200 : 500}
                                    height={isMobile ? 200 : 500} */
                                >
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
                                                    scaleX={0.2} // Set the initial scale values directly
                                                    scaleY={0.2}
                                                    x={
                                                        pWidth / 2 -
                                                        image.width * 0.1
                                                    } // Set the initial X position for centering
                                                    y={
                                                        pHeight / 2 -
                                                        image.height * 0.1
                                                    }
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
                                                    onTransformEnd={
                                                        handleTransformEnd
                                                    }
                                                    onChange={
                                                        handleTransformEnd
                                                    }
                                                />
                                            )}
                                        </Layer>
                                    ) : (
                                        <Layer>
                                            <Arc
                                                x={
                                                    isMobile
                                                        ? (window.innerWidth *
                                                              80) /
                                                          100 /
                                                          2
                                                        : 250
                                                }
                                                y={
                                                    isMobile
                                                        ? (window.innerWidth *
                                                              80) /
                                                          100 /
                                                          2
                                                        : 250
                                                }
                                                /* x={isMobile ? 100 : 250}
                                                y={isMobile ? 100 : 250} */
                                                /* x={250}
                                                y={250} */
                                                innerRadius={isMobile ? 15 : 30}
                                                outerRadius={isMobile ? 20 : 40}
                                                /* innerRadius={30}
                                                outerRadius={40} */
                                                angle={progress * 3.6}
                                                rotation={-90}
                                                fill="black"
                                            />
                                        </Layer>
                                    )}
                                </Stage>
                            </div>
                        </div>
                    </div>
                    <div
                        className="imgPreview-formBox" /* class="relative w-full" */
                    >
                        <textarea
                            /* class="rounded-md px-3 py-2 text-sm text-black dark:text-white outline-none border dark:border-gray-700 dark:bg-gray-900 w-full min-h-[75px] md:min-h-[113px] resize-none" */
                            placeholder="Describe a new scene or leave this empty"
                        >
                            A Tokyo street at night with a blurry background
                        </textarea>
                        <button
                            /* class="absolute bottom-2 right-2 p-1.5 mt-0.5 ml-1 bg-transparent text-black dark:text-white hover:opacity-50" */
                            type="button"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_393_4989)">
                                    <path
                                        d="M9.35293 3L9.98843 4.71742L11.7059 5.35293L9.98843 5.98843L9.35293 7.70585L8.71742 5.98843L7 5.35293L8.71742 4.71742L9.35293 3Z"
                                        fill="currentcolor"
                                    ></path>
                                    <path
                                        d="M9.35293 3L9.98843 4.71742L11.7059 5.35293L9.98843 5.98843L9.35293 7.70585L8.71742 5.98843L7 5.35293L8.71742 4.71742L9.35293 3Z"
                                        fill="currentcolor"
                                    ></path>
                                    <path
                                        d="M9.35293 3L9.98843 4.71742L11.7059 5.35293L9.98843 5.98843L9.35293 7.70585L8.71742 5.98843L7 5.35293L8.71742 4.71742L9.35293 3Z"
                                        fill="currentcolor"
                                    ></path>
                                    <path
                                        d="M6.52939 14L7.48264 16.5761L10.0588 17.5294L7.48264 18.4826L6.52939 21.0588L5.57613 18.4826L3 17.5294L5.57613 16.5761L6.52939 14Z"
                                        fill="currentcolor"
                                    ></path>
                                    <path
                                        d="M6.52939 14L7.48264 16.5761L10.0588 17.5294L7.48264 18.4826L6.52939 21.0588L5.57613 18.4826L3 17.5294L5.57613 16.5761L6.52939 14Z"
                                        fill="currentcolor"
                                    ></path>
                                    <path
                                        d="M6.52939 14L7.48264 16.5761L10.0588 17.5294L7.48264 18.4826L6.52939 21.0588L5.57613 18.4826L3 17.5294L5.57613 16.5761L6.52939 14Z"
                                        fill="currentcolor"
                                    ></path>
                                    <path
                                        d="M13 20V18.2222H15.625V5.77778H13V4H20V5.77778H17.375V18.2222H20V20H13Z"
                                        fill="currentcolor"
                                    ></path>
                                    <path
                                        d="M18.5517 15H21V9H18.5517V10.5H19.5V13.5H18.5517V15Z"
                                        fill="currentcolor"
                                    ></path>
                                    <path
                                        d="M14.4487 10.5V9H3V15H4.90483L5.45988 13.5H4.5V10.5H14.4487Z"
                                        fill="currentcolor"
                                    ></path>
                                    <path
                                        d="M14.4487 13.5V15H8.15373L7.59868 13.5H14.4487Z"
                                        fill="currentcolor"
                                    ></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_393_4989">
                                        <rect
                                            width="24"
                                            height="24"
                                            fill="white"
                                        ></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                    <div className="imgPreview-formButton">
                        <button>
                            Generate <span>PRO</span>
                        </button>
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
                <></>
            )}
        </>
    );
};

export default ImgUpSection;
