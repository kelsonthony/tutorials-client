import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tutorial from "./components/tutorial.component";
import AddTutorial from "./components/add-tutorial.component";
import TutorialList from "./components/tutorials-list.component";
import { Link, Route, Switch } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a href="/tutorials" className="navbar-brand">
                    Tutorials
                </a>
                <div className="navbar-nav mr-auto"></div>
                <li className="nav-item">
                    <Link to={"/tutorials"} className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/add"} className="nav-link">
                        Add
                    </Link>
                </li>
            </nav>
            <div className="container mt-3">
                <Switch>
                    <Route
                        exact
                        path={["/", "/tutorials"]}
                        component={TutorialList}
                    />
                    <Route exact path="/add" component={AddTutorial} />
                    <Route path="/tutorials/:id" component={Tutorial} />
                </Switch>
            </div>
        </div>
    );
}

export default App;
