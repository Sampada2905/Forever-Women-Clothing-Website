import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import styles from './Navbar.module.css';
import axios from 'axios';

export default function Signup() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var [name, setName] = useState('')
    var [city, setCity] = useState('')
    var [contact, setContact] = useState('')
    var [email, setEmail] = useState('')
    var [password, setPassword] = useState('')
    var [errors, setErrors] = useState({})
    function validateform() {
        var newerrors = {}
        if (name.trim() === "") {
            newerrors.name = "Name Can not be blank"
        }
        else if (!name.match(/^[a-z A-Z]+$/)) {
            newerrors.name = "Invalid name"
        }
       
        if (city.trim() === ""){
            newerrors.city = "City can not be blank"
        }
        else if (!city.match(/^[a-zA-Z]+$/)) {
            newerrors.city = "Invalid city"
        }    

        if (contact.trim() === "") {
            newerrors.contact = "Contact Can not be blank"
        }
        else if (!contact.match(/^[6-9][0-9]{9}$/)) {
            newerrors.contact = "Invalid contact"
        }

        if (email.trim() === "")
            newerrors.email = "Email is required"
        else if (!email.match(/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/))
            newerrors.email = "Invalid emailid"

        if (password.trim() === "")
            newerrors.password = "Password is required"
        else if (!password.match(/^[a-zA-Z0-9!@#$]{8,16}$/))
            newerrors.password = "Invalid password"

        return newerrors
    }

    function handleSubmit(e) {
        e.preventDefault();
        var er = validateform()
        if (Object.keys(er).length > 0) {
            setErrors(er)
            alert("Please fill valid details")
        }
        else{
            axios.post('http://localhost:6060/createuser', {
                name:name,
                city:city,
                contact:contact,
                email:email,
                password:password
            }).then((response)=>{
                var msg=response.data["message"]
                alert(msg)
                 window.location='/'
            })
        }    
}

return (
    <div>
        <button type="button" className="btn" id={styles.btnsign} onClick={handleShow} ><i className="bi bi-person-circle" style={{ fontSize: '20px'}}></i> Signup</button>

        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton style={{backgroundColor:'rgb(128, 214, 242)'}}>
                <Modal.Title style={{color:'rgb(5, 7, 98)',fontSize:'30px'}}>Signup</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor:'rgb(128, 214, 242)'}}>
                <Form method='post' >
                    <div className="mb-3">
                        <label for="nm" className="form-label" style={{color:'crimson',fontSize:'large',fontWeight:'600'}}>Name:</label>
                        <input type="text" className="form-control" id="nm"  placeholder='Enter name' value={name} onChange={(e)=>{setName(e.target.value)}} />
                        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                    </div>
                    <div className="mb-3">
                        <label for="city" className="form-label" style={{color:'crimson',fontSize:'large',fontWeight:'600'}}>City:</label>
                        <input type="text" className="form-control" id="city" placeholder='Enter city' value={city} onChange={(e)=>{setCity(e.target.value)}} />
                        {errors.city && <span style={{ color: 'red' }}>{errors.city}</span>}
                    </div>
                    <div className="mb-3">
                        <label for="contact" className="form-label" style={{color:'crimson',fontSize:'large',fontWeight:'600'}}>Contact No:</label>
                        <input type="Number" className="form-control" id="contact" placeholder='Enter contact no' value={contact} onChange={(e)=>{setContact(e.target.value)}} />
                        {errors.contact && <span style={{ color: 'red' }}>{errors.contact}</span>}
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label" style={{color:'crimson',fontSize:'large',fontWeight:'600'}}>Email address</label>
                        <input type="email" className="form-control" id="email" placeholder='Enter email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label" style={{color:'crimson',fontSize:'large',fontWeight:'600'}}>Password</label>
                        <input type="password" className="form-control" id="password" placeholder='Enter password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                        {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                    </div>

                    <button type="submit" className="btn" style={{backgroundColor:'rgb(233, 61, 121)',color:'white'}} onClick={handleSubmit}>Submit</button>

                </Form>
            </Modal.Body>
            <Modal.Footer style={{backgroundColor:'rgb(128, 214, 242)'}}>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>

            </Modal.Footer>
        </Modal>
    </div>
)
}
