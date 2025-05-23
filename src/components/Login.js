import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import Signup from './Signup';
import axios from 'axios';


export default function Login() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var[email,setEmail]=useState('')
    var[password,setPassword]=useState('')
     var [errors, setErrors] = useState({})
        function validateform() {
            var newerrors = {}
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
            axios.get('http://localhost:6060/userlogin/'+ email +"/"+ password ).then((response)=>{
                if(response.data.length > 0){ 
                    alert("Login Successful")
                    localStorage.setItem("emailid",email)
                    localStorage.setItem("menutype","user")
                    window.location="/"
                }
                else
                   alert("Invalid email or password")  
            })
        }     
}
    return (
        <div>
            <Link><button type="button" className="btn" onClick={handleShow} id={styles.btnsearch} ><i className="bi bi-box-arrow-right" style={{ fontSize: '20px' }}></i> Login</button></Link>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton style={{backgroundColor:'rgb(128, 214, 242)'}}>
                    <Modal.Title style={{color:'rgb(5, 7, 98)',fontSize:'30px'}}>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body  style={{backgroundColor:'rgb(128, 214, 242)'}}>
                    <Form>
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
                        <button type="button" className="btn" style={{backgroundColor:'rgb(233, 61, 121)',color:'white'}} onClick={handleSubmit}>Submit</button>

                    </Form>
                </Modal.Body>
                <Modal.Footer style={{backgroundColor:'rgb(128, 214, 242)'}}>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Link to='/signup'><Signup/></Link>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
