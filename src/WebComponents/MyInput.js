import React,{useEffect,useState} from 'react'

import {MyInputTemplate} from '../../src/WebComponents/MyInputTemplate.js'

import {UXValidation} from '../../src/componentsImports/UXValidation.js'

export const MyInput = (props) => {
    const [warnings,setWarnings] = useState([]);
    useEffect(()=>{
      new UXValidation(props,({selectorInput,selectorWarnings})=>{
        console.dir(selectorWarnings);
        setWarnings(selectorWarnings);
        //console.log("estoy dentro uxvalidation");
        //IMask(selectorInput,{mask:/^[0-9]*$/});
     },function(){
       //alert('Estoy aqui')
       
     });

    },[]);
    
    return (
      <MyInputTemplate {...props} warnings={warnings} />
   
    )
}

export default MyInput;