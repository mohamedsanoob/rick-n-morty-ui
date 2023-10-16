import React, { useState } from 'react'
import './ShowDetails.css'

const ShowDetails = ({ item }) => {
    const [show, setShow] = useState(false);

    return (
        <div className='show-details'>
            <div className="button">
                <button onClick={() => setShow(!show)}>
                    {show ? "Close" : "View"}
                </button>
            </div>
            {show &&
                <div className='details'>
                    <p>Gender : {item.gender}</p>
                    <p>Status : {item.status}</p>
                    <p>Species : {item.species}</p>
                </div>
            }
        </div>
    )
}

export default ShowDetails