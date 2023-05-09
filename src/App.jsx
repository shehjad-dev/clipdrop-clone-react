import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeroSection from "./components/HeroSection";
import ImgUpSection from "./components/ImgUpSection";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <HeroSection />
            <ImgUpSection />
        </>
    );
}

export default App;
