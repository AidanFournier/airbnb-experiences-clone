import React from "react"
// import Katie from "../images/katie-zaferes.png" 
import Star from "../images/star.png"

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../${props.data.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src={Star} className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.data.stats.reviewCount}) • </span>
                <span className="gray">{props.data.location}</span>
            </div>
            <p className="card--title">{props.data.title}</p>
            <p className="card--price"><span className="bold">From ${props.data.price}</span> / person</p>
        </div>
    )
}