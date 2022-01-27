import React, { useState } from 'react';

const MyAccordian=({question,answer})=>{
    let [show,setShow]=useState(false)
    return(<>
        <div className="top-div">
        <div className="IconZone" onClick={(()=>{  
            setShow(!show)
        })} >
        {
            show? <i class="fa fa-minus-circle"></i>: <i class="fa fa-plus-circle"></i>
        }
          </div>
            <div className="questionZone">{question} </div>
            </div>
            {
            show  &&  <p className="IconZone2 answer">
            <i className="fa fa-quote-left">
            {answer}</i></p>
            }
            </>)
}

export default MyAccordian