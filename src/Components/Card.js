import React from 'react'


const Cards =(props)=>{
    return(
        <div>
            <h1>{props.value}</h1>
            <h3>{props.id}</h3>
        </div>
    )
}

export default Cards;