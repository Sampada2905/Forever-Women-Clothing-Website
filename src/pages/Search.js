import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Productcard from '../components/Productcard'

export default function Search() {
  var params = useParams()
  var term = params.term
  var [searchproducts, setSearchproducts] = useState([])
  var [products, setProducts] = useState([])

  function getproducts() {
    axios.get("http://localhost:6060/searchproducts").then((response) => {
      setProducts(response.data)
    })
  }

  useEffect(() => {
    getproducts()
    setSearchproducts(
      products.filter((product) => product?.productdescription?.toLowerCase().includes(term.toLowerCase()))
    )

  }, [products, term])

  return (
    <div className='container'>
      <h1>Search page:{term}</h1>
      <div className='row'>
        <div className='col-sm-2'></div>
        <div className='col-sm-10' style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {searchproducts.map((product, index) => {
            return (
              <Link className='text-decoration-none' to={`/product/${product._id}`}><Productcard image={product.productimage} name={product.productname} price={product.productprice} /></Link>
            )
          })}
        </div>
      </div>
      <br /><br />
    </div>
  )
}
