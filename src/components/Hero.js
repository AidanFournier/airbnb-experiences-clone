import React from "react"
import PhotoGrid from "../images/photo-grid.png"

export default function Hero() {
    return (
        <div className="hero">
            <img src={PhotoGrid} className="hero--grid" alt="grid of pictures" />
            <div className="hero--text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}