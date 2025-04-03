import React, { useEffect, useState } from 'react'
import ReactImageMagnify from 'react-image-magnify';
import { ToastContainer, toast } from 'react-toastify';
import styles from '../components/Productdetail.module.css'
import axios from 'axios';
import Card from './Card';
import { Link } from 'react-router-dom';

export default function Productdetail(props) {
    var imageUrl = `http://localhost:6060/${props.image}`
    var selsi = props.size[0].split(",")
    var [selected, setSelected] = useState('')
    var [quantity,setQuantity]= useState('')
    var [relatedproducts,setRelatedproducts]=useState([])
   
   var productsubcategory= props.productsubcategory
   var productcategory=props.productcategory
    var em = localStorage.getItem("emailid") 
    function handleCart(){
        if(em == null){
            var note="You  cannot add item to the cart you need to first login"
            toast.info(note, {
                position: "top-right",
                autoClose:3500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark", 
                });
        }
        else{
        axios.post('http://localhost:6060/addcartitems', {
            email: em,
            pid: `${props.pid}`,
            productsize: `${selected}`,
            productquantity:quantity
            
        }).then((response) => {
            var msg = response.data["message"]  
            alert(msg)
           
        }) 
        window.location.reload();
    }
   
    }
    
    function getRelatedproducts(){
        axios.get("http://localhost:6060/getrelatedproducts/" +productsubcategory +"/"+productcategory).then((response) => {
            setRelatedproducts(response.data)
          })
    }
      useEffect(() => {
        getRelatedproducts()
    
      },)

    return (
        <div className='container'>
            <ToastContainer
                position="top-right"
                autoClose={3500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
               
            />
            <br/>
            <div className='row'>
                <div className='col-sm-5' id={styles.imagemagnifier}>
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: imageUrl,

                        },
                        largeImage: {
                            src: imageUrl,
                            width: 1200,
                            height: 1800
                        },
                        isHintEnabled: true,
                        shouldHideHintAfterFirstActivation: false,
                    }} />
                </div>
                <div className='col-sm-7'>
                    <h4 style={{ textAlign: 'left', color: 'crimson' }}>{props.name}</h4>
                    <div style={{ float: 'left' }}>
                        <i class="bi bi-star-fill" style={{ color: 'rgb(236, 177, 14)' }}></i>
                        <i class="bi bi-star-fill" style={{ color: 'rgb(236, 177, 14)' }}></i>
                        <i class="bi bi-star-fill" style={{ color: 'rgb(236, 177, 14)' }}></i>
                        <i class="bi bi-star-fill" style={{ color: 'rgb(236, 177, 14)' }}></i>
                        <i class="bi bi-star-fill" style={{ color: 'rgb(231, 203, 126)' }}></i>
                    </div>
                    <br />
                    <h5 style={{ textAlign: 'left', color: 'crimson' }}>{props.price}</h5>
                    <h5 style={{ textAlign: 'left', color: 'crimson' }}>{props.description}</h5>
                    <h5 style={{ textAlign: 'left', color: 'crimson' }}>{props.sizes}</h5>
                    <h5 style={{ textAlign: 'left', color: 'crimson' }}>Select size</h5>
                    {
                        selsi.map(si => {
                            return (
                                <div className="form-check form-check-inline" style={{ float: 'left' }}>
                                    <input className="form-check-input" value={si} name='productsize' type="checkbox" id="inlineCheckbox1" style={{ fontSize: '20px' }} onChange={(e) => { setSelected(e.target.value) }} />
                                    <label className="form-check-label" for="inlineCheckbox1" style={{ fontSize: '20px',color:'rgb(6,136,250)',fontWeight:'600'}} >{si}</label>
                                </div>
                            )

                        })
                    }
                    <br/><br/>
                    <h5 style={{color:'crimson',textAlign:'left'}}>Quantity: <input type='Number'  name='qty' value={quantity} onChange={(e)=>{setQuantity(e.target.value)}} style={{color:'crimson',fontWeight:'600',width:'60px',textAlign:'center',border:'2px solid rgb(6,136,250)'}}/> </h5>
                    <br /><br />
                    <button type="button" class="btn" style={{ fontSize: 'large', backgroundColor: 'rgb(59, 125, 225)', color: 'white', float: 'left', fontWeight: '600' }} onClick={handleCart}>Add to cart</button>
                    <br /><br />
                    <p style={{ textAlign: 'left', color: 'grey', fontSize: '17px' }}>
                        <ul>
                            <li>100% Original Product</li>
                            <li>Cash on delivery is available on this product</li>
                            <li>Easy return & exchange policy within 7 days</li>
                        </ul>
                    </p>

                </div>
            </div>
            <br/><br/>
            <h2 style={{color:'rgb(6,136,250)',fontWeight:'600',fontStyle:'italic',textAlign:'left'}}>Related Products:-</h2>
            <div className='row'>
              <div className='column' style={{ display: 'flex',flexWrap:'wrap',gap:'20px'}}>
                {relatedproducts.map((product, index) => {
                  return (
                  <Link className='text-decoration-none' to={`/product/${product._id}`}><Card image={product.productimage} name={product.productname} price={product.productprice} /></Link>
                  )
                })}
              </div>
            </div>
            <br /><br /><br />
        </div>
    )
}
