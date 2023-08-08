import { useParams, Link  } from "react-router-dom";

const Invoice = () => {
    const params = useParams();
    return (
        <div>
            Invoice: {params.id}
            <Link to="/">Home</Link>
        </div>
    )
};

export default Invoice;