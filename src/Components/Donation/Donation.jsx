/* eslint-disable no-undef */
import { useEffect, useState } from "react";
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
      
      <div className="max-w-sm lg:max-w-7xl px-10 py-8 ">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {
            cardDetailStored.slice(0, dataLength).map(card => <li key={card.id}>
              
              <div style={{background:card.color.category}} className="flex w-[300px] md:w-[500px] h-[270px] gap-3 border bg-slate-100 p-1 lg:p-5 rounded-md">
                <div><img className="w-full h-full" src={card.image} alt="" /></div>
                <div   className="flex-grow-1 ml-3">
                  <button style={{background:card.color.category, color:card.color.text}} className="btn ">{card.category}</button>
                  <h2 className="text-xl font-semibold">{card.title}</h2>
                  <p style={{color:card.color.text}} className="font-semibold">${card.price}</p>
                  <button style={{background:card.color.button}} className="btn text-white">View Price</button>
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