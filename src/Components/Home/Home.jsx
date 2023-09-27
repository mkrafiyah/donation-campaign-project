import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import FeaturedCard from "../FeaturedCard/FeaturedCard";
import { useLoaderData } from "react-router-dom";

const Home = () => {
 
    const [searchText, setSearchText]=useState('');
    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);

    const allLoaderData = useLoaderData();

    useEffect ( () => {
        setFilteredCards(allLoaderData);
        setCards(allLoaderData);
    },[allLoaderData]);
    
    const changeCards = val => {
        setSearchText(val);
        if(val===''){
            setFilteredCards(cards);
        }
        else{
            const fData = cards.filter(card => card.category.toLowerCase() === val.toLowerCase());
            setFilteredCards(fData);
        }
    };

    return (
        <div>
           <Banner searchText={searchText}
          changeCards={changeCards}></Banner>
           <FeaturedCard filteredCards={filteredCards}></FeaturedCard>
        </div>
    );
};

export default Home;