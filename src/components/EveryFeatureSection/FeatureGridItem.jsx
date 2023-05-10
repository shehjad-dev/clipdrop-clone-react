import React, { useRef } from "react";

const FeatureGridItem = ({ item }) => {
    const videoRef = useRef(null);
    const handleMouseEnter = () => {
        videoRef.current.currentTime = 0; // Reset video to the beginning
        videoRef.current.play(); // Play the video
    };

    const handleMouseLeave = () => {
        videoRef.current.pause(); // Pause the video
        videoRef.current.currentTime = 0; // Reset video to the beginning
    };

    return (
        <div
            className="card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <video ref={videoRef} muted loop playsInline>
                <source src={item.video1} type="video/webm" />
                <source src={item.video2} type="video/mp4" />
            </video>

            <div className="card-content" /* className="textContent" */>
                <div className="heading">
                    <span
                        dangerouslySetInnerHTML={{ __html: item.icon }}
                    ></span>
                    <h3>{item.title}</h3>
                </div>
                <p className="paragraph">{item.description}</p>
            </div>
            <button className="gradBtn">
                <span>{item.btnText}</span>
            </button>
        </div>
    );
};

export default FeatureGridItem;
