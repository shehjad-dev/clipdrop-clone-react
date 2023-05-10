import React from "react";

const FaqRow = () => {
    return (
        <details
        /* itemScope=""
                    itemProp="mainEntity" */
        >
            <summary className="flex items-center group-open:mb-3 cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    width="24"
                    height="24"
                    className="mr-2 flex-shrink-0 group-open:rotate-90 transition-transform text-black dark:text-white"
                >
                    <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                    ></path>
                </svg>
                <h2
                    className="text-gray-800 dark:text-gray-100 uppercase text-[18px] md:text-[18px] xl:text-[18px] font-semibold"
                    itemProp="name"
                >
                    How to teleport someone anywhere?
                </h2>
            </summary>
            <div
                /* itemScope=""
                        itemProp="acceptedAnswer"
                        itemType="https://schema.org/Question" */
                className="ml-[32px] text-black dark:text-white opacity-50"
            >
                <p className="text-base font-medium text-gray-600 dark:text-gray-400">
                    Our free online background changer can teleport anybody,
                    anywhere. Take an image of yourself and describe where you
                    want to be. ClipDrop AI will remove the original background
                    and create a new background that match your description.
                </p>
                <p className="text-base font-medium text-gray-600 dark:text-gray-400">
                    Pro-tip : You can use our mobile ClipDrop app to take a
                    picture on your phone, and instantly change the background
                    of your image.
                </p>
            </div>
        </details>
    );
};

export default FaqRow;
