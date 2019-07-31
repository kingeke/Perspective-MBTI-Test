import React from 'react'

export const Alerts = ({ type, message, onClick, dismissible = true }) => {
    return (
        <div className={`alert alert-${type} ${dismissible ? 'alert-dismissible' : ''} fade show`} role="alert">
            {message}
            {
                dismissible ? (
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={onClick}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                ) : null
            }
        </div>
    )
}