import React from "react";
import './class2.css'

export const Body2= ()=>{
    return(
        <>
        <h1 className="here">Start here. Change the world.</h1>
         <div className="images">
        <div className="student">
            <img className="img2" src={require('./pic 2.jpg')} alt="" />
        </div>
        <div className="student">
            <img className="img2" src={require('./pic 3.jpg')} alt="" />
        </div>
        <div className="student">
            <img className="img2" src={require('./certificate.jpg')} alt="" />
        </div>
         
         
         </div>
        
        
        </>
    )
}

export default Body2;