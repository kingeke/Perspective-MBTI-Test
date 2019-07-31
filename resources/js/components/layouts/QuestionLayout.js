import React from 'react'

export default function QuestionLayout({ item, itemIndex, ranks, handleChecked }) {
    return (
        <div className="row bordered">
            <div className="col-12 mt-4 mb-4 text-center">
                <h5 className="bold">{item.question}</h5>
            </div>
            <div className="col-lg-4 col-md-3 text-md-right text-left">
                <p className="text-danger">Disagree</p>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
                {
                    ranks.map((number, index) => {
                        return (
                            <div className="custom-control custom-radio custom-control-inline" key={index}>
                                <input type="radio" id={`${itemIndex}-${number}`} className="custom-control-input" value={number} name={`item-${itemIndex}`} onChange={(e) => handleChecked(e, item, itemIndex)} required />
                                <label className="custom-control-label" htmlFor={`${itemIndex}-${number}`}></label>
                            </div>
                        )
                    })
                }
            </div>
            <div className="col-lg-4 col-md-3 text-md-left text-right">
                <p className="text-success">Agree</p>
            </div>
        </div>
    )
}
