import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import LandingPage from './pages/landing-page';
import Maps from './pages/maps';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={LandingPage} exact/>
                <Route path="/app" component={Maps} />

            </Switch>
        </BrowserRouter>
    );
}

export default Routes;