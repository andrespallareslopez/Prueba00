import React,{useEffect} from 'react'
import {UXPanelScroll} from '../../src/componentsImports/UXPanelScroll.js'

import '../../src/components/panel/04PanelScroll02.css'

export const MyPanelScrollForm = (props) => {

    useEffect(()=>{
     
        let id=props.id;
     
        const panel = new UXPanelScroll({
        id:id,
        item:".form-fix-basic-01 .group-block"
        })

        return ()=>{
           panel.destroy()
                 
        }
    },[]) 
   
    return (
      <div id={props.id} > 
      <div className="panel-scroll-01">
        <div className="panel-scroll-content">
          <div className="panel-scroll-item">
            {props.children}
          </div>
        </div>
        <button id="btn-slide-up" className="slide-button-panel top">
          <i className="fa fa-chevron-up fa-2x"></i>
        </button>
        <button id="btn-slide-down" className="slide-button-panel bottom">
          <i className="fa fa-chevron-down fa-2x"></i>
        </button>
      </div>
      </div>
    );
}