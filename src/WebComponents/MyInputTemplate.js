import React,{useEffect} from 'react'

import {UXValidation} from '../../src/componentsImports/UXValidation.js'

export const MyInputTemplate = (props) => {
    useEffect(()=>{
      console.dir(props);
        //new UXValidation(props);
        //console.log(props.msgWarning)
    },[]);
    return (
    <div id={props.id}>
        <div className="group group-block" >
          <div className="label-help">
            <span className="logo fa fa-question-circle fa-2x"></span>
            <span className="text">{props.msgText}</span>
          </div>
          <div className="label-input" >
            <span className="logo fa fa-tag fa-2x" ></span>
            <input  disabled={ (props.disabled && props.disabled===true) ? true : false} type="text" id={'txt'+props.id} autoComplete="off" name={props.name} placeholder={props.msgPlaceHolder} value={props.value} className="input" />
          </div>
          <div className="label-warning" style={(props.msgWarning===undefined)? {display:'none'}: {display:'block'}}>
            <span className="logo fa fa-warning fa-2x" ></span>
            <span className="text">{props.msgWarning}</span>
          </div>
          {
            props.warnings && props.warnings.length>0 && props.warnings.map(function(value,i){
              return (
                <div className="label-warning" style={(value.msgWarning===undefined)? {display:'none'}: {display:'block'}}>
                <span className="logo fa fa-warning fa-2x" ></span>
                <span className="text">{value.msgWarning}</span>
              </div>
              )
            })
          }                                                                                
        </div>
      </div>
    )
}
