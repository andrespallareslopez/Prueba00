import React,{useEffect} from 'react'

import $ from './import-jquery.js'

//import '/src/components/buttons/03buttonmovile01.css';
import '../../src/components/buttons/03buttonmovile01.css';

export const MyNav=(props) => {
   
   useEffect(()=> {
    $("#btn-toggle-right").click(function(event){
      event.preventDefault();
      $(".menu-horizontal").toggleClass("navbars-open");    
    });
    
    $("#btn-toggle-left").click(function(event){
      
      event.preventDefault();
      $(".main-body").toggleClass("section-open");
    });
    //*******************************************************
    
    $(document).on("click","#btn-toggle-sign-in",function(event){
      //console.log("estoy en sig-in");
      event.preventDefault();
      $(".form-login").toggleClass("open-login");
      
    });
    //*********************************************************
    $("#btn-footer-menu01").click(function(event){
      console.log("estoy en boton footer");
      event.preventDefault();
      if ($(".footer-menu").hasClass("expand-footer")){
         $(".footer-menu").removeClass("expand-footer");
      }else{
         $(".footer-menu").addClass("expand-footer");
      }
    });
   },[])
   /*
   var timer1=setTimeout(() => {

     }, 50);
   */
   return (
   <div>    
    <button type="button" id="btn-toggle-left" className="nav-mobile ripple push-float-left">
    <i className="fa fa-bars fa-2x" ></i>  
    </button>
    {props.children}
    <button type="button" id="btn-toggle-right" className="nav-mobile ripple push-float-right">
    <i className="fa fa-list fa-2x" ></i>
    </button>
    <button type="button" id="btn-toggle-sign-in" className="nav-mobile ripple push-float-right">
    <i className="fa fa-sign-in fa-2x" ></i>  
    </button>
   </div>
   );

}

export default MyNav;