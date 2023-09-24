import { useState, useEffect } from "react";
import SingleCard from "../SingleCard/SingleCard";


const FeaturedCard = () => {
    const [cards, setCards] = useState([]);

     useEffect ( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data));
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-8">
            
            {
                cards.map(singleCard => <SingleCard key={singleCard.id} singleCard={singleCard}></SingleCard>)
            }
        </div>
    );
};

export default FeaturedCard;