import React from 'react'
// import logo from './logo.svg'
import './POPOSSpace.css';
import { Link } from 'react-router-dom'

function POPOSSpace(props) {
    const { name, image, address hours, id } = props
    return (
        <div className="POPOSSpace">
            <img
                src={`${process.env.PUBLIC_URL}images/${image}`}
                width="300"
                height="300"
                alt="50 Califonia St."
                hours="9am -5pm"
            />
            <h1>
                <Link to={`/details/${id}`}>
                    {name}
                </Link>
            </h1>
            <div>{address}</div>
        </div>
    )
}

export default POPOSSpace