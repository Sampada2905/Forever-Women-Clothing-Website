import React from 'react'
import { Link } from 'react-router-dom'


export default function Card() {
    return (
        <div>
            <div class="card">
                <img src="bs1.avif" class="card-img-top" alt="..." style={{height:'250px'}} />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">card's content.</p>
                    <Link to="/" class="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
        </div>
    )
}
