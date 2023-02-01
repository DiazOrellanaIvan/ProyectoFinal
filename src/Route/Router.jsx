import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import NotFound from '../Pages/NotFound';
import Register from '../Pages/Register';
import AboutUs from '../Pages/AboutUs';


const AppRouter = () => {    
    return (
        <>
            <Router>
                <Switch>
                <Route exact path= "/" component={Login} />
                <Route exact path= "/Register" component={Register} />
                <Route exact path= "/Home" component={Home} />
                <Route exact path= "/Home" component={NotFound} />
                <Route exact path= "/AboutUs" component={AboutUs} />
                </Switch>
            </Router>
        </>
    );
}

export default AppRouter;