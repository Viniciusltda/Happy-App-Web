import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import LandingPage from './pages/landing-page';
import Maps from './pages/maps';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={LandingPage} exact/>
                <Route path="/app" component={Maps} />
                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/:id" component={Orphanage} />


            </Switch>
        </BrowserRouter>
    );
}

export default Routes;