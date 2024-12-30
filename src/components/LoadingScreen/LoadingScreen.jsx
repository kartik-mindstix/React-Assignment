import React, { useEffect, useState } from "react";
import './LoadingScreen.css';
import { useSelector } from "react-redux";

const LoadingScreen = () => {
    const [loaderText, setLoaderText] = useState([]);
    
    const loadingText = useSelector((state) => state.ui.loadingText);

    useEffect(() => {
        if (loadingText && Array.isArray(loadingText)) {
            setLoaderText(loadingText);
        }
    }, [loadingText]);

    return (
        <div className="animated-loading-container">
            <div className="loader">
                <svg viewBox="0 0 50 50">
                    <circle
                        cx="25"
                        cy="25"
                        r="20"
                        fill="none"
                        strokeWidth="4"
                    ></circle>
                </svg>
            </div>
            <p>{loaderText.length > 0 ? loaderText[Math.floor(Math.random() * loaderText.length)] : "Loading..."}</p>
        </div>
    );
};

export default LoadingScreen;
