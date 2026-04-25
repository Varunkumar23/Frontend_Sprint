import React, { useEffect } from 'react'

const Child = () => {
useEffect(()=>{
    console.log("useEffect Executed!");

    let interval=setInterval(()=>{
        console.log("running.............");
        
    },1000);

    return ()=>{
        console.log("cleanup called");
        clearInterval(interval);
        
    }
    
},[]);

  return (
    <div>
      
    </div>
  )
}

export default Child
