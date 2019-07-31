import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './Main';
import { ScrollToTop } from './components/includes/ScrollToTop';

if (document.getElementById('app')) {
    ReactDOM.render(
        <Router>
            <ScrollToTop>
                <Main />
            </ScrollToTop>
        </Router>
        ,
        document.getElementById('app')
    );
}
