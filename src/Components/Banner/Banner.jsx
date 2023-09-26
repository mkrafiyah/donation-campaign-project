import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchProducts from "../SearchProducts/SearchProducts";



const Banner = () => {
    const [products, setProducts] = useState([]);
    const[search, setSearch] = useState('');
    // const [filterDonation, setFilterDonation] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handleChange = e =>{
        setSearch(e.target.value)
        
    }
    console.log(products)
    // console.log(search)
   
    // const card = [];
      
    const handleSearch=({search})=>{
        console.log(search)
        // const filterData = products.map(item => console.log(item.category.includes(search))) ;
        // card.push(filterData)
        // setFilterDonation(filterData)
    //    if(search === ''){
    //     setProducts(products)
    //    }else if(search === 'food'){
    //     setFilterDonation(filterData)
    //    }else if(search === 'health'){
    //     setFilterDonation(filterData)
    //    }else if(search === 'clothing'){
    //     setFilterDonation(filterData)
    //    }else if(search === 'education'){
    //     setFilterDonation(filterData)
    //    }  
       
    }
    // console.log(filterDonation)
    return (
        <div>
            <div className="hero min-h-screen mb-10" style={{ backgroundImage: 'url(https://i.ibb.co/dkwFL3Q/background-Image.jpg)'}}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-4xl font-bold">I Grow By Helping People In Need</h1>
                     
                      <input onChange={handleChange} className="py-3 px-14 rounded-l-lg" type="text" name="" id="" placeholder="Search here..."/>
                      
                       <Link 
                        
                       ><button onClick={handleSearch}  className="bg-red-400 py-3 px-1 lg:px-3 rounded-r-lg">Search</button></Link> 
                        
                    </div>
                    {/* <div>
                        {
                            products.filter(product =>product.category.toLowerCase().includes(search)).map(card => <SearchProducts key={card.id} card={card}></SearchProducts>)
                        }
                    </div> */}
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;