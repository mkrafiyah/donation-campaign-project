/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SingleCard = ({ singleCard }) => {
    const {id, title, category, image} = singleCard;
    return (
        
         <Link to={`/featuredCard/${id}`}>   <div className=" flex justify-center">
            <div className="card card-compact   bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body ">
                <p><button className="btn btn-primary">{category}</button></p>
                    <h2 className="card-title">{title}</h2>    
                </div>
            </div>
        </div></Link>
        
    );
};

export default SingleCard;