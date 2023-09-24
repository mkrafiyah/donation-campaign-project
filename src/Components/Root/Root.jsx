import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";


const Root = () => {
    return (
        <div className="max-w-7xl px-8 py-5">
            <NavBar></NavBar>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;