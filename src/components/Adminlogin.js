import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Adminlogin() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var[email,setEmail]=useState('')
    var[password,setPassword]=useState('')

    function handleSubmit(e) {
        e.preventDefault();
        axios.get('http://localhost:6060/adminlogin/'+ email +"/"+ password ).then((response)=>{
            if(response.data.length > 0){
                alert("Login Successful")
                localStorage.setItem("aemailid",email)
                localStorage.setItem("menutype","admin")
                window.location="/"
            }
            else
               alert("problem occured")  
        })
        
}
    return (
        <div>
            <Link><button type="button" className="btn" onClick={handleShow} id={styles.btnsearch} ><i className="bi bi-person-square" style={{ fontSize: '20px' }}></i> Adminlogin</button></Link>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton style={{backgroundColor:'rgb(128, 214, 242)'}}>
                    <Modal.Title  style={{color:'rgb(5, 7, 98)',fontSize:'30px'}}>Admin Login</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{backgroundColor:'rgb(128, 214, 242)'}}>
                    <Form>
                        <div className="mb-3">
                            <label for="email" className="form-label" style={{color:'crimson',fontSize:'large',fontWeight:'600'}}>Email address</label>
                            <input type="email" className="form-control" id="email" placeholder='Enter email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label" style={{color:'crimson',fontSize:'large',fontWeight:'600'}}>Password</label>
                            <input type="password" className="form-control" id="password" placeholder='Enter password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                        </div>
                        <button type="button" className="btn" style={{backgroundColor:'rgb(233, 61, 121)',color:'white'}} onClick={handleSubmit}>Submit</button>

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
