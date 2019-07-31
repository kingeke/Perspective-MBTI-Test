import React, { Component } from 'react';
import { Offline } from "react-detect-offline";
import { Alerts } from './components/layouts/Alerts';
import Routes from './components/routes/Routes';

export default class Main extends Component {
    render() {
        return (
            <div>
                <div>
                    <span style={{ position: "fixed", bottom: 0, zIndex: '9999', left: 0, right: 0, textAlign: 'center' }}>
                        <Offline>
                            <Alerts dismissible={false} message="Please check your internet connection as you are currently offline and the website requires an internet connection to function properly, when online please refresh. Thank you." type="warning" />
                        </Offline>
                    </span>
                    <Routes />
                </div>
            </div>
        )
    }
}