import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Ordercard from '../components/Ordercard'

export default function Orderhistory() {
    var em = localStorage.getItem("emailid")
    var [orderdata, setOrderdata] = useState([])
    function getorderdata() {
        axios.get("http://localhost:6060/getorderhistory/" + em).then((response) => {
            setOrderdata(response.data)
        })
    }
    console.log(orderdata)
    useEffect(() => {
        getorderdata()
        // eslint-disable-next-line
    }, [])
    return (
        <div style={{alignContent:'center'}}>
            <h1 style={{color:'crimson'}}>Order History</h1>
            <br/>
            {orderdata.map((product, index) => {
                                return (
                                    product.order_data.map((data) => {
                                        return (
                                           <Ordercard image={data.productimage} pname={data.productname} price={data.productprice} quantity={data.productquantity} size={data.productsize} orderno={product._id} status={product.status}/>
                                        )
                                    })
                                )
                            })}
        </div>
    )
}
