import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { MainRouteLinks } from '../Links/RouteLinks';
import Page404 from '../pages/Page404';
import Index from '../pages/Index';
import Result from '../pages/Result';

function Routes() {
    return (
        <Switch>
            {/* Default */}
            <Route exact path={MainRouteLinks.index} component={Index} />
            <Route exact path={MainRouteLinks.result} component={Result} />
            {/* 404 */}
            <Route component={Page404} />
        </Switch>
    )
}

export default Routes
