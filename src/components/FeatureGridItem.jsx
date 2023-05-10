import React, { useRef } from "react";

const FeatureGridItem = () => {
    const videoRef = useRef(null);
    const handleMouseEnter = () => {
        console.log("dsads");
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
            {/* <video ref={videoRef}>
                <source
                    src="https://static.clipdrop.co/web/homepage/tools/ReplaceBackground.webm#t=0.1"
                    type="video/mp4"
                />
            </video> */}

            <video ref={videoRef} muted loop playsInline>
                <source
                    src="https://static.clipdrop.co/web/homepage/tools/Cleanup.webm#t=0.1"
                    type="video/webm"
                />
                <source
                    src="https://static.clipdrop.co/web/homepage/tools/Cleanup.mp4#t=0.1"
                    type="video/mp4"
                />
            </video>

            <div className="card-content" /* className="textContent" */>
                <div className="heading">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="1.875rem"
                            height="1.875rem"
                        >
                            <path fill="none" d="M0 0H24V24H0z"></path>
                            <path
                                fill="currentcolor"
                                d="M20 3c.552 0 1 .448 1 1v1.757l-2 2V5H5v8.1l4-4 4.328 4.329-1.327 1.327-.006 4.239 4.246.006 1.33-1.33L18.899 19H19v-2.758l2-2V20c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h16zm1.778 4.808l1.414 1.414L15.414 17l-1.416-.002.002-1.412 7.778-7.778zM15.5 7c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5S14 9.328 14 8.5 14.672 7 15.5 7z"
                            ></path>
                        </svg>
                    </span>
                    <h3>Replace background</h3>
                </div>
                <p className="paragraph">
                    Upscale your images by 2x or 4x in seconds. It can also
                    remove noise and recover beautiful details.
                </p>
            </div>
            <button className="gradBtn">
                <span>Cleanup</span>
            </button>
        </div>
    );
};

export default FeatureGridItem;
