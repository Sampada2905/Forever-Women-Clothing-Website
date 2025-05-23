import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Addresscard from '../components/Addresscard'

export default function Orderconfirmation() {
    var em = localStorage.getItem("emailid")
    var total = localStorage.getItem("totalprice")
    var [orderdata, setOrderdata] = useState([])
    var [orderadd, setOrderadd] = useState([])
    function getorderdata() {
        axios.get("http://localhost:6060/orderconfirmation/" + em +"/"+total).then((response) => {
            setOrderdata(response.data)
        })
    }
    function getshippingadd() {
        axios.get("http://localhost:6060/getshipaddress/" + em).then((response) => {
            setOrderadd(response.data)
        })
    }
    useEffect(() => {
        getorderdata()
        getshippingadd()
        // eslint-disable-next-line
    },[])
    console.log(orderdata)
    return (
        <div className='container-fluid'>
            <h1 style={{ color: 'crimson' }}>Order Summary</h1>
            <div className='row'>
                <div className='col-sm-6' style={{ display: 'flex', flexWrap: 'wrap', gap: '25px' }}>
                        {orderdata.map((product, index) => {
                            return (
                                <h6 style={{color:'crimson'}}>Orderno:{product._id}</h6>
                            )

                        })
                        }
                    <table class="table table-hover table-bordered" style={{ border: '1px solid grey' }}>
                        <thead>
                            <tr>
                                <th class="table-light" scope="col" style={{ color: 'rgb(6,136,250)' }}>Image</th>
                                <th class="table-light" scope="col" style={{ color: 'rgb(6,136,250)' }}>Name</th>
                                <th class="table-light" scope="col" style={{ color: 'rgb(6,136,250)' }}>Price</th>
                                <th class="table-light" scope="col" style={{ color: 'rgb(6,136,250)' }}>Size</th>
                                <th class="table-light" scope="col" style={{ color: 'rgb(6,136,250)' }}>Quantity</th>
                                <th class="table-light" scope="col" style={{ color: 'rgb(6,136,250)' }}>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderdata.map((product, index) => {
                                return (
                                    product.order_data.map((data) => {
                                        var totalamount = data.productprice * data.productquantity
                                        return (
                                            <tr>
                                                <td><img src={'http://localhost:6060/' + data.productimage} className='img' alt="..." style={{ width: '5rem', height: 'auto' }} /></td>
                                                <td style={{ color: 'crimson', fontWeight: '600' }}>{data.productname}</td>
                                                <td style={{ color: 'crimson', fontWeight: '600' }}>{data.productprice}</td>
                                                <td style={{ color: 'crimson', fontWeight: '600' }}>{data.productsize}</td>
                                                <td style={{ color: 'crimson', fontWeight: '600' }}>{data.productquantity}</td>
                                                <td style={{ color: 'crimson', fontWeight: '600' }}>{totalamount}</td>
                                            </tr>

                                        )
                                    })
                                )
                            })}
                            <tr>
                                <td colSpan={5} style={{color:'rgb(6,136,250)', fontWeight: '600',fontSize:'20px'}}>Total Amount</td>
                                <td>
                                    {orderdata.map((product, index) => {
                                        return (
                                            <h5 style={{color:'rgb(6,136,250)'}}>{product.totalprice}</h5>
                                        )

                                    })
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br/><br/>
                </div>
                <div className='col-sm-6'>
                    <br/><br/>
                    {orderadd.map((data) => {
                        return (
                            <Addresscard name={data.name} address={data.address} address2={data.address2} country={data.country} state={data.state} city={data.city} zip={data.zip} mobile={data.mobile}/>
                            
                        )
                    })}
                </div>
                <br/><br/>
            </div>

        </div>
    )
}

