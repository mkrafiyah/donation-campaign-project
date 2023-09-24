import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>This page is not found</h2>
            <Link to='/'><button>go back to home</button></Link>

        </div>
    );
};

export default ErrorPage;