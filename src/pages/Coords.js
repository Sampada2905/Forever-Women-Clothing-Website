import React, { useEffect, useState } from 'react'
import Productcard from '../components/Productcard'
import styles from '../components/Navbar.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Coords() {
  var [products, setProducts] = useState([])
  var [productsubcategory, setProductsubcategory] = useState('')
 
  function fetchproducts() {
    if (productsubcategory === "allsubcategory") {
      axios.get("http://localhost:6060/getproducts/coordsets").then((response) => {
        setProducts(response.data)
      })
    }
    else{
      axios.get("http://localhost:6060/getproducts/coordsets/" + productsubcategory).then((response) => {
        setProducts(response.data)
      })
    }
  }
 
  useEffect(() => {
    fetchproducts()
   
  })
  return (
    <div className='container-fluid'>
      <h1 style={{ color: 'crimson' }}>Co-ord Sets</h1>
      <div className='row'>
        <div className='col-sm-2'>
          <select className="form-select" aria-label="Default select example" name='subcategory'  style={{color:'crimson',fontSize:'large',fontWeight:'600'}} value={productsubcategory} onChange={(e) => setProductsubcategory(e.target.value)}>
            <option value="allsubcategory"  id={styles.navlink}>All Subcategories</option>
            <option value="festive"  id={styles.navlink}>Festive</option>
            <option value="cotton"  id={styles.navlink}>Cotton</option>
            <option value="silk"  id={styles.navlink}>Silk</option>
            <option value="party wear"  id={styles.navlink}>Party Wear</option>
          </select>
        </div>
        <div className='col-sm-10' style={{display: 'flex',flexWrap: 'wrap',gap:'25px'}}>
            {products.map((product, index) => {
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
