import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardData from "./data"

export default function App() {
    const cardElements = cardData.map(data => 
            <Card 
                key={data.id}
                // data={data}
                {...data} // spreads all properties of this item as separate props into my card component
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