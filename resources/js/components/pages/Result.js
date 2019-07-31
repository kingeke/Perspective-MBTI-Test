import React, { Component } from 'react'
import { MainRouteLinks } from '../Links/RouteLinks';
import { Notifications } from '../layouts/Notificaations';
import { NavLink } from 'react-router-dom'
import ResultLayout from '../layouts/ResultLayout';

export default class Result extends Component {

    noData = () => {
        Notifications('Please fill out the form first', 'danger')
        this.props.history.push(MainRouteLinks.index)
    }

    render() {

        const mbti = this.props.location.state && this.props.location.state.mbti ? this.props.location.state.mbti : false

        const toRender = (
            <div id="result">
                <div className="p-sm-5 pt-5 pt-sm-0">
                    <div className="shadow shadow-lg bg-white rounded">
                        <div className="row pt-5 pl-5 pr-5">
                            <div className="col-lg-5 my-auto text-center">
                                <div className="main-text-color">
                                    <h2 className="bold">Your Perspective</h2>
                                    <h5>Your Perspective type is {mbti}.</h5>
                                </div>
                            </div>
                            <div className="col-lg-7 bar">
                                <ResultLayout left="Introversion (I)" right="Extraversion (E)" position={mbti[0] == 'E' ? 'right' : 'left'} />
                                <ResultLayout left="Sensing (S)" right="Intuition (N)" position={mbti[1] == 'N' ? 'right' : 'left'} />
                                <ResultLayout left="Thinking (T)" right="Feeling (F)" position={mbti[2] == 'F' ? 'right' : 'left'} />
                                <ResultLayout left="Judging (J)" right="Perceiving (P)" position={mbti[3] == 'P' ? 'right' : 'left'} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-7 offset-md-5">
                                <div className="pb-5 pt-3 text-center">
                                    <NavLink exact to={MainRouteLinks.index} className="btn btn-outline-primary">Take test again ?</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        return (
            <>
                {
                    mbti ? toRender : this.noData()
                }
            </>
        )
    }
}
