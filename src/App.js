import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardData from "./data"

export default function App() {
    const cardElements = cardData.map(data => 
            <Card 
                key={data.id}
                title={data.title}
                description={data.description}
                price={data.price}
                img={data.coverImg}
                reviewCount={data.stats.reviewCount}
                rating={data.stats.rating}
                location={data.location}
                openSpots={data.openSpots}
            />
        )

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cardElements}
            </section>
        </div>
    )
}