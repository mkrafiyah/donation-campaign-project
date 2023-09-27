import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveCard } from "../Utility/LocalStorage";


const CardDetails = () => {
    const cardDetail = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const card = cardDetail.find(card => card.id === idInt);
    
    const handleClick = () =>{
        saveCard(idInt);
        toast("Thank You!Your donation is successful");
    }
    return (
        
        <div className="w-3/4 flex justify-center mx-auto pb-6 mt-6">
            <div>
            <div className="relative w-[300px] lg:w-[600px]"><img className="w-full" src= {card.image} alt="" />
           
            <div className=" w-[300px] lg:w-[600px] h-24 absolute mb-10 bg-black bg-opacity-70"><button style={{background:card.color.button}} onClick={handleClick} className="py-3 px-4 rounded-md ml-4 mt-4 text-white">Donate ${card.price}</button></div>
            </div>
            
            <div className="mt-24 w-[300px] lg:w-[600px]">
                <h2 className="text-3xl pt-7 font-bold pb-3">{card.title}</h2>
                <p>{card.description}</p>
            </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CardDetails;