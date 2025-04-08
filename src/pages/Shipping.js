import axios from 'axios'
import React, { useState } from 'react'

export default function Shipping() {
    var em = localStorage.getItem("emailid")
    var [name, setName] = useState('')
    var [mobile, setMobile] = useState('')
    var [address, setAddress] = useState('')
    var [address2, setAddress2] = useState('')
    var [country, setCountry] = useState('')
    var [city, setCity] = useState('')
    var [state, setState] = useState('')
    var [zip, setZip] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:6060/shippingaddress', {
            email: em,
            name: name,
            mobile: mobile,
            address: address,
            address2: address2,
            country: country,
            city: city,
            state: state,
            zip: zip

        }).then((response) => {
            var msg = response.data["message"]
            alert(msg)
            window.location = '/orderconfirmation'
        })
    }
    function handleoldadd(){
         window.location = '/orderconfirmation'
    }
     

    return (
        <div>
            <br />
            <div className='row container-fluid'>
                <div className='col-sm-2'></div>
                <div className='col-sm-8'>
                    <h3 style={{color:'crimson'}}>Delivery Information</h3>
                    <br />
                    <form className="row g-3" style={{ textAlign: 'left', border: '2px solid grey',backgroundImage:'url(sh1.jpeg)'}} onSubmit={handleSubmit}>
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label" style={{color:'rgb(23, 133, 230)',fontSize:'large',fontWeight:'600'}}>Name</label>
                            <input type="text" className="form-control" id="inputName" value={name} onChange={(e) => { setName(e.target.value) }} />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label" style={{color:'rgb(23, 133, 230)',fontSize:'large',fontWeight:'600'}}>Mobile No.</label>
                            <input type="Number" className="form-control" id="inputPassword4" value={mobile} onChange={(e) => { setMobile(e.target.value) }} />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label" style={{color:'rgb(23, 133, 230)',fontSize:'large',fontWeight:'600'}}>Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={address} onChange={(e) => { setAddress(e.target.value) }} />
                        </div>
                        <div className="col-md-7">
                            <label for="inputAddress2" className="form-label" style={{color:'rgb(23, 133, 230)',fontSize:'large',fontWeight:'600'}}>Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={address2} onChange={(e) => { setAddress2(e.target.value) }} />
                        </div>
                        <div className="col-md-5">
                            <label for="inputEmail4" className="form-label" style={{color:'rgb(23, 133, 230)',fontSize:'large',fontWeight:'600'}}>Country</label>
                            <input type="text" className="form-control" id="inputName" value={country} onChange={(e) => { setCountry(e.target.value) }} />
                        </div>
                        <div className="col-md-6">
                            <label for="inputCity" className="form-label" style={{color:'rgb(23, 133, 230)',fontSize:'large',fontWeight:'600'}}>City</label>
                            <input type="text" className="form-control" id="inputCity" value={city} onChange={(e) => { setCity(e.target.value) }} />
                        </div>
                        <div className="col-md-4">
                            <label for="inputState" className="form-label" style={{color:'rgb(23, 133, 230)',fontSize:'large',fontWeight:'600'}}>State</label>
                            <input type="text" className="form-control" id="inputState" value={state} onChange={(e) => { setState(e.target.value) }} />
                        </div>
                        <div className="col-md-2">
                            <label for="inputZip" className="form-label" style={{color:'rgb(23, 133, 230)',fontSize:'large',fontWeight:'600'}}>Zip</label>
                            <input type="text" className="form-control" id="inputZip" value={zip} onChange={(e) => { setZip(e.target.value) }} />
                            <br />
                        </div>
                        <div class="d-grid gap-2 col-6 mx-auto">
                            <button class="btn" type="submit" style={{backgroundColor:'rgb(23, 133, 230)',color:'white',fontSize:'large',fontWeight:'600'}}>Submit</button>
                            <button class="btn" type="button"  style={{backgroundColor:'crimson',color:'white',fontSize:'large',fontWeight:'600'}} onClick={handleoldadd}>Use my old address</button>
                            <br />
                        </div>
                    </form>
                    <br /><br />
                </div>
                <div className='col-sm-2'></div>
            </div>

        </div>
    )
}
