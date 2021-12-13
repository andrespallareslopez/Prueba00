import React,{useEffect} from 'react'
import {Link} from 'gatsby'

import $ from './import-jquery.js'

import {UXScrollV} from '../../src/componentsImports/UXScrollV.js'
import {UXAccordeon} from '../../src/componentsImports/UXAccordeon.js'
import {UXLoadPanel} from '../../src/componentsImports/UXLoadPanel.js'

import {MyPage01} from '../../src/WebComponents/MyPage01.js'
import {MyPage02} from '../../src/WebComponents/MyPage02.js'
import {MyPage03} from '../../src/WebComponents/MyPage03.js'
import {MyPageSearch} from '../../src/WebComponents/MyPageSearch.js'
import {MyPageTable} from '../../src/WebComponents/MyPageTable.js'

import {MyPagePaginacion} from '../../src/WebComponents/MyPagePaginacion.js'

import {MyPageForm} from '../../src/WebComponents/MyPageForm.js'

import {MyTab} from '../../src/WebComponents/MyTab.js'

import MyLogin01 from '../../src/WebComponents/MyLogin01'
import MyLogin02 from '../../src/WebComponents/MyLogin02'

import '../../src/components/menu-vertical/03Menu-vertical01/03Menu-vertical01.css';
import '../../src/components/list/03List-collections.css';

export const MyMenuVertical = (props) => {
    //console.dir(props);
    useEffect(()=>{
      var id=props.id
      new UXScrollV({
          id:id
      });
      
      new UXAccordeon({
      id:id,
      onClickMenu:function(e){
          //console.log("estoy en click menu")
          e.preventDefault()
          var id=$(e.target).data("panel-id")
          var template;

          switch(id){
            case 'template01':
              console.dir(props)
               template=(props)=> (
                 <MyPage01 id={id}></MyPage01>
               )
            break;
            case 'template02':
               template=(props)=> (
                  <MyPage02 id={id}></MyPage02>
               )
            break;
            case 'template03':
                template=(props)=> (
                  <MyPage03 id={id}></MyPage03>
               )
            break;
            case 'template04':
               template=(props)=>(
                 <MyPageSearch id={id} ></MyPageSearch>
               )
            break;
            case 'template05':
               template = (props) => (
                 <MyPageTable id={id}></MyPageTable>
               )
            break;
            case 'template06':
               template=(props) =>(
                 <MyPageForm id={id} ></MyPageForm>
               )
            break;
            case 'template07':
               template =  (props) => (
                 <MyTab id={id} ></MyTab>
               )
            break;
            case 'template08':
              template =  (props) => (
                <MyPagePaginacion id={id} ></MyPagePaginacion>
              )
            break;
            case 'template09':
              template =  (props) => (
                <MyLogin01 id={id} ></MyLogin01>
              )
            break;
            case 'template10':
              template =  (props) => (
                <MyLogin02 id={id} ></MyLogin02>
              )
            break;
            case 'template11':
              var datos={
                grupos:[{codgrupo:1,description:"Bebida"},
                        {codgrupo:2,description:"Pan"},
                        {codgrupo:3,description:"Carne"},
                        {codgrupo:4,description:"Pescado"},
                        {codgrupo:5,description:"Botes"},
                        {codgrupo:6,description:"Vinos"},
                        {codgrupo:7,description:"Refrescos"},
                        {codgrupo:8,description:"Bolleria"},
                        {codgrupo:9,description:"Dulces"},
                        {codgrupo:10,description:"Frutas"},
                        {codgrupo:11,description:"Bizcochos"},
                        {codgrupo:12,description:"Pucheros"},
                        {codgrupo:13,description:"Tortas"},
                        {codgrupo:14,description:"Grano"},
                        {codgrupo:15,description:"Pastas"},
                        {codgrupo:16,description:"Ensaladas"},
                        {codgrupo:17,description:"Pizzas"},
                        {codgrupo:18,description:"Horno"},
                        {codgrupo:19,description:"Cervezas"},
                        {codgrupo:20,description:"Rebozados"},
                        {codgrupo:21,description:"Frituras"},
                        {codgrupo:22,description:"Yogures"},
                        {codgrupo:23,description:"Helados"},
                        {codgrupo:24,description:"Licores"},
                        {codgrupo:25,description:"Copas"},
                        {codgrupo:26,description:"Cafes"},
                        {codgrupo:27,description:"Poleos"},
                        {codgrupo:28,description:"Hamburguesas"},
                        {codgrupo:29,description:"Chips"}]
            };
              template=(props)=>(
                
                <MyPageSearch id={id} data={datos.grupos} ></MyPageSearch>
              )
            break;
            case 'template12':
               
            break;
          }
          new UXLoadPanel({
            id:id,
            textTemplate: template
          });
      }
      });
    },[]);
   
    const divstyle={
          height:'100%'
    }
    return (
  <div style={divstyle} id={props.id}>      
  <div className="menu-vertical01"  >
   <div className="container-menu-scroll" >
                <ul className="items " >
                    <li className="parent element pr"><a className="element-link gr ripple" href="#" >Link 1<span className="fa fa-chevron-right push-float-right" ></span></a>
                         <div className = "sub-menu sb" >
                           <a className ="element-link el ripple" href="#/plantilla1" data-panel-id="template01" >SubLink 1</a>
                           <a className ="element-link el ripple" href="#/plantilla2" data-panel-id="template02" >SubLink 2</a>
                           <a className ="element-link el ripple" href="#/plantilla3" data-panel-id="template03" >SubLink 3</a>
                           <a className ="element-link el ripple" href="#/plantilla4" data-panel-id="template04" >SubLink 4</a>
                           <a className ="element-link el ripple" href="#/plantilla5" data-panel-id="template05" >SubLink 5</a>
                         </div>
                    </li>
                    <li className="parent element pr" ><a className="element-link gr ripple" href="#">Link 2<span className="fa fa-chevron-right push-float-right" ></span></a>
                         <div className="sub-menu sb" >
                           <a className="element-link el ripple" href="#/plantilla6" data-panel-id="template06" >SubLink 1</a>
                           <a className="element-link el ripple" href="#/plantilla7" data-panel-id="template07" >SubLink 2</a>
                           <a className="element-link el ripple" href="#/plantilla8" data-panel-id="template08" >SubLink 3</a>
                           <a className="element-link el ripple" href="#/plantilla9" data-panel-id="template09" >Prueba Login 01</a>
                           <a className="element-link el ripple" href="#/plantilla10" data-panel-id="template10" >Prueba Login 02</a>
                           <a className="element-link el ripple" href="#/plantilla11" data-panel-id="template11" >Listado busqueda</a>
                         </div>
                    </li>
                    <li className="element item itm" ><a className="element-link el ripple" href="#/plantilla11">Link 3
                      
                    </a>
                    
                    </li>
                    <li className="parent element pr" ><a className="element-link gr ripple" href="#">Link 4<span className="fa fa-chevron-right push-float-right" ></span></a>
                       <div className="sub-menu sb" >
                           <Link className="element-link ripple" to="/" >Inicio</Link>
                           <Link className="element-link ripple" to="/login" >login</Link>
                           <Link className="element-link ripple" to="/contactos" >contactos</Link>
                           <Link className="element-link ripple" to="/lista" >Lista</Link>
                           <Link className="element-link ripple" to="/listausuarios" >Lista Usuarios</Link>
                           <Link className="element-link ripple" to="/frmregistrouser" >Registro Usuarios</Link>
                           <Link className="element-link ripple" to="/listablogs" >Lista Blogs</Link>
                           <Link className="element-link ripple" to="/listacategorias" >Lista Categorias</Link>
                           <Link className="element-link ripple" to="/menuhorizontal" >Menu Horizontal</Link>
                           <a className="element-link el ripple" href="#" >SubLink 1</a>
                           <a className="element-link el ripple" href="#" >SubLink 2</a>
                           <a className="element-link el ripple" href="#" >SubLink 3</a>
                           <a className="element-link el ripple" href="#" >SubLink 4</a>
                           <a className="element-link el ripple" href="#" >SubLink 5</a>
                           
                       </div>
                    </li>
                     <li className="parent element pr" ><a className="element-link gr ripple" href="#">Link 5<span className="fa fa-chevron-right push-float-right" ></span></a>
                       <div className="sub-menu sb" >
                           <a className="element-link el ripple" href="#" >SubLink 1</a>
                           <a className="element-link el ripple" href="#" >SubLink 2</a>
                           <a className="element-link el ripple" href="#" >SubLink 3</a>
                           <a className="element-link el ripple" href="#" >SubLink 4</a>
                           <a className="element-link el ripple" href="#" >SubLink 5</a>
                       </div>
                    </li>
                </ul>
              </div>
              <button id="btn-slide-up" className="slide-button top" ><i className="fa fa-chevron-up fa-2x"></i></button>
              <button id="btn-slide-down" className="slide-button bottom" ><i className="fa fa-chevron-down fa-2x"></i></button>
    </div>
    </div>  
    )
}

export default MyMenuVertical;

