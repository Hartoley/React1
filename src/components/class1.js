import React from "react";
import './class1.css'



export const Body1= ()=>{
    return(
        <>
            <main className="main1">
                
            </main>
            <div className="box">
                <div className="study">
                    <h1 className="studyto">Study to become a global talent</h1>
                    <p className="learn">Learn new tech skills using a world-class curriculum 
                    <br></br> from top industry experts in an accredited institution.</p>
                    <button className="start">Start Now</button>
                </div>
                <img className="img1" src={require('./pic 1.png')} alt="" />
            </div>
        
        
        </>
    )
}

export default Body1;