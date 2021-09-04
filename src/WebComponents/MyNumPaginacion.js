import React,{useEffect,useState} from 'react'

import Enumerable from 'linq'

import {UXPaginacion} from '../../src/componentsImports/UXPaginacion.js'

import {UXPaginacionControl} from '../../src/componentsImports/UXPaginacionControl.js'

import '../../src/components/page-controls/page-controls.css'



export const MyNumPaginacion= (props) => {
    


    //var [pageIndex,setPageIndex] = useState(props.index )
    //var [pageRow,setPageRow] = useState(5)
    //var [datosPagina,setDatosPagina] = useState()


    //var [datos,setDatos] = useState(props.datos)
    
    var paginacion=new UXPaginacion({
        maxRecord:props.datos.length,
        pageRow:5
    });
    
    var datosPagina = paginacion.numPage(Number(props.index))
    console.dir(datosPagina)
    useEffect(()=>{
      
        //console.dir(paginacion)
        //console.dir(paginacion.numPage(3))
        //setDatosPagina(paginacion.numPage(3))
        //console.dir(datosPagina)
        /* 
        const idTemplate='#'+props.id
        const paginacionControl = new UXPaginacionControl({
            nameid: idTemplate,
            clickButton: function(index){
    
            }
            
        })
        */

    },[])
    
    
   return (
    
    <div id={props.id} className = "page-box" >
        <div className = "page-controls" >
           {
            datosPagina.map(function(e,i){
                return (
                    <div key={i} className = {(props.index ===e ) ? "page-button current" : "page-button"} >{e}</div>
                )
              
            })
        }
        </div>

    </div>

   )
}

