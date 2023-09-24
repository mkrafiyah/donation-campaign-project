import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {
    const cardDetail = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const card = cardDetail.find(card => card.id === idInt);
    console.log(card)
    return (
        // <div className="flex justify-center">
        //     <div className="card w-96 bg-base-100 shadow-xl">
        //         <figure><img className="w-full" src={card.image} alt="Shoes" /></figure>
        //         <div className="card-body">
        //             <h2 className="card-title">{card.title}</h2>
        //             <p>{card.description}</p>
                    
        //         </div>
        //     </div>
        // </div>
        <div className="max-w-screen-md flex justify-center mx-auto">
            <div>
            <div><img className="w-full" src={card.image} alt="" /></div>
            <div className="py-8 bg-slate-950  opacity-70"><button className="bg-red-500 btn">donate</button></div>
            <div>
                <h2 className="text-3xl">{card.title}</h2>
                <p>{card.description}</p>
            </div>
            </div>
        </div>
    );
};

export default CardDetails;