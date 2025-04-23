import React from 'react'

export default function Viewordertablecard(props) {
  return (
    <div className='container'>
            <div className="card mb-3 border-primary" style={{ marginLeft: '50px' }}>
                <div className="row">
                  <div className="col-sm-2">
                        <img src={'http://localhost:6060/' + props.image} className="img" style={{ width: '5rem', height: 'auto' }} alt="..." />
                    </div>
                    <div className="col-sm-10">
                        <div className="card-body" style={{ textAlign: 'left', color: 'crimson', fontWeight: '600' }}>
                            <h5 className="card-title">{props.pname}</h5>
                            <p className="card-text">Price:{props.price},
                                Qty:{props.quantity},
                                Size:{props.size}
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    )
}
