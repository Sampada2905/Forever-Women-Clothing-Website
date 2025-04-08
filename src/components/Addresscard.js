import React from 'react'

export default function Addresscard(props) {
    return (
        <div>
            <div className="card">
                <h5 className="card-header" style={{color:'rgb(6,136,250)'}}>Shipping Address</h5>
                <div className="card-body">
                    <h5 className="card-title" style={{textAlign:'left',color:'crimson'}}>{props.name}</h5>
                    <p className="card-text" style={{textAlign:'left',color:'crimson', fontWeight: '600'}}>{props.address}.
                    {props.address2}<br/>
                    {props.city}<br/>
                    {props.state},{props.country}<br/>
                    {props.zip}<br/>
                    {props.mobile}
                    </p>
                   
                </div>
            </div>
        </div>
    )
}

