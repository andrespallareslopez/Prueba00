import React,{useEffect} from 'react'
import IMask from 'imask'
//import Inputmask from 'inputmask'
import {UXValidation} from '../../src/componentsImports/UXValidation.js'
import {MyInputTemplate} from '../../src/WebComponents/MyInputTemplate.js'

import moment from 'moment'

export const MyInputDate = (props) => {
   useEffect(()=>{
    new UXValidation(props,({selectorInput})=>{
      //console.log("estoy dentro uxvalidation");
      var momentFormat = 'DD/MM/YYYY';
      var momentMask = IMask(selectorInput, {
        mask: Date,
        pattern: momentFormat,
        lazy: false,
        min: new Date(1900, 0, 1),
        max: new Date(9999, 0, 1),
      
        format: function (date) {
          return moment(date).format(momentFormat);
        },
        parse: function (str) {
          return moment(str, momentFormat);
        },
      
        blocks: {
          YYYY: {
            mask: IMask.MaskedRange,
            from: 1900,
            to: 9999
          },
          MM: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 12
          },
          DD: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 31
          },
          HH: {
            mask: IMask.MaskedRange,
            from: 0,
            to: 23
          },
          mm: {
            mask: IMask.MaskedRange,
            from: 0,
            to: 59
          }
        }
      });
      
   });
   
   },[]);
    
    return (
      <MyInputTemplate {...props} />
    
    )
}

export default MyInputDate;