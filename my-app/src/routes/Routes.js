import { Routes as AppRoutes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Invoice from "../components/invoice/Invoice";

const Routes = () => {
    return(
        <AppRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/invoice/:id" element={<Invoice />} />
        </AppRoutes>
    )
};

export default Routes;
