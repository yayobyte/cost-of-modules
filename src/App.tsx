import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useRouteMatch, useHistory } from "react-router-dom";
import './App.css';
import { LandingPage, GraphPage } from "./containers";
import { SEARCH, GRAPH } from "./config/routes";
import { usePage } from "./redux/store/app";

function App() {
    /** Hooks */
    const { url } = useRouteMatch();
    const history = useHistory();
    const { page } = usePage();

    /** Effects */
    useEffect(() => {
        history.push(page);
    }, [page]);
    
   
    return (
        <div className="App">
            <Switch>
                <Route path={`${url}${SEARCH}`}>
                    <LandingPage />
                </Route>
                <Route path={`${url}${GRAPH}`}>
                    <GraphPage />
                </Route>
                <Redirect to={SEARCH} />
            </Switch>
            
        </div>
    );
}

export default App;
