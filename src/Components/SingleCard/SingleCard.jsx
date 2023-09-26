/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const SingleCard = ({ singleCard }) => {
    const {id, title, category, image, color} = singleCard;

   
    return (
        
         <Link to={`/featuredCard/${id}`}>  <div className=" flex justify-center">
            <div style={{background:color.category}} className="card card-compact   bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div style={{color:color.category}} className="card-body flex justify-center items-center">
                <div>
                <p ><button style={{background:color.category, color:color.text}} className="btn">{category}</button></p>
                    <h2 style={{color: color.text}} className="card-title">{title}</h2> 
                    </div>   
                </div>
            </div>
        </div></Link>
        
    );
};

export default SingleCard;