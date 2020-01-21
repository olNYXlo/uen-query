import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import GovQuery from './GovQuery';
import App from './App';
import LocalDBQuery from './LocalDBQuery'
import ImportGovToLocal from './ImportGovToLocal'


const Routes = () => {
    return (
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/GovQuery" component={GovQuery}/>
            <Route path="/LocalDBQuery" component={LocalDBQuery}/>
            <Route path="/ImportGovToLocal" component={ImportGovToLocal}/>
        </div>
    </Router>
    )
}

export default Routes;
