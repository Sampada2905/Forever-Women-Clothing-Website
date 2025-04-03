import React, { useEffect, useState } from 'react'
import Productcard from '../components/Productcard'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Lehengas() {
  var [products, setProducts] = useState([])
  function fetchproducts() {
    axios.get("http://localhost:6060/getproducts/lehengas").then((response) => {
      setProducts(response.data)
    })
  }
  useEffect(() => {
    fetchproducts()

  }, [])
  return (
    <div>
      <h1 style={{color:'crimson'}}>Lehengas</h1>
      <div className='row'>
        <div className='col-sm-2'></div>
        <div className='col-sm-10' style={{ display: 'flex',flexWrap:'wrap',gap:'35px'}}>
          {products.map((product, index) => {
            return (
              <Link className='text-decoration-none' to={`/product/${product.productid}`}><Productcard image={product.productimage} name={product.productname} price={product.productprice} /></Link>
            )
          })}
        </div>
      </div>
      <br/><br/>
    </div>
  )
}

