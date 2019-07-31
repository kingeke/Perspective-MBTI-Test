import React, { Component } from 'react'
import { MainRouteLinks, ApiRouteLinks } from '../Links/RouteLinks';
import { Notifications } from '../layouts/Notificaations';
import QuestionLayout from '../layouts/QuestionLayout';
import { CustomApi } from '../helpers/ApiHelper';

export default class Index extends Component {

    initalState = {
        ranks: [1, 2, 3, 4, 5, 6, 7],
        questions: [
            { question: 'You find it takes effort to introduce yourself to other people.', dimension: 'EI', meaning: 'I' },
            { question: 'You consider yourself more practical than creative.', dimension: 'SN', meaning: 'S' },
            { question: 'Winning a debate matters less to you than making sure no one gets upset.', dimension: 'TF', meaning: 'F' },
            { question: 'You get energized going to social events that involve many interactions.', dimension: 'EI', meaning: 'E' },
            { question: 'You often spend time exploring unrealistic and impractical yet intriguing ideas.', dimension: 'SN', meaning: 'N' },
            { question: 'Deadlines seem to you to be of relative rather than absolute importance.', dimension: 'JP', meaning: 'P' },
            { question: 'Logic is usually more important than heart when it comes to making important decisions.', dimension: 'TF', meaning: 'T' },
            { question: 'Your home and work environments are quite tidy.', dimension: 'JP', meaning: 'J' },
            { question: 'You do not mind being at the center of attention.', dimension: 'EI', meaning: 'E' },
            { question: 'Keeping your options open is more important than having a to-do list.', dimension: 'JP', meaning: 'P' }
        ],
        response: [],
        email: '',
        sending: false
    }

    state = this.initalState

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChecked = (e, item, index) => {
        let response = this.state.response

        let score;

        if (e.target.value > 4) {
            score = item.meaning
        }
        else {
            let dimensions = item.dimension.split('')
            var dimension = dimensions.filter((dimension) => {
                return dimension != item.meaning
            })
            score = dimension[0]
        }

        response[index] = { question: item.question, dimension: item.dimension, rank: e.target.value, score }
        this.setState({
            response
        })
    }

    handleSubmit = (e) => {

        var form = $('.form').parsley({
            errorsContainer: function (ParsleyField) {
                return ParsleyField.$element.attr("title");
            },
            errorsWrapper: false
        });

        if (form.isValid()) {
            e.preventDefault();
            this.setState({
                sending: true
            }, () => {
                var data = {
                    email: this.state.email,
                    response: this.state.response
                }
                CustomApi(ApiRouteLinks.store, data).then(
                    response => {
                        this.setState({
                            sending: false
                        }, () => {
                            if (response.status == 'success') {
                                this.props.history.push(MainRouteLinks.result, {
                                    mbti: response.mbti
                                })
                            }
                            else {
                                Notifications('An unknown error occurred, please contact support', 'danger')
                            }
                        })
                    }
                ).catch(
                    err => {
                        this.setState({
                            sending: false
                        }, () => {
                            Notifications(err.message, 'danger')
                        })

                    }
                )
            })
        }
    }

    render() {
        return (
            <div className="container mt-5 mb-5" id="home">
                <div className="text-center main-text-color">
                    <h2>Discover Your Perspective</h2>
                    <h5>Complete the 7 min test and get a detailed report of your lenses on the world.</h5>
                </div>
                <form className="form">
                    <div className="mt-5 mb-5">
                        {
                            this.state.questions.map((item, index) => {
                                return (
                                    <QuestionLayout key={index} item={item} itemIndex={index} ranks={this.state.ranks} handleChecked={this.handleChecked} />
                                )
                            })
                        }
                        <div className="row bordered">
                            <div className="col-12 mt-4 text-center">
                                <h5 className="bold">Your Email</h5>
                            </div>
                            <div className="col-sm-8 mx-auto mb-5">
                                <input type="email" className="form-control" value={this.state.email} onChange={this.handleChange} name="email" required />
                            </div>
                        </div>
                        <div className="mt-4 text-center">
                            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} disabled={this.state.sending ? true : false}>{this.state.sending ? 'Loading...' : 'Save & Continue'}</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}