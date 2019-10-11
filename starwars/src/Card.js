import React from "react";

const Card = props => {
    return(
        <div>
            {props.characters.map((data) => {
                return(
                    <h2>{data.name}</h2>
                )
                })}
        </div>
    )
}
export default Card;