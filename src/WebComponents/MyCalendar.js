import React,{useEffect} from 'react'

import {UXDatePicker} from '../../src/componentsImports/UXDatePicker.js'

import '../../node_modules/pikaday/css/pikaday.css'
import '../../node_modules/tether/dist/css/tether.css'

export const MyCalendar = (props) => {
    let id=props.id
    useEffect(()=>{
      
      var calendario = new UXDatePicker({
        id:id
      })
      return ()=>{
        calendario.toggle();
        calendario.destroy();
      }
    },[])
    /*
    let timer1 = setTimeout(() => { 
     
       clearTimeout(timer1);        
    }, 450);
    */ 
    return (
      <div id={props.id} >
      <div className="group group-block">
        <div className="label-help">
          <span className="logo fa fa-question-circle fa-2x"></span>
          <span className="text">{props.msgText}</span>
        </div>
        <div className="label-input">
          <span className="logo fa fa-tag fa-2x"></span>
           <input id="fecha" autoComplete="off" diabled={ (props.disabled && props.disabled===true) ? true : false} data-inputmask="'alias':'date','placeholder':'_'"  className="input medium" type="text" placeholder="" />
          <button id="btn-fecha" className="list-button"><span className="fa fa-calendar"></span></button>
        </div>
      </div>
      </div>
    )    
}


export default MyCalendar;