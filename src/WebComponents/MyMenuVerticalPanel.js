import React,{useEffect} from 'react'
import {Link} from 'gatsby'

import $ from './import-jquery.js'

import {UXMenuPanel} from '../../src/componentsImports/UXMenuPanel.js'
import {UXLoadPanel} from '../../src/componentsImports/UXLoadPanel.js'





import '../../src/components/menu-vertical/03Menu-vertical-04/03Menu-vertical-04.css';


export const MyMenuVerticalPanel = (props) => {
    
    useEffect(()=>{
        var id=props.id;
        new UXMenuPanel(
            {id:id,
             onClickMenu:function(e){
               console.log('Estoy en onClickMenu')
               e.preventDefault()
               console.log($(e.target).data("panel-id"))
               console.log("estoy dentro de onclickmenu personalizada")
               var id=$(e.target).data("panel-id")
               var template;
                switch(id){
                    case 'template01':
                   
                    break;
                    case 'template02':
                  
                    break;
                    case 'template03':
                   
                    break;
                    case 'template04':
                  
                    break;
                    case 'template05':
                  
                    break;
                    case 'template06':
                    template = '<my-page-collection-01 id="template06"></my-page-collection-01>'
                    break;
                    case 'template07':
                    template = '<my-page-form-01 id="template07" ></my-page-form-01>'
                    break;
                    case 'template08':
                    template  = '<my-page-search-01 id="template08" ></my-page-search-01>'
                    break;
                    case 'template09':
                        template  = '<my-page-load-spinner-01 id="template09" ></my-page-load-spinner-search-01>'
                    break;
                    case 'template10':
        
                    break;
        
                }
            }
        })
    
    },[]);
    
    return (
        <ul className="menu-vertical-04">
                <li className="parent element pr"><a className="element-link gr menu text ripple" href="#" >Link 1<span className="fa fa-chevron-right push-float-right" ></span></a>
                    <ul className="sub-menu sb" >
                        <li className="" ><a className="back-element" href="#" ><span className="fa fa-chevron-left push-float-left" ></span><span className="text-back" > Back</span></a></li>
                        <li className="" ><a className="element-link el ripple" href="#/controller/action1" data-panel-id="template01" >SubLink 1</a></li>
                        <li className="" ><a className="element-link el ripple" href="#/controller/action2" data-panel-id="template02" >SubLink 2</a></li>
                        <li className="" ><a className="element-link el ripple" href="#/controller/action3" data-panel-id="template03" >SubLink 3</a></li>
                        <li className=""><a className="element-link el ripple" href="#/controller/action4" data-panel-id="template04" >SubLink 4</a></li>
                        <li className=""><a className="element-link el ripple" href="#/controller/action5" data-panel-id="template05" >SubLink 5</a></li>     
                    </ul>  
                    
                </li>
                <li className="parent element pr" ><a className="element-link gr menu text ripple" href="#">Link 2<span className="fa fa-chevron-right push-float-right" ></span></a>
                    <ul className="sub-menu sb" >
                       <li className=""><a className="back-element" href="#" ><span className="fa fa-chevron-left push-float-left" ></span><span className="text-back" > Back</span></a></li>
                       <li className=""><a className="element-link el ripple" href="#/controller2/action1" data-panel-id="template06" >SubLink 11</a></li>
                       <li className=""><a className="element-link el ripple" href="#/controller2/action2"  data-panel-id="template07" >SubLink 22</a></li>
                       <li className=""><a className="element-link el ripple" href="#/controller2/action3"  data-panel-id="template08" >SubLink 33</a></li>
                       <li className=""><a className="element-link el ripple" href="#/controller2/action4"  data-panel-id="template09" >SubLink 44</a></li>
                       <li className=""><a className="element-link el ripple" href="#/controller2/action5"  data-panel-id="template10" >SubLink 55</a></li>
                    </ul>
                    
                </li>
                <li className="element no-pr" ><a className="element-link gr menu text ripple" href="#/controller/action3">Link 3
                  
                </a>
                </li>
                <li className="parent element pr" ><a className="element-link gr menu text ripple" href="#">Link 4<span className="fa fa-chevron-right push-float-right" ></span></a>
                    <ul className="sub-menu sb" >
                       <li className=""><a className="back-element" href="#" ><span className="fa fa-chevron-left push-float-left" ></span><span className="text-back" > Back</span></a></li>
                       <li className=""><a className="element-link el ripple" href="#" >SubLinkd 1</a></li>
                       <li className=""><a className="element-link el ripple" href="#" >SubLinkd 2</a></li>
                       <li className=""><a className="element-link el ripple" href="#" >SubLinkd 3</a></li>
                       <li className=""><a className="element-link el ripple" href="#" >SubLinkd 4</a></li>
                       <li className=""><a className="element-link el ripple" href="#" >SubLinkd 5</a></li>
                    </ul> 
                    
                </li>
            </ul>
        
        
        
    )
    
    
}

export default MyMenuVerticalPanel;

