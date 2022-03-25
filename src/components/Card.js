import React from "react"
import Katie from "../images/katie-zaferes.png"
import Star from "../images/star.png"

export default function Card() {
    return (
        <div className="card">
            <div className="card--position">
                <img src={Katie} className="card--picture" alt="Swimmer Katie Zaferes"/>
                <div className="picture-tag">SOLD OUT</div>
            </div>
            <div className="card--info--small">
                <img src={Star} className="star" alt="star"/>
                <p className="rating">5.0</p>
                <p className="reviews">(6)</p>
                <p className="separater">∙</p>
                <p className="country">USA</p>
            </div>
            <p className="card--description">Life lessons with Katie Zaferes</p>
            <div className="card--rate">
                <p className="rate"><bold>From $136</bold></p>
                <p>/ person</p>
            </div>

        </div>
    )
}