import React from 'react'
import styles from'../components/Productcard.module.css'
export default function Productcard(props) {
    return (
        <div className='column img-thumbnail' id={styles.img} >
            <img src={'http://localhost:6060/'+props.image}  alt="..." style={{width:'200px',height:'250px'}} />
            <br />
            <h6 style={{ color: 'crimson',textAlign:'left'}}>{props.name}</h6>
            <h6 style={{ color: 'rgb(23, 133, 230)',textAlign:'left' }}>{props.price}</h6>
        </div>
    )
}


