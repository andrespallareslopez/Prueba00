import React,{useEffect} from 'react'
import IMask from 'imask'
//import Inputmask from 'inputmask'
import {UXValidation} from '../../src/componentsImports/UXValidation.js'
import {MyInputTemplate} from '../../src/WebComponents/MyInputTemplate.js'

import moment from 'moment'

export const MyInputDateTime = (props) => {
   useEffect(()=>{
    new UXValidation(props,({selectorInput})=>{
      //console.log("estoy dentro uxvalidation");
      var momentFormat = 'DD/MM/YYYY HH:mm';
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
   
    //Inputmask({ regex: "\\d*" }).mask(selectorInput);
    //IMask(selectorInput,{mask:/^[0-9]*$/});
    //var momentFormat = 'YYYY/MM/DD HH:mm';
   

   
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
            <input type="text"  placeholder={props.msgPlaceHolder} className="input" />
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

export default MyInputDateTime;