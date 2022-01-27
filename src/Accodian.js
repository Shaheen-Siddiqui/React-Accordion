import React, { useState } from "react";
import {Arrays} from "./Array";
import MyAccordian from './MyAccordian';

const Accodian = () => {
  let [Arraydata, setArrayData] = useState(Arrays);
  return (<>
  
  <section className="section">
  <h3 className="alert-dark" >Accordion</h3>
{
    Arraydata.map((ArrayValue,id)=>{
        return <MyAccordian key={id} {...ArrayValue}  />
    })
}
</section>

        </>)
};
export default Accodian;

