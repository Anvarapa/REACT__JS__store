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

function App() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://605b21f027f0050017c063b9.mockapi.io/api/v2/shoose")
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
                        <Basket />
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
