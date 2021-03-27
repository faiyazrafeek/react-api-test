import React from 'react'

function Card({cases, title, icon, color}) {
    return (   
        <div className="card card-stats">
            {/* Card body */}
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <h5 className="card-title text-uppercase text-muted mb-0">{title}</h5>
                        <span className="h2 font-weight-bold mb-0">{cases}</span>
                    </div>
                    <div className="col-auto">
                        <div className={`icon icon-shape ${color} text-white rounded-circle shadow`}>
                            <i className={`fas ${icon}`}></i>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Card

