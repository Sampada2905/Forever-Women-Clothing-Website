import React from 'react'

export default function Ordercard(props) {
    return (
        <div className='container'>
            <div className="card mb-3 border-primary" style={{ marginLeft: '50px' }}>
                <h6 style={{ textAlign: 'left', color: 'rgb(6,136,250)' }}>Order No:-{props.orderno}</h6>
                <div className="row">
                    <div className="col-sm-2">
                        <img src={'http://localhost:6060/' + props.image} className="img" style={{ width: '5rem', height: 'auto' }} alt="..." />
                    </div>
                    <div className="col-sm-4">
                        <div className="card-body" style={{ textAlign: 'left', color: 'crimson', fontWeight: '600' }}>
                            <h5 className="card-title">{props.pname}</h5>
                            <p className="card-text">Price:{props.price},
                                Qty:{props.quantity}<br />
                                Size:{props.size}
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-4' style={{ textAlign: 'left' }}>
                        <div className="card-body" style={{ textAlign: 'left', color: 'crimson', fontWeight: '600' }}>
                            <h5 className="card-title"><ul><li>{props.status}</li></ul></h5>
                        </div>
                    </div>
                    <div className='col-sm-2'>
                        <div className="card-body" style={{textAlign:'left'}}>
                        <button type="button" class="btn btn-outline-primary" style={{fontWeight:'600'}}>Track Order</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
