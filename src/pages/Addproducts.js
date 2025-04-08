import axios from 'axios'
import React,{useState} from 'react'

export default function Addproducts() {
    var [productimage,setProductimage]=useState({})
    var [productname,setProductname]=useState('')
    var [productdescription,setProductdescription]=useState('')
    var [productprice,setProductprice]=useState('')
    var[productcategory,setProductcategory]=useState('')
    var[productsubcategory,setProductsubcategory]=useState('')
    var[productsizes,setProductsizes]=useState([])
    var[bestseller,setBestseller]=useState('')
   
    function handleSubmit(e){
        e.preventDefault();
        const fd = new FormData()
        fd.append("file",productimage)
        fd.append("productname",productname)
        fd.append("productdescription",productdescription)
        fd.append("productprice",productprice)
        fd.append("productcategory",productcategory)
        fd.append("productsubcategory",productsubcategory)
        fd.append("productsizes",productsizes)
        fd.append("bestseller",bestseller)
        axios.post("http://localhost:6060/productupload",fd,{headers:{'Content-Type':'multipart/form-data'}}).then((response)=>{
            alert(response.data["message"])
            window.location.reload();
        })
        
    }
    function handleChange(e){
        const{value,checked}=e.target
        if(checked){
            setProductsizes(pre =>[...pre,value])
        }
        else(
            setProductsizes(pre=>{
                return[...pre.filter(productsizes=>productsizes!==value)]
            })
        )
    }
     
    function handleChecked(e){
        const{checked}=e.target
        if(checked){
            setBestseller('yes')
        }
        else(
            setBestseller('')
        )
    }
    
    return (
        <div>
            <h3 style={{ color: 'crimson' }}>Add Products Here</h3>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form method='post' encType='multipart/form-data' onSubmit={handleSubmit} style={{ textAlign: 'left', border: '2px solid crimson', padding: '10px', backgroundColor: 'rgb(128, 214, 242)', width: '100%' }}>
                        <div >
                            <label for="pimg" className="form-label" style={{ color: 'crimson', fontSize: 'large', fontWeight: '600' }}>Product Image</label>
                            <input type="file" className="form-control" id="pimg" name='pimg' onChange={(e)=>setProductimage(e.target.files[0])} />
                        </div>
                        <div >
                            <label for="pnm" className="form-label" style={{ color: 'crimson', fontSize: 'large', fontWeight: '600' }}>Product Name</label>
                            <input type="text" className="form-control" id="pnm" name='pnm' placeholder='Enter Product Name' value={productname} onChange={(e)=>setProductname(e.target.value)}/>
                        </div>
                        <div >
                            <label for="pdesc" className="form-label" style={{ color: 'crimson', fontSize: 'large', fontWeight: '600' }}>Product Description</label>
                            <textarea className="form-control" id="pdesc" name='pdesc' rows="2" placeholder='Enter Product Description' value={productdescription}  onChange={(e)=>setProductdescription(e.target.value)} ></textarea>
                        </div>
                        <div >
                            <label for="price" className="form-label" style={{ color: 'crimson', fontSize: 'large', fontWeight: '600' }}>Product Price</label>
                            <input type="text" className="form-control" id="price" name='price' placeholder='Enter Product Price' value={productprice}  onChange={(e)=>setProductprice(e.target.value)}  />
                        </div>
                        <label for="category" className="form-label" style={{ color: 'crimson', fontSize: 'large', fontWeight: '600' }}>Product Category</label>
                        <select className="form-select" aria-label="Default select example" name='category' value={productcategory} onChange={(e)=>setProductcategory(e.target.value)} >
                            <option selected>--Select Category--</option>
                            <option value="kurtasets" >Kurta Sets</option>
                            <option value="kurtis">Kurtis</option>
                            <option value="sarees">Sarees</option>
                            <option value="coordsets">Co-ords Sets</option>
                            <option value="lehengas">Lehengas</option>
                        </select>
                        <label for="subcategory" className="form-label" style={{ color: 'crimson', fontSize: 'large', fontWeight: '600' }}>Product Subcategory</label>
                        <select className="form-select" aria-label="Default select example" name='subcategory' value={productsubcategory} onChange={(e)=>setProductsubcategory(e.target.value)}>
                            <option selected>--Select Subcategory--</option>
                            <option value="festive" >Festive</option>
                            <option value="cotton">Cotton</option>
                            <option value="silk">Silk</option>
                            <option value="party wear">Party Wear</option>
                        </select>
                        <label for="subcategory" className="form-label" style={{ color: 'crimson', fontSize: 'large', fontWeight: '600' }}>Product Sizes</label>
                        <br/>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" value="M"  type="checkbox" id="inlineCheckbox1"  style={{fontSize:'20px'}} onChange={handleChange} />
                            <label className="form-check-label" for="inlineCheckbox1" style={{fontSize:'20px'}} >M</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" value="L" type="checkbox"  id="inlineCheckbox2"  style={{fontSize:'20px'}} onChange={handleChange} />
                            <label className="form-check-label" for="inlineCheckbox2" style={{fontSize:'20px'}} >L</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" value="XL" type="checkbox"  id="inlineCheckbox3"  style={{fontSize:'20px'}} onChange={handleChange} />
                            <label className="form-check-label" for="inlineCheckbox3" style={{fontSize:'20px'}} >XL</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" value="XXL" type="checkbox"  id="inlineCheckbox3"  style={{fontSize:'20px'}} onChange={handleChange} />
                            <label className="form-check-label" for="inlineCheckbox3" style={{fontSize:'20px'}} >XXL</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" value="FS" type="checkbox"  id="inlineCheckbox3"  style={{fontSize:'20px'}} onChange={handleChange} />
                            <label className="form-check-label" for="inlineCheckbox3" style={{fontSize:'20px'}}>FS</label>
                        </div>
                        <br/>
                        <div className="form-check form-check-inline">
                        <label for="subcategory" className="form-label" style={{ color: 'crimson', fontSize: 'large', fontWeight: '600' }}>Add to bestseller</label>
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" style={{fontSize:'20px'}} name='bestseller' value={bestseller} onChange={handleChecked}/>
                            
                        </div>
                        
                        <br />
                        <button type="submit" className="btn" style={{ backgroundColor: 'rgb(248, 58, 134)', color: 'white', fontSize: 'large', fontWeight: '600',marginRight:'10px' }}>Submit</button>
                    </form>

                </div>
                <div className='col-sm-3'></div>
            </div>
            <br/><br/>
        </div>
    )
}

