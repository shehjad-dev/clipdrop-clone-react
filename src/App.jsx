import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeroSection from "./components/HeroSection";
import ImgUpSection from "./components/ImgUpSection";
import UsecaseSection from "./components/UsecaseSection";
import EveryFeatureSection from "./components/EveryFeatureSection";
import FaqSection from "./components/FaqSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
