/* eslint-disable no-undef */
import { createContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getSaveCard } from "../Utility/LocalStorage";



const Donation = () => {
  const cards = useLoaderData();

  const [cardDetailStored, setCardDetailStored] = useState([]);
  const [dataLength, setDataLength] = useState([4]);

  useEffect(() => {
    const storedCard = getSaveCard();
    if (cards.length > 0) {
      const donatedCard = cards.filter(card => storedCard.includes(card.id))
      setCardDetailStored(donatedCard);
    }
  }, [cards])
  return (
    <div>
      
      <div className="max-w-7xl px-10 py-8">
        <ul className="grid grid-cols-2 gap-3">
          {
            cardDetailStored.slice(0, dataLength).map(card => <li key={card.id}>
              {/* <div className="card card-side bg-base-100 shadow-xl">
                <figure className="contain"><img  src={card.image} alt="Movie" /></figure>
                <div className="card-body">
                  <button className="card-actions">{card.category}</button>
                  <h2 className="card-title">{card.title}</h2>
                  <p>${card.price}</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                  </div>
                  
                </div>
              </div> */}
              <div className="flex w-4/5 gap-3 border bg-slate-100 p-5">
                <div className="w-2/5 "><img className="w-full" src={card.image} alt="" /></div>
                <div className="w-2/5">
                  <button>{card.category}</button>
                  <h2>{card.title}</h2>
                  <p>{card.price}</p>
                  <button>View Price</button>
                </div>
              </div>
            </li>)
          }
        </ul>
      </div>
      <div className={dataLength >= cardDetailStored.length ? 'hidden' : ''}>
      <div className="flex justify-center my-4">
      <button onClick={() => setDataLength(cardDetailStored.length)} className="btn btn-primary">See All</button>
      </div>
      </div>
    </div>
  );
};

export default Donation;