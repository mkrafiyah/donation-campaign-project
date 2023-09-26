import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center py-16">
            <div>
            <h2 className="text-6xl pb-20">OOOppppsss...This page is not found</h2>
            <Link to='/'><button className="btn btn-accent text-yellow-600">go back to home</button></Link>
            </div>

        </div>
    );
};

export default ErrorPage;