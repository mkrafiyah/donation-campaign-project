import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center py-16 ml-5 lg:ml-0 ">
            <div className="w-[300px] lg:w-[600px]">
            <h2 className=" text-3xl lg:text-6xl pb-20">OOOppppsss...This page is not found</h2>
            <Link to='/'><button className="btn btn-info btn-sm lg:btn-md ">go back to home</button></Link>
            </div>

        </div>
    );
};

export default ErrorPage;