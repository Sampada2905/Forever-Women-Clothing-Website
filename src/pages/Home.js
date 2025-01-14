import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import styles from '../components/Card.module.css'


export default function Home() {
  return (
    <div className='container-fluid'>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="banner1.jpg" className="d-block w-100" alt="..." style={{ height: '500px' }} />
          </div>
          <div className="carousel-item">
            <img src="banner2.jpg" className="d-block w-100" alt="..." style={{ height: '500px' }} />
          </div>
          <div className="carousel-item">
            <img src="banner3.jpg" className="d-block w-100" alt="..." style={{ height: '500px' }} />
          </div>
          <div className="carousel-item">
            <img src="banner5.webp" className="d-block w-100" alt="..." style={{ height: '500px' }} />
          </div>
          <div className="carousel-item">
            <img src="banner6.webp" className="d-block w-100" alt="..." style={{ height: '500px' }} />
          </div>
          <div className="carousel-item">
            <img src="banner7.webp" className="d-block w-100" alt="..." style={{ height: '500px' }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br /><br />
      <h1 align='text-center' style={{ color: 'crimson' }}>The Latest Collection</h1>
      <h5 align='text-center' style={{ color: ' rgb(23, 133, 230)' }}>-our fresh arrivals-</h5>
      <div className='row'>
        <div className='col-sm-5' id={styles.column}><Link to='/lehengas'><img src='fa3.webp' alt='' style={{ height: '300px', width: '100%' }} /></Link></div>
        <div className='col-sm-7' id={styles.column}><Link to='/sarees'><img src='fa1.jpg' alt='' style={{ height: '300px', width: '100%' }} /></Link></div>
      </div>
      <br />
      <div className='row'>
        <div className='col-sm-7' id={styles.column}><Link to='/kurtasets'><img src='fa6.webp' alt='' style={{ height: '300px', width: '100%' }} /></Link></div>
        <div className='col-sm-5' id={styles.column}><Link to='/coords'><img src='fa7.jpeg' alt='' style={{ height: '300px', width: '100%' }} /></Link></div>
      </div>
      <br /><br />
      <h1 align='text-center' style={{ color: 'crimson' }}>Our Bestsellers</h1>
      <h5 align='text-center' style={{ color: ' rgb(23, 133, 230)' }}>Shop the Most Popular Styles</h5>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className={styles.row}>
              <div className={styles.column}>
                <Card />
              </div>

              <div className={styles.column}>
                <Card />
              </div>

              <div className={styles.column}>
                <Card />
              </div>

              <div className={styles.column}>
                <Card />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className={styles.row}>
              <div className={styles.column}>
                <Card />
              </div>

              <div className={styles.column}>
                <Card />
              </div>

              <div className={styles.column}>
                <Card />
              </div>

              <div className={styles.column}>
                <Card />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className={styles.row}>
              <div className={styles.column}>
                <Card />
              </div>

              <div className={styles.column}>
                <Card />
              </div>

              <div className={styles.column}>
                <Card />
              </div>

              <div className={styles.column}>
                <Card />
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br /><br />
      <h1 align='text-center' style={{ color: 'crimson' }}>Our Policies</h1>
      <div className='row'>
        <div className='col-sm-4' id={styles.column}> 
          <img src='exchange_icon.png' alt='' style={{height:'50px'}}/>
          <h5 style={{ color: 'rgb(23, 133, 230)' }}>Easy Exchange Policy</h5>
          <h6 style={{color:'rgb(242, 18, 111)'}}>We offer hassle free exchange policy</h6>
        </div>
        <div className='col-sm-4' id={styles.column}>
        <img src='quality_icon.png' alt=''  style={{height:'50px'}}/>
        <h5 style={{ color: 'rgb(23, 133, 230)' }}>7 Days Return Policy</h5>
        <h6 style={{color:'rgb(242, 18, 111)'}}>We provide 7 days free return policy</h6>
        </div>
        <div className='col-sm-4'id={styles.column}>
        <img src='support_img.png' alt=''  style={{height:'50px'}}/>
        <h5 style={{ color: 'rgb(23, 133, 230)' }}>Best Customer Support</h5>
        <h6 style={{color:'rgb(242, 18, 111)'}}>We provide 24/7 customer support</h6>
        </div>
      </div>
      <br /><br />
    </div>
  )
}
