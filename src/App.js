import './App.css';
import {Header} from "./view/components/header/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Basket from "./view/pages/basket/Basket"
import Main from "./view/pages/main/Main";
import {useEffect, useState} from "react";
import Detail from "./view/pages/detail/Detail";
import { Create } from "./view/pages/create/Create"


function App() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://60f1203338ecdf0017b0fa4e.mockapi.io/shoose")
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }, []);
    return (
        <Router>
            <div className="App">
                <Header/>
                {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/detail/:id">
                        <Detail />
                    </Route>
                    <Route exact path="/basket">
                        <Basket data={data} />
                    </Route>
                    <Route exact path="/create">
                        <Create/>
                    </Route>
                    <Route exact path="/">
                        <Main data={data}/>
                    </Route>
                    <Route path="*">
                        <br/>
                        <br/>
                        <br/>
                        <h1>404</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
