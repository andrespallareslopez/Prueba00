import React,{useEffect,useState} from 'react'
import {MyPanelScrollPopUp} from '../../src/WebComponents/MyPanelScrollPopUp.js'
import {MyButtonSearch} from '../../src/WebComponents/MyButtonSearch.js'
import {MyPanelScrollSearch} from '../../src/WebComponents/MyPanelScrollSearch.js'
import {MyListCollection} from './MyListCollection'
import MyLoaderProgress01 from './MyLoaderProgress01.js'

import $ from './import-jquery.js'

import Enumerable from 'linq'

import {UXSearchPanel} from '../../src/componentsImports/UXSearchPanel.js'

import {UXLink} from '../../src/componentsImports/UXLink.js'
import {UXLoadLink} from '../../src/componentsImports/UXLoadLink.js'



import {mesas,categorias,articulos} from '../../src/ListInMemory.js'

export const MyPageSearch = (props) => {
    console.dir(props.data)
    const [datos,setDatos]=useState(props.data)
    const [progress,setProgress]=useState(false)
    //var datos=props.data
    
    var id
    useEffect(()=>{
       
        const id = props.id; 
         
        if (props.data !== undefined){
            setProgress(false)
            const ctrlBusqueda=new UXSearchPanel({
                id: id,
                data: datos,
                onSearchBefore: function(lista,texto,id){
                    if (!$(".form-search").hasClass("open-progress")) {
                        $(".form-search").addClass("open-progress");
                        setProgress(true)
                    }
                },
                onSearch: function(lista,texto,id){
                    console.log(texto)
                    setDatos(Enumerable.from(props.data)
                    .where(
                        (data)=>{
                            return data.description.toUpperCase().includes(texto.toUpperCase())===true
                         })
                     .select("$").toArray());
                     $(".form-search").removeClass("open-progress");
                     setProgress(false)
                     //console.dir(datos)
                     //return datos;
                   
                }
            });

        }
     
    },[]) 

    return (
        <div id={props.id} className="wrapper page child" >
            <div className="nav" >
                <nav  >
                <button type="button" id="btn-toggle-back-3" className="nav-mobile push-float-left"   >
                    <span className="fa fa-chevron-left" ></span>
                    <span className="texto-btn"  > Back</span>
                </button>
                <MyButtonSearch id="buttonsearch02" ></MyButtonSearch>
                </nav>
            </div>  
            <div className="main" >
            <main>
                <div className="box content"  >
                <MyPanelScrollSearch id="panelsearch01" >
                    {
                      (props.data !== undefined) ? (progress) ? <MyLoaderProgress01 /> : <MyListCollection data={datos} /> :''
                    }
                </MyPanelScrollSearch>     
                </div>
            </main>
            </div>
            <div className="footer">
                <footer  >
                <MyPanelScrollPopUp id='popup02'></MyPanelScrollPopUp>
                </footer>
            </div>
        </div>
    )

}
