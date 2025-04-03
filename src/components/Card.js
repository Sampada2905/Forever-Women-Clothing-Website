import React from 'react'
import styles from './Card.module.css'
export default function Card(props){
    return (
        <div className='img-thumbnail' id={styles.img} >
             <img src={'http://localhost:6060/'+props.image}  alt="..." style={{width:'200px',height:'250px'}}/>
             <br/>
             <h6 style={{color:'crimson',textAlign:'left'}}>{props.name}</h6>
             <h6 style={{color:'rgb(23, 133, 230)',textAlign:'left'}}>{props.price}</h6>
             
        </div>
       
    )
}
