import axios from 'axios'
import React, { useEffect, useState} from 'react'


export default function Cart() {
  var[cartitems, setCartitems] = useState([])
  var[subtotal,setSubtotal]= useState(0)
  var em = localStorage.getItem("emailid")
  function handleSubtotal(){
    let sum=0;
    cartitems.map((row)=>(
      sum += row.productprice*row.productquantity
    ))
    setSubtotal(sum)
  }
  function getCartitems() {
    axios.get("http://localhost:6060/getcartitems/" + em).then((response) => {
      setCartitems(response.data)
    })
  }
  function deletebyid(pi) {
    axios.delete("http://localhost:6060/delcartitems/" + pi).then(response => {
      var msg = response.data["message"]
      alert(msg)
      getCartitems()
      window.location.reload();      
    })
   
  }
 function delcartitems(){
    axios.delete("http://localhost:6060/delcart/" + em).then(response => {
      window.location="/shipping" 
      
  })
}
  
  useEffect(() => {
    getCartitems()
   // eslint-disable-nxt-line react-hooks/exhaustive-deps
   // eslint-disable-next-line
  },[])

  useEffect(()=>{
    handleSubtotal() 
  })
 
  function handleCheckout(){
    axios.post('http://localhost:6060/orderdata', {
      
      email: em,
      order_data:cartitems,
      totalprice:subtotal,
      date:new Date()   //Date.now() also gives the same o/p 
    }).then((response) => {
     delcartitems()
     localStorage.setItem("totalprice",subtotal)
     
    })
  }
  return (
    <div className='container'>
      <h1 style={{ color: 'crimson' }}>Cart Items</h1>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col' style={{ color: 'rgb(6,136,250)' }}>Product Id</th>
            <th scope='col' style={{ color: 'rgb(6,136,250)' }}>Image</th>
            <th scope='col' style={{ color: 'rgb(6,136,250)' }}>Name</th>
            <th scope='col' style={{ color: 'rgb(6,136,250)' }}>ProductSize</th>
            <th scope='col' style={{ color: 'rgb(6,136,250)' }}>Price</th>
            <th scope='col' style={{ color: 'rgb(6,136,250)' }}>Quantity</th>
            <th scope='col' style={{ color: 'rgb(6,136,250)' }}>Total Price</th>
            <th scope='col' style={{ color: 'rgb(6,136,250)' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            cartitems.map((row) => {
              var totalprice = row.productprice * row.productquantity 
              return <tr>
                <td style={{ color: 'crimson', fontWeight: '600' }}>{row.pid}</td>
                <td><img src={'http://localhost:6060/' + row.productimage} className='img' alt="..." style={{ width: '5rem', height: 'auto' }} /></td>
                <td style={{ color: 'crimson', fontWeight: '600' }}>{row.productname}</td>
                <td style={{ color: 'crimson', fontWeight: '600' }}>{row.productsize}</td>
                <td style={{ color: 'crimson', fontWeight: '600' }}>{row.productprice}</td>
                <td style={{ color: 'crimson', fontWeight: '600' }}>{row.productquantity}</td>
                <td style={{ color: 'crimson', fontWeight: '600' }}>{totalprice}</td>
                <td>
                  <i class="bi bi-trash3-fill" style={{ color: 'crimson', fontSize: '22px' }} onClick={() => { deletebyid(row.pid) }}></i>
                </td>
              </tr>
            })
          }
        </tbody>
       
      </table>
      <h4 style={{ textAlign: 'right', color: 'rgb(6,136,250)' }}><u>Cart Totals:</u></h4>
      <h4 style={{ textAlign: 'right', color: 'crimson' }}>Subtotal:{subtotal}</h4>
   <button className='btn' style={{ float: 'right', backgroundColor: 'rgb(6,136,250)', color: 'white', fontWeight: '600' }} onClick={handleCheckout}>Proceed To Checkout</button>

      <br /><br />
    </div>
  )
}
