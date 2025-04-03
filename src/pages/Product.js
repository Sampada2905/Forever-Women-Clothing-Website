import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Productdetail from '../components/Productdetail'

export default function Product() {
    var params=useParams()
    var id=params.id
    var [products, setProducts] = useState([])
    function fetchproducts() {
      axios.get("http://localhost:6060/getproduct/"+id).then((response) => {
        setProducts(response.data)
      })
    }
    useEffect(() => {
      fetchproducts()
  
    })
    return (
        <div className='container'>
            {products.map((product, index) => {
            return (
             <Productdetail key={index} 
             image={product.productimage} 
             name={product.productname} 
             price={product.productprice} 
             size={product.productsizes} 
             description={product.productdescription}
             pid={product._id}
             productsubcategory={product.productsubcategory}
             productcategory={product.productcategory}
             />

            )
          })}
                         
        </div>
      )
}    
