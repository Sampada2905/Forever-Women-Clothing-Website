import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Viewordertablecard from '../components/Viewordertablecard'
import styles from '../components/viewordertable.module.css'

export default function Vieworder() {
  var [orderdata, setOrderdata] = useState([])
  function getorderdata() {
    axios.get("http://localhost:6060/vieworders").then((response) => {
      setOrderdata(response.data)
    })
  }

  function changestatus(newstatus, oi) {
    axios.put("http://localhost:6060/orderstatus/" + oi, {
      status: newstatus
    }).then((response) => {
      alert(response.data["message"])
      window.location.reload()
    })
  }

  useEffect(() => {
    getorderdata()
    // eslint-disable-next-line
  }, [])
  return (
    <div className='container'>
      <h1 style={{ color: 'crimson' }}>View Orders</h1>
      <table className='table table-bordered align-middle border-primary'>
        <thead>
          <tr>
            <th scope='col' style={{ color: 'rgb(6,136,250)' }}>Order Id</th>
            <th scope='col' style={{ color: 'rgb(6,136,250)' }}>Total Amount</th>
            <th scope='col' style={{ color: 'rgb(6,136,250)' }}>Status</th>
            <th scope='col' style={{ color: 'rgb(6,136,250)' }}>Order Items</th>
          </tr>
        </thead>
        <tbody>
          {
            orderdata.map((row, index) => {
              return <tr>
                <td style={{ color: 'crimson', fontWeight: '600' }}>{row._id}</td>
                <td style={{ color: 'crimson', fontWeight: '600' }}>{row.totalprice}</td>
                <td>
                  <div class="dropdown">
                    <button class="btn btn-light dropdown-toggle" type="button" style={{ color: 'crimson', fontWeight: '600'}} id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                      {row.status}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><button class="dropdown-item" type="button" id={styles.dropdown} onClick={() => { changestatus('Order Placed', row._id) }}>Order Placed</button></li>
                      <li><button class="dropdown-item" type="button" id={styles.dropdown} onClick={() => { changestatus('Packing', row._id) }}>Packing</button></li>
                      <li><button class="dropdown-item" type="button" id={styles.dropdown} onClick={() => { changestatus('Shipped', row._id) }}>Shipped</button></li>
                      <li><button class="dropdown-item" type="button" id={styles.dropdown} onClick={() => { changestatus('Out for Delivery', row._id) }}>Out for Delivery</button></li>
                      <li><button class="dropdown-item" type="button" id={styles.dropdown} onClick={() => { changestatus(' Delivered', row._id) }}>Delivered</button></li>
                    </ul>
                  </div>
                </td>
                <td>
                  {
                    row.order_data.map((data) => {
                      return (
                        <Viewordertablecard image={data.productimage} pname={data.productname} price={data.productprice} quantity={data.productquantity} size={data.productsize} />
                      )
                    })
                  }
                </td>
              </tr>
            })
          }
        </tbody>

      </table>
    </div>
  )
}
