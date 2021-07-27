import React,{useState} from 'react'
import Child from './child'
import './style.css'

export default function Parent() {
    const [word,setWord] = useState('Parent')
    return(
        <div className="parent">
            <h1>{word}</h1>
            {/* <Child data="data from parent"/> */}
            <Child changetitle={text => setWord(text)} />

        </div>
    )
}