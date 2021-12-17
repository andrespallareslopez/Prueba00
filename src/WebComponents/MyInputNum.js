import React,{useEffect} from 'react'
import IMask from 'imask'
//import Inputmask from 'inputmask'
import {UXValidation} from '../../src/componentsImports/UXValidation.js'
import {MyInputTemplate} from '../../src/WebComponents/MyInputTemplate.js'

export const MyInputNum = (props) => {
   useEffect(()=>{
    new UXValidation(props,({selectorInput})=>{
       //console.log("estoy dentro uxvalidation");
       IMask(selectorInput,{mask:/^[0-9]*$/});
    },function(){
      //alert('Estoy aqui')
      

    });
    //Inputmask({ regex: "\\d*" }).mask(selectorInput);
  //IMask(selectorInput,{mask:/^[0-9]*$/});
   },[]);
    
    return (
      <MyInputTemplate {...props} />

     
    )
}

