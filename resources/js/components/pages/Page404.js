import React, { Component } from 'react'
import { MainRouteLinks } from '../Links/RouteLinks';
import { NavLink } from 'react-router-dom'

export default class Page404 extends Component {
    render() {
        return (
            <div id="Page404">
                <div className="p-sm-5 pt-5 pt-sm-0">
                    <div className="shadow shadow-lg bg-white rounded">
                        <div className="row pt-5 pl-5 pr-5">
                            <div className="col-md-8 offset-md-2 my-auto text-center">
                                <div className="main-text-color">
                                    <h2 className="bold">Error 404...</h2>
                                    <h5>Hello, this might sound embarassing but we think, no sorry.. we know you're lost, so please use the button below to redeem yourself 😉.</h5>
                                </div>
                                <div className="pb-5 pt-3 text-center">
                                    <NavLink exact to={MainRouteLinks.index} className="btn btn-outline-danger">Go Back</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
