import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";



const Root = () => {
    return (
        <div className="">
            <div className="pl-0 lg:pl-5"><NavBar></NavBar></div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;