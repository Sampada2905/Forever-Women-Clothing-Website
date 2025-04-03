import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Listproducts(){
  var[products,setProducts]=useState([])
  function getProducts(){
    axios.get("http://localhost:6060/listproducts").then((response)=>{
      setProducts(response.data)
    })
  }
  function deletebyid(pi){
    axios.delete("http://localhost:6060/delproduct/"+pi).then(response=>{
      alert(response.data["message"])
      getProducts()
    })
  }
  useEffect(()=>{
    getProducts()

  },[])
  return (
    <div className='container'>
      <h3 style={{ color: 'crimson' }}>List Products</h3>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col' style={{color:'rgb(6,136,250)'}}>Image</th>
            <th scope='col' style={{color:'rgb(6,136,250)'}}>Name</th>
            <th scope='col' style={{color:'rgb(6,136,250)'}}>Category</th>
            <th scope='col' style={{color:'rgb(6,136,250)'}}>Sizes</th>
            <th scope='col' style={{color:'rgb(6,136,250)'}}>Price</th>
            <th scope='col' style={{color:'rgb(6,136,250)'}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((row)=>{
              return<tr>
                <td><img src={'http://localhost:6060/'+row.productimage} className='img' alt="..." style={{width:'5rem',height:'auto'}} /></td>
                <td style={{color:'crimson',fontWeight:'600'}}>{row.productname}</td>
                <td style={{color:'crimson',fontWeight:'600'}}>{row.productcategory}</td>
                <td style={{color:'crimson',fontWeight:'600'}}>{row.productsizes}</td>
                <td style={{color:'crimson',fontWeight:'600'}}>{row.productprice}</td>
                <td>
                  <i class="bi bi-trash3-fill" style={{color:'crimson',fontSize:'22px'}} onClick={()=>{deletebyid(row._id)}}></i>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}
