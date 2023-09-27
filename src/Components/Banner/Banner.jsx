import { Link } from "react-router-dom";

const Banner = (props) => {
    
    return (
        <div>
            <div className="hero min-h-screen mb-10" style={{ backgroundImage: 'url(https://i.ibb.co/dkwFL3Q/background-Image.jpg)'}}>
                <div className="hero-overlay bg-white bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-4xl font-bold text-black">I Grow By Helping People In Need</h1>
                    
                      <input onChange={e => props.changeCards(e.target.value)} value={props.searchText}  className="py-3 px-14 rounded-l-lg text-black" type="text" name="" id="" placeholder="Search here..."/>
                      
                       <Link 
                        
                       ><button className="bg-red-400 py-3 px-1 lg:px-3 rounded-r-lg text-white font-medium">Search</button></Link> 
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;