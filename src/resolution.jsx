import React from 'react'
import { useState, useEffect } from 'react'


const Resolution = () => {

    
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const change = () => {
        setWidth(window.outerWidth)
        setHeight(window.outerHeight)

    }

    useEffect( () => {
        window.addEventListener('resize', change)   
    }, [])
 
  return (
    <>
        <h2>{width} * {height}</h2>
    </>
  )
}

export default Resolution