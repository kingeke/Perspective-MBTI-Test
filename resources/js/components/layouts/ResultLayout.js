import React from 'react'

export default function ResultLayout({ left, right, position }) {
    return (
        <div className="row">
            <div className="col-sm-4 text-sm-right text-left">
                <p className="text-muted text-small">{left}</p>
            </div>
            <div className="col-sm-4">
                <div className="progress">
                    <div className={`progress-bar progress-bar-${position}`} role="progressbar" style={{ width: '100%' }}></div>
                </div>
            </div>
            <div className="col-sm-4 text-sm-left text-right">
                <p className="text-muted">{right}</p>
            </div>
        </div>
    )
}
