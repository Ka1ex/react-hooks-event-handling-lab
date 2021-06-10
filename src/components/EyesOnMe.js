// Code EyesOnMe Component Here
import React from 'react'

let EyesOnMe = () => {
    
    let good = () =>{
        console.log('Good!')
    }
    let hey = () => {
        console.log('Hey! Eyes on me!')
    }

    return(
        <button 
        onBlur= {() => console.log('Hey! Eyes on me!')} 
        onFocus= {() => console.log('Good!')}>Eyes on me</button>
   )
}

export default EyesOnMe