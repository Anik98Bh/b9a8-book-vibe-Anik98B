import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-40">
            <h1 className="text-3xl font-extrabold mb-3">Oops!!</h1>
            <p className="font-semibold mb-4">Sorry, Page not Found..</p>
            <Link to="/">Go to Home Page</Link>
        </div>
    );
};

export default ErrorPage;