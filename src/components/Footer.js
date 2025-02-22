import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>

      <footer className="text-center text-lg-start  text-muted" style={{backgroundColor:'rgb(127, 182, 230)'}}>

        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

          <div className="me-5 d-none d-lg-block" style={{color:'crimson',fontWeight:'bold'}}>
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <Link to='/' className="me-4 text-reset">
              <i class="bi bi-facebook" style={{color:'crimson',fontSize:'20px'}}></i>
            </Link>
            <Link to='/' className="me-4 text-reset">
              <i class="bi bi-twitter" style={{color:'crimson',fontSize:'20px'}}></i>
            </Link>
            <Link to='/' className="me-4 text-reset">
              <i class="bi bi-instagram" style={{color:'crimson',fontSize:'20px'}}></i>
            </Link>
          </div>

        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">

            <div className="row mt-3">

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4" style={{color:'crimson'}}>
                  <i className="fas fa-gem me-3"></i>Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4" style={{color:'crimson'}}>
                  Products
                </h6>
                <p>
                  <Link to='/' className="text-reset">Angular</Link>
                </p>
                <p>
                  <Link to='/' className="text-reset">React</Link>
                </p>
                <p>
                  <Link to='/' className="text-reset">Vue</Link>
                </p>
                <p>
                  <Link to='/' className="text-reset">Laravel</Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4" style={{color:'crimson'}}>
                  Useful links
                </h6>
                <p>
                  <Link to='/' className="text-reset">Pricing</Link>
                </p>
                <p>
                  <Link to='/' className="text-reset">Settings</Link>
                </p>
                <p>
                  <Link to='/' className="text-reset">Orders</Link>
                </p>
                <p>
                  <Link to='/' className="text-reset">Help</Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="text-uppercase fw-bold mb-4" style={{color:'crimson'}}>Contact</h6>
                <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
              </div>

            </div>

          </div>
        </section>



        <div className="text-center p-4" style={{ backgroundColor: ' rgba(0, 0, 0, 0.05)',color:'crimson' }}>
          © 2021 Copyright:
          <Link className="text-reset fw-bold" to="https://mdbootstrap.com/">MDBootstrap.com</Link>
        </div>

      </footer>

    </div>
  )
}
