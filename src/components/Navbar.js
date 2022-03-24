import React from "react"
import Logo from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={Logo} className="nav--logo" alt="Airbnb logo" />
            <h1>Online Experiences</h1>
        </nav>
    )
}