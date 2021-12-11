import React,{useEffect} from 'react'

import {UXTable} from '../../src/componentsImports/UXTable.js'

import '../../src/components/Table/table01.css'

export const MyTablePagination = (props) => {

  
    
    useEffect(()=>{
      var datos=[
        {producto:"fanta",email:"andres_pallares@hotmail.com",mes:1,fecha:"21/02/2013",cnt:2.00,precio:1.20},
        {producto:"cafe",email:"andrespallares4@gmail.com",mes:3,fecha:"11/05/2015",cnt:1,precio:1.00},
        {producto:"coca-cola",email:"loj@ciklum.com",mes:5,fecha:"03/03/2016",cnt:1,precio:1.50},
        {producto:"Copa de vino",email:"microsoft@soft.es",mes:2,fecha:"04/05/2014",cnt:1,precio:0.60}
    ];
      var table = new UXTable({
     
        nameid:"table01",
        
        container:"#tablepage01",
        fields:[
            {name:"producto",caption:"Producto",type:"string",
            sort:function(a){return a.toUpperCase()},width:"25%",required:true},
            //{name:"fecha",caption:"Fecha",type:"datestring",align:"left",width:"15%"},
            {name:"email",caption:"E-mail",type:"mask",width:"20%",alias:"email",subtype:"email"},
            {name:"mes",caption:"Mes",type:"integerstring",width:"15%",length:3},
            {name:"fecha",caption:"Fecha",type:"mask",align:"left",width:"15%",
            subtype:"date",required:true},
            {name:"cnt",caption:"Cantidad",type:"decimalstring",align:"center",width:"10%",min:1},
            {name:"precio",caption:"Precio",type:"mask",align:"center",width:"15%",
            min:1,max:500,mask:"[0-9]+(\.[0-9][0-9]?)?",alias:"Regex",
            subtype:"decimal",toFixed:2,
            sort:function(a){return a}},
            {name:"total",caption:"Total",type:"decimal",
            computed:function(dato){return dato.cnt*dato.precio},
            align:"right",width:"15%",
            sort:function(a){return a;}
            }
        ],
        data:datos 
      })   
    },[])
    return (
        <div id={props.id}></div>
    )


}

export default MyTablePagination;