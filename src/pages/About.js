import React from 'react'

export default function About() {
  return (
    <div className='container-fluid'>
        <h1 className='text-center' style={{color:'crimson'}}>About Us</h1>
        <div className='row'>
          <div className='col-sm-6'>
            <img src='banner8.jpg' alt=''style={{width:'100%',height:'430px'}}/>
          </div>
          <div className='col-sm-6'>
            <p style={{fontSize:'20px',textAlign:'justify',color:'rgb(6, 136, 250)'}}>
              Forever was born out of a passion for innovation and a desire to revolutionaize the way
              people shop online.Our journey began with a simple idea to provide a platform where customers
              can easily discover,explore,and purchase a wide range of products from the comfort of their 
              homes.
              Since our inception,we've worked tirelessly to curate a diverse selection of high quality
              products that cater to every taste and preferences.We offer an extensive collection sourced 
              from trusted brands and suppliers.
            </p>
            <br/>
            <p style={{fontSize:'20px',textAlign:'justify',color:'rgb(6, 136, 250)'}}>
            <h5 style={{color:'crimson'}}><u>Our Mission</u></h5> 
            Our Mission at forever is to empower customers with choice,convenience,and confidence.
            We're dedicated to providing a seamless shopping experience that exceeds expectations,from
            browsing and ordering to delivery and beyond.  
            </p>
             
          </div>

        </div>
        <br/><br/>
    </div>
  )
}
