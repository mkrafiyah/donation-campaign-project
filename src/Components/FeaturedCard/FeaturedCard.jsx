import SingleCard from "../SingleCard/SingleCard";


const FeaturedCard = (filteredCards) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-8 pb-10">
            
            {
                filteredCards.filteredCards.map(singleCard => <SingleCard key={singleCard.id} singleCard={singleCard}></SingleCard>)
            }
        </div>
    );
};

export default FeaturedCard;