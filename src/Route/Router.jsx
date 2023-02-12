import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import NotFound from '../Pages/NotFound';
import Register from '../Pages/Register';
import AboutUs from '../Pages/AboutUs';
import Contact from '../Pages/Contact';


const AppRouter = () => {    
    return (
    <BrowserRouter>
        <div>
            <Routes>
                <Route>
                <Route path="/Login" element={<Login/>} />
                <Route path="/" element={<Register/>} />
                <Route path="/Home" element={<Home/>} />
                <Route path="/NotFound" element={<NotFound/>} />
                <Route path="/AboutUs" element={<AboutUs/>} />
                <Route path="/Contact" element={<Contact/>} />
                </Route>
            </Routes>
        </div>
    </BrowserRouter>   
    );
};

export default AppRouter;