import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import Footer from './Footer'
import Login from './Login'
import Adminlogin from './Adminlogin'
import axios from 'axios'


export default function Navbar() {
   var [count,setCount] = useState('')
   var [searchterm,setSearchterm] = useState("")
   const navigate = useNavigate()
     function getCount(){
       axios.get("http://localhost:6060/getcountcartitems/" + em).then((response) => {
         setCount(response.data)
       }) 
     }
     useEffect(() => {
         getCount()
     
       })
       function handleSubmit(e){
        e.preventDefault()
        navigate(`/search/${searchterm}`)
        setSearchterm("")
        
       }
  var em = localStorage.getItem("emailid")
  var mt = localStorage.getItem("menutype")
  var isLoggedIn = false;
  if (em == null) {
    let aem = localStorage.getItem("aemailid")
    if (aem == null)
      isLoggedIn = false
    else
      isLoggedIn = true
  }
  else
    isLoggedIn = true

  if (!isLoggedIn) {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to='/'><img src='logo.png' alt='' style={{ height: '50px', marginLeft: '10px' }} /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ textAlign: 'left' }}>
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" id={styles.navlink} aria-current="page" to='/'>Home</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" id={styles.navlink} to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Collection
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" id={styles.navdropdown} to='/kurtasets'>Kurta Sets</Link></li>
                    <li><Link className="dropdown-item" id={styles.navdropdown} to='/kurtis'>Kurtis</Link></li>
                    <li><Link className="dropdown-item" id={styles.navdropdown} to='/sarees'>Sarees</Link></li>
                    <li><Link className="dropdown-item" id={styles.navdropdown} to='/coords'>Co-ords Sets</Link></li>
                    <li><Link className="dropdown-item" id={styles.navdropdown} to='/lehengas'>Lehengas</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id={styles.navlink} to='/about'>About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id={styles.navlink} to='/contact'>Contact</Link>
                </li>
                <form className="d-flex" onSubmit={handleSubmit}>
                  <input className="form-control me-2" type="search" value={searchterm} onChange={(e)=>setSearchterm(e.target.value)} placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-primary" id={styles.btnsearch} type="submit">Search</button>
                </form>
              </ul>
              <ul className='navbar-nav'>
                <li><Link className='nav-link' to='/login'><Login /></Link></li>
                <li><Link className='nav-link' to='/adminlogin'><Adminlogin /></Link></li>
                <li><Link className='nav-link' to='/cart'><i className="bi bi-bag-heart-fill" style={{ fontSize: '25px', color: 'crimson', position: 'relative' }}>
                  <span class="position-absolute translate-middle badge" style={{ fontSize: '15px', borderRadius: '50%', backgroundColor: 'rgb(23, 133, 230)', color: 'white' }}>
                    0
                  </span>
                </i></Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
        <Footer />
      </div>
    )
  }
  else if (mt === "user") {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to='/'><img src='logo.png' alt='' style={{ height: '50px', marginLeft: '10px' }} /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ textAlign: 'left' }}>
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" id={styles.navlink} aria-current="page" to='/'>Home</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" id={styles.navlink} to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Collection
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" id={styles.navdropdown} to='/kurtasets'>Kurta Sets</Link></li>
                    <li><Link className="dropdown-item" id={styles.navdropdown} to='/kurtis'>Kurtis</Link></li>
                    <li><Link className="dropdown-item" id={styles.navdropdown} to='/sarees'>Sarees</Link></li>
                    <li><Link className="dropdown-item" id={styles.navdropdown} to='/coords'>Co-ords Sets</Link></li>
                    <li><Link className="dropdown-item" id={styles.navdropdown} to='/lehengas'>Lehengas</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id={styles.navlink} to='/about'>About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id={styles.navlink} to='/contact'>Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id={styles.navlink} to='/orderhistory'>My Orders</Link>
                </li>
                <form className="d-flex" onSubmit={handleSubmit}>
                  <input className="form-control me-2" type="search" value={searchterm} onChange={(e)=>setSearchterm(e.target.value)} placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-primary" id={styles.btnsearch} type="submit">Search</button>
                </form>
              </ul>
              <ul className='navbar-nav'>
                <li><button type="button" className="btn" onClick={logout} id={styles.btnsearch} ><i className="bi bi-box-arrow-left" style={{ fontSize: '20px' }}></i> Logout</button></li>
                <li><Link className='nav-link' to='/cart'><i className="bi bi-bag-heart-fill" style={{ fontSize: '25px', color: 'crimson', position: 'relative' }}>
                  <span class="position-absolute translate-middle badge" style={{ fontSize: '15px', borderRadius: '50%', backgroundColor: 'rgb(23, 133, 230)', color: 'white' }}>
                    {count}
                  </span>
                </i></Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
        <Footer />
      </div>
    )
  }
  else if (mt === "admin") {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to='/'><img src='logo.png' alt='' style={{ height: '50px', marginLeft: '10px' }} /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ textAlign: 'left' }}>
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" id={styles.navlink} to='/addproducts'>Add Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id={styles.navlink} to='/listproducts'>List Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id={styles.navlink} to='/vieworders'>Manage Orders</Link>
                </li>
              </ul>
              <ul className='navbar-nav'>
                <li><button type="button" className="btn" onClick={alogout} id={styles.btnsearch} ><i className="bi bi-box-arrow-left" style={{ fontSize: '20px' }}></i> Logout</button></li>
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
        <Footer />
      </div>
    )
  }
}
function logout() {
  localStorage.removeItem("emailid")
  localStorage.setItem("menutype", "guest")
  window.location = "/"
}
function alogout() {
  localStorage.removeItem("aemailid")
  localStorage.setItem("menutype", "guest")
  window.location = "/"
}