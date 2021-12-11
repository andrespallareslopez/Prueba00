import React,{useEffect} from 'react'

import {UXTable} from '../../src/componentsImports/UXTable.js'

import '../../src/components/Table/table01.css'

export const MyTable = (props) => {

  
    
    useEffect(()=>{
      var datos=[
        {producto:"fanta",email:"andres_pallares@hotmail.com",mes:1,fecha:"21/02/2013",cnt:2.00,precio:1.20},
        {producto:"cafe",email:"andrespallares4@gmail.com",mes:3,fecha:"11/05/2015",cnt:1,precio:1.00},
        {producto:"coca-cola",email:"loj@ciklum.com",mes:5,fecha:"03/03/2016",cnt:1,precio:1.50},
        {producto:"Copa de vino 1",email:"microsoft@soft.es",mes:2,fecha:"04/05/2014",cnt:1,precio:0.60},
        {producto:"Copa de vino 2",email:"microsoft@soft.es",mes:2,fecha:"04/05/2014",cnt:1,precio:0.60},
        {producto:"Copa de vino 3",email:"microsoft@soft.es",mes:2,fecha:"04/05/2014",cnt:1,precio:0.60},
        {producto:"Copa de vino 4",email:"microsoft@soft.es",mes:2,fecha:"04/05/2014",cnt:1,precio:0.60},
        {producto:"Copa de vino 5",email:"microsoft@soft.es",mes:2,fecha:"04/05/2014",cnt:1,precio:0.60},
        {producto:"Copa de vino 6",email:"microsoft@soft.es",mes:2,fecha:"04/05/2014",cnt:1,precio:0.60},
        {producto:"Copa de vino 7",email:"microsoft@soft.es",mes:2,fecha:"04/05/2014",cnt:1,precio:0.60},
        {producto:"Copa de vino 8",email:"microsoft@soft.es",mes:2,fecha:"04/05/2014",cnt:1,precio:0.60}
    ];
    /*
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
    */
    
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

export default MyTable;