import axios from 'axios'
import React, { useState } from 'react'

export default function Contact() {
  var [name, setName] = useState('')
  var [email, setEmail] = useState('')
  var [contact, setContact] = useState('')
  var [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:6060/createcontact', {
      name: name,
      email: email,
      contact: contact,
      message: message
    }).then((response) => {
      var msg = response.data["message"]
      alert(msg)
      setName("")
      setEmail("")
      setContact("")
      setMessage("")

    })
  }
  return (
    <div>
      <br />
      <div className='row'>
        <div className='col-sm-6'>
          <br /><br />
          <img src='contact_img.png' alt='' style={{ height: '440px', width: '100%' }} />
        </div>
        <div className='col-sm-6'>
          <h1 style={{ color: 'crimson' }}>Contact Us</h1>
          <form style={{ textAlign: 'left', border: '2px solid crimson', padding: '10px', backgroundColor: 'rgb(128, 214, 242)', width: '100%' }} onSubmit={handleSubmit}>
            <div >
              <label for="nm" class="form-label" style={{ color: 'crimson', fontSize: 'large', fontWeight: '600' }}>Name</label>
              <input type="text" class="form-control" id="nm" placeholder='Enter Name' value={name} onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div >
              <label for="exampleInputEmail1" class="form-label" style={{ color: 'crimson', fontSize: 'large', fontWeight: '600' }}>Email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
            </div>

            <div >
              <label for="con" class="form-label" style={{ color: 'crimson', fontSize: 'large', fontWeight: '600' }}>Contact</label>
              <input type="Number" class="form-control" id="con" placeholder='Enter Contact No.' value={contact} onChange={(e) => { setContact(e.target.value) }} />
            </div>
            <div >
              <label for="exampleFormControlTextarea1" class="form-label" style={{ color: 'crimson', fontSize: 'large', fontWeight: '600' }}>Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Enter Message' value={message} onChange={(e) => { setMessage(e.target.value) }}></textarea>
            </div>
            <br />
            <button type="submit" class="btn" style={{ backgroundColor: 'rgb(248, 58, 134)', color: 'white', fontSize: 'large', fontWeight: '600' }}>Submit</button>
          </form>
        </div>
      </div>
      <br /><br />
      <div className='row'>
        <div className='col-sm-3'>
          <i class="bi bi-geo-alt" style={{ fontSize: '40px', color: 'rgb(6, 136, 250)' }}></i>
          <h4 style={{ color: 'crimson' }}>Our Office</h4>
          <h6 style={{ color: 'rgb(6, 136, 250)', textAlign: 'center' }}>Palm Court Bldg M,501/B,5th Floor,New Link Road,Malad,West Mumbai,Maharshtra</h6>
        </div>
        <div className='col-sm-3'>
          <i class="bi bi-envelope-open" style={{ fontSize: '40px', color: 'rgb(6, 136, 250)' }}></i>
          <h4 style={{ color: 'crimson' }}>General Enquiries</h4>
          <h6 style={{ color: 'rgb(6, 136, 250)', textAlign: 'center' }}>foreversupport@justdial.com<br />
            foreverclothing@gmail.com</h6>
        </div>
        <div className='col-sm-3'>
          <i class="bi bi-telephone" style={{ fontSize: '40px', color: 'rgb(6, 136, 250)' }}></i>
          <h4 style={{ color: 'crimson' }}>Call Us</h4>
          <h6 style={{ color: 'rgb(6, 136, 250)', textAlign: 'center' }}>+91 8765341278</h6>

        </div>
        <div className='col-sm-3'>
          <i class="bi bi-clock" style={{ fontSize: '40px', color: 'rgb(6, 136, 250)' }}></i>
          <h4 style={{ color: 'crimson' }}>Our Timings</h4>
          <h6 style={{ color: 'rgb(6, 136, 250)', textAlign: 'center' }}>Mon-Sun:10.00 AM-07.00 PM</h6>

        </div>

      </div>
    </div>
  )
}
