import { Router, Route, browserHistory} from 'react-router';
import Sim from '../ui/Sim';
import Root from '../ui/Root';
import React from 'react';
import Drawingboard from '../ui/Drawingboard';
import Drawings from '../ui/Drawings';

export const routes = (
    <Router history={browserHistory}>
        <Route path='/sim' component={Sim}></Route>
        <Route path='/' component={Root}></Route>
        <Route path='/drawingboard' component={Drawingboard}></Route>
        <Route path='/drawings' component={Drawings}></Route>
    </Router>
);