
import React,{useEffect,useState} from 'react'

import $ from './import-jquery.js'

import Enumerable from 'linq'
import {datos,mesas,categorias,articulos} from '../../src/ListInMemory.js'

import {MyNumPaginacion} from './MyNumPaginacion'

import {UXPaginacionControl} from '../../src/componentsImports/UXPaginacionControl.js'
import {UXLink} from '../../src/componentsImports/UXLink.js'
import {UXLoadLink} from '../../src/componentsImports/UXLoadLink.js'

import {MyListCollection} from './MyListCollection'
import {MyListGrpButtons} from './MyListGrpButtons'


import {MyPage01} from '../../src/WebComponents/MyPage01.js'
import {MyPage02} from '../../src/WebComponents/MyPage02.js'
import {MyPage03} from '../../src/WebComponents/MyPage03.js'
import {MyPageSearch} from '../../src/WebComponents/MyPageSearch.js'
import {MyPageTable} from '../../src/WebComponents/MyPageTable.js'

export const MyPagePaginacion= (props) => {
    const [index,setIndex] = useState(1);
    
    
    var pagerow=5;
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

    var datospagina=Enumerable.from(datos.grupos)
                            //.take(index*pagerow)
                            .skip((index-1)*pagerow)
                            .take(pagerow)
                            .select("$").toArray();
    //console.dir(datospagina);
    
    
    
    
    useEffect(()=>{
    
    const idTemplate='#' + props.id
    const paginacionControl = new UXPaginacionControl({
        nameid: idTemplate,
        clickButton: function(index){
            console.log("estoy en el click anidado")
            console.log(index)
            setIndex(index)
            
        }
        
    })
    
    const navegacion = new UXLink({
        id:idTemplate,
        onClickMenu:function(e){
            e.preventDefault()
            console.dir(e.target)
            var id=$(e.target).data("panel-id")
            console.log(id)
            let template;
            var idDetail = "paneldetail" + id

            template=(props)=> (
                 <MyPage01 id={props.id}></MyPage01>
            )
            
            const loadPanel = new UXLoadLink({
                id:idDetail,
                containerView:".main-body .childLyt",
                textTemplate: template
            }) 
        },
    })
    },[])
    
    return (
    <div id={props.id} className="wrapper page child" >
        <div className="nav" >
            <nav  >
            <button type="button" id="btn-toggle-back-3" className="nav-mobile push-float-left"   >
                <span className="fa fa-chevron-left" ></span>
                <span className="texto-btn"  > Back</span>
            </button>
            </nav>
        </div>  
        <div className="main" >
        <main>
            <div className="box content" >
                
                <MyListCollection data={datospagina} />

            </div>
        </main>
        </div>
        <div className="footer">
            <footer  >
                <MyNumPaginacion id={props.id+'pagina'} index={index} datos={datos.grupos} />
            </footer>
        </div>
    </div>
    
   )
}

