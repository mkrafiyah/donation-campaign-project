
const SingleCard = ({ singleCard }) => {
    const {title, category, image} = singleCard;
    return (
        
            <div className=" flex justify-center">
            <div className="card card-compact   bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body ">
                <p><button className="btn btn-primary">{category}</button></p>
                    <h2 className="card-title">{title}</h2>    
                </div>
            </div>
        </div>
        
    );
};

export default SingleCard;