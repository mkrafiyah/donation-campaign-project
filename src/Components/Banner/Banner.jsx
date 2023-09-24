
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/dkwFL3Q/background-Image.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-4xl font-bold">I Grow By Helping People In Need</h1>
                      <input className="py-3 px-14 rounded-l-lg" type="text" name="" id="" placeholder="Search here..."/>
                        <button className="bg-red-400 py-3 px-3 rounded-r-lg">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;