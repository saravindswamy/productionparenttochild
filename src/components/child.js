import React from 'react'
import './style.css'

export default function Child({data,changetitle}) {
    return(
        <div className="child">
            <h2 style={{color:'blueviolet'}}>{data}</h2>
            <h1>Child</h1>
            <button onClick={() => changetitle('Lets code tamil')}>Click me!</button>
        </div>
    )
}