import React,{useEffect} from 'react';
import IMask from 'imask';
//import Inputmask from 'inputmask'
import {UXValidation} from '../../src/componentsImports/UXValidation.js'
import {MyInputTemplate} from '../../src/WebComponents/MyInputTemplate.js'

export const MyInputCurrency = (props) => {
    
    useEffect(()=>{
      new UXValidation(props,({selectorInput})=>{
        //console.log("estoy dentro uxvalidation");
        let scale=0;
        if (props.scale)
            scale=props.scale;
        
        IMask(selectorInput, {
            mask: Number,  // enable number mask
          
            // other options are optional with defaults below
            scale: scale,  // digits after point, 0 for integers
            signed: false,  // disallow negative
            thousandsSeparator: '.',  // any single char
            padFractionalZeros: true,  // if true, then pads zeros at end to the length of scale
            normalizeZeros: true,  // appends or removes zeros at ends
            radix: ',',  // fractional delimiter
            mapToRadix: ['.']  // symbols to process as radix
          
            // additional number interval options (e.g.)
            //min: -10000,
            //max: 10000
          });
     });

       
        //Inputmask({ regex: "\\d*" }).mask(selectorInput);
        /*
        IMask(selectorInput,{mask:props.mask,
                             lazy:false
                            })
        */
        //Informacion de como configurar IMask
        /*https://imask.js.org/guide.html#getting-started*/
        
    },[])
     
    return (
      <MyInputTemplate {...props} />
     
      )
}

export default MyInputCurrency;