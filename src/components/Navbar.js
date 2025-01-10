import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './Navbar.module.css'
import Footer from './Footer'
import Login from './Login'
import Adminlogin from './Adminlogin'

export default function Navbar(){
  var em = localStorage.getItem("emailid")
  var mt = localStorage.getItem("menutype")
  var isLoggedIn = false;
  if(em == null){
    let aem = localStorage.getItem("aemailid")
    if(aem == null)
      isLoggedIn=false
    else
      isLoggedIn=true
  }
  else
     isLoggedIn=true
 
  if(!isLoggedIn){
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to='/'><img src='logo.png' alt='' style={{height:'50px',marginLeft:'10px'}}/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ textAlign: 'left' }}>
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" id={styles.navlink} aria-current="page" to='/'>Home</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" id={styles.navlink} to='/'  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Collection
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" id={styles.navdropdown} to='/kurtasets'>Kurta Sets</Link></li>
                    <li><Link className="dropdown-item" id={styles.navdropdown} to='/kurtis'>Kurtis</Link></li>
                    <li><Link className="dropdown-item"  id={styles.navdropdown} to='/sarees'>Sarees</Link></li>
                    <li><Link className="dropdown-item"  id={styles.navdropdown} to='/coords'>Co-ords Sets</Link></li>
                    <li><Link className="dropdown-item"  id={styles.navdropdown} to='/lehengas'>Lehengas</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id={styles.navlink} to='/about'>About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id={styles.navlink} to='/contact'>Contact</Link>
                </li>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-primary" id={styles.btnsearch} type="submit">Search</button>
                </form>
              </ul>
              <ul className='navbar-nav'>
                <li><Link className='nav-link' to='/login'><Login/></Link></li>
                <li><Link className='nav-link' to='/adminlogin'><Adminlogin/></Link></li>
                <li><Link className='nav-link' to='/cart'><i className="bi bi-bag-heart-fill" style={{ fontSize: '25px', color: 'crimson' }}></i></Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
        <Footer/>
      </div>
    )
  }
  else if(mt==="user"){
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to='/'><img src='logo.png' alt='' style={{height:'50px',marginLeft:'10px'}}/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ textAlign: 'left' }}>
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" id={styles.navlink} aria-current="page" to='/'>Home</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" id={styles.navlink} to='/'  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Collection
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" id={styles.navdropdown} to='/kurtasets'>Kurta Sets</Link></li>
                    <li><Link className="dropdown-item" id={styles.navdropdown} to='/kurtis'>Kurtis</Link></li>
                    <li><Link className="dropdown-item"  id={styles.navdropdown} to='/sarees'>Sarees</Link></li>
                    <li><Link className="dropdown-item"  id={styles.navdropdown} to='/coords'>Co-ords Sets</Link></li>
                    <li><Link className="dropdown-item"  id={styles.navdropdown} to='/lehengas'>Lehengas</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id={styles.navlink} to='/about'>About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id={styles.navlink} to='/contact'>Contact</Link>
                </li>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-primary" id={styles.btnsearch} type="submit">Search</button>
                </form>
              </ul>
              <ul className='navbar-nav'>
                <li><button type="button" className="btn" onClick={logout} id={styles.btnsearch} ><i className="bi bi-box-arrow-left" style={{ fontSize: '20px' }}></i> Logout</button></li>
                <li><Link className='nav-link' to='/cart'><i className="bi bi-bag-heart-fill" style={{ fontSize: '25px', color: 'crimson' }}></i></Link></li> 
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
        <Footer/>
      </div>
    )
  }
  else if(mt==="admin"){
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to='/'><img src='logo.png' alt='' style={{height:'50px',marginLeft:'10px'}}/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ textAlign: 'left' }}>
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" id={styles.navlink} aria-current="page" to='/'>Home</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" id={styles.navlink} to='/'  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Collection
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" id={styles.navdropdown} to='/kurtasets'>Kurta Sets</Link></li>
                    <li><Link className="dropdown-item" id={styles.navdropdown} to='/kurtis'>Kurtis</Link></li>
                    <li><Link className="dropdown-item"  id={styles.navdropdown} to='/sarees'>Sarees</Link></li>
                    <li><Link className="dropdown-item"  id={styles.navdropdown} to='/coords'>Co-ords Sets</Link></li>
                    <li><Link className="dropdown-item"  id={styles.navdropdown} to='/lehengas'>Lehengas</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id={styles.navlink} to='/about'>About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id={styles.navlink} to='/contact'>Contact</Link>
                </li>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-primary" id={styles.btnsearch} type="submit">Search</button>
                </form>
              </ul>
              <ul className='navbar-nav'>
              <li><button type="button" className="btn" onClick={alogout} id={styles.btnsearch} ><i className="bi bi-box-arrow-left" style={{ fontSize: '20px' }}></i> Logout</button></li> 
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
        <Footer/>
      </div>
    )
  }   
}
function logout(){
  localStorage.removeItem("emailid")
  localStorage.setItem("menutype","guest")
  window.location="/"
}
function alogout(){
  localStorage.removeItem("aemailid")
  localStorage.setItem("menutype","guest")
  window.location="/"
}