import React from "react";
import ReactPlayer from "react-player"
const Cards = (props) => {

    return(
        <div className = {'Cards '  + props.color}>
            <ReactPlayer
                url={props.video}
                controls = 'true'
                width = '320px'
                height = '180px'
            />
            <h4>{props.song}</h4>
            <h5>{props.details}</h5>
            <a href={props.website} target="_blank" rel="noopener noreferrer">
                <button>Learn More</button>
            </a>
        </div>
    )
}
export default Cards;