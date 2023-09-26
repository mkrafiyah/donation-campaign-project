import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveCard } from "../Utility/LocalStorage";


const CardDetails = () => {
    const cardDetail = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const card = cardDetail.find(card => card.id === idInt);
    console.log(card)

    const handleClick = () =>{
        saveCard(idInt);
        toast("Thank You!Your donation is successful");
    }
    return (
        
        <div className="w-3/4 flex justify-center mx-auto pb-6 mt-6">
            <div className="">
            <div className="relative w-300px"><img className="w-full" src={card.image} alt="" /></div>
            <div className=" w-3/4 h-24 bg-black absolute opacity-70 mb-10"><button style={{background:card.color.button}} onClick={handleClick} className="py-3 px-4 rounded-md ml-4 mt-4 text-white">Donate ${card.price}</button></div>
            <div className="mt-24">
                <h2 className="text-3xl">{card.title}</h2>
                <p>{card.description}</p>
            </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CardDetails;