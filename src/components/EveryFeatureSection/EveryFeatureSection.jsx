import React from "react";
import "./EveryFeatureSection.css";
import FeatureGridItem from "./FeatureGridItem";
import { gridItemData } from "../../data/gridItemData";

const EveryFeatureSection = () => {
    return (
        <div className="everyFeature-container">
            <div className="everyFeature-box">
                <h3 className="">
                    EVERYTHING YOU NEED TO CREATE STUNNING VISUALS
                </h3>
                <div className="container">
                    {}
                    {gridItemData.map((item) => (
                        <FeatureGridItem key={item.id} item={item} />
                    ))}
                    {/* {arr.map((item) => (
                        <div className="column">Column {item}</div>
                    ))} */}
                    {/* <div className="column">Column 1</div>
                    <div className="column">Column 2</div>
                    <div className="column">Column 3</div> */}
                </div>
                {/* <div className="card">
                    <img
                        src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Card Image"
                    />
                    <div className="card-content">
                        <h2>Card Heading</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed accumsan pretium lacus, eu ornare risus
                            convallis ac.
                        </p>
                    </div>
                    <button>
                        <span>Cleanup</span>
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default EveryFeatureSection;
