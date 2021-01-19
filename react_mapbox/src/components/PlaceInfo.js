import React from 'react'
import './css/placeInfo.css'
const PlaceInfo = (props) => {
    return (
        <div className="div">
            <h3 className="h3">{props.name}</h3>
            <p className="p">{props.comments}</p>
        </div>
    )
}

export default PlaceInfo
