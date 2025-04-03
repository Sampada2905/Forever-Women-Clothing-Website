import React from 'react'

export default function Ordertable(props) {
    return (
        <div>
            <table class="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Size</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.image}</td>
                        <td>{props.name}</td>
                        <td>{props.price}</td>
                        <td>{props.size}</td>
                        <td>{props.quantity}</td>
                        <td>{props.totalprice}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
