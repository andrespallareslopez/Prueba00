import React,{useEffect} from 'react'
import IMask from 'imask'
//import Inputmask from 'inputmask'
import {UXValidation} from '../../src/componentsImports/UXValidation.js'
import {MyInputTemplate} from '../../src/WebComponents/MyInputTemplate.js'

export const MyInputDecimal = (props) => {
    useEffect(()=>{
      new UXValidation(props,({selectorInput})=>{
        //console.log("estoy dentro uxvalidation");
        let scale=0;
        if (props.scale)
            scale=props.scale;
   
        IMask(selectorInput,{
           mask: Number,  // enable number mask
   
           // other options are optional with defaults below
           scale: scale,  // digits after point, 0 for integers
           signed: false,  // disallow negative
           thousandsSeparator: '',  // any single char
           padFractionalZeros: true,  // if true, then pads zeros at end to the length of scale
           normalizeZeros: true,  // appends or removes zeros at ends
           radix: ',',  // fractional delimiter
           mapToRadix: ['.']  // symbols to process as radix
        });
     });
     
     
     //Inputmask("decimal").mask(selectorInput);
     //Inputmask({mask:"999[.99]",greedy:false}).mask(selectorInput);
    },[]);
     
     return (
       <MyInputTemplate {...props} />
       /*
       <div id={props.id}>
         <div className="group group-block" >
           <div className="label-help">
             <span className="logo fa fa-question-circle fa-2x"></span>
             <span className="text">{props.msgText}</span>
           </div>
           <div className="label-input" >
             <span className="logo fa fa-tag fa-2x" ></span>
             <input type="text" name={props.name} placeholder={props.msgPlaceHolder} className="input" />
           </div>
           <div className="label-warning" >
             <span className="logo fa fa-warning fa-2x" ></span>
             <span className="text">{props.msgWarning}</span>
           </div>                                             
         </div>
       </div>
     */
     )
 }