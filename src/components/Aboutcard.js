import React from 'react'
import styles from './Aboutcard.module.css'

export default function Aboutcard(props) {
  return (
    <div>
        <div className='card' id={styles.card}>
            <div className="card-body">
              <h5 className="card-title" id={styles.cardtitle}>{props.title}</h5>
              <p className="card-text">{props.description}</p>
              
            </div>
          </div>
    </div>
  )
}
