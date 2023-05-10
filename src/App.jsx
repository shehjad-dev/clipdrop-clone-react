import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import ImgUpSection from "./components/ImgUpSection/ImgUpSection";
import UsecaseSection from "./components/UsecaseSection/UsecaseSection";
import EveryFeatureSection from "./components/EveryFeatureSection/EveryFeatureSection";
import FaqSection from "./components/FaqSection/FaqSection";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar />
            <HeroSection />
            <ImgUpSection />
            <UsecaseSection />
            <EveryFeatureSection />
            <FaqSection />
            <Footer />
        </>
    );
}

export default App;
