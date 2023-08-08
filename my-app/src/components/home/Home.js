import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            Home
            <Link to="/about">About</Link>
            <Link to="/invoice/95">MyInvoice</Link>
        </div>
    )
};

export default Home;