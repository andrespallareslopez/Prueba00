import jQuery from '../../src/componentsImports/import-jquery.js';
import {util} from '../../src/componentsImports/util01.js';
import {components} from '../../src/componentsImports/components01.js';




var controls;
;(function(ns,components,$){
    "use strict";
    ns.UXValidation=(function(){
        return function(options,fn,callback){
                       
         var params=[].slice.call(arguments);
         if (params.length>0){    
             this.initControl.apply(this,params,fn,callback);
         }
        }
    })();
    
    //ns.UXValidation.prototype=new components.container();
    
    ns.UXValidation.prototype.initControl=function(options,fn,callback){
        /*
        ;(function(options){
            console.dir(options);
            
        })(options)
        */
       
       
        if ( this.initevent){
            this.initevent(options,fn,callback)
        } 
          
        
     }
     ns.UXValidation.prototype.initevent = function(options,fn,callback){
        this.initValidation(options,fn,callback)
     }
     ns.UXValidation.prototype.initValidation = function(options,fn,callback){
         var self=this;
         const {
            id,
            name,
            msgText,
            msgWarning,
            msgPlaceHolder,
            constraints,
            required,
         } = options;
         //console.dir(options)
         let selectorInput=document.querySelector('#'+id+' .input');
    
         let selectorWarning = document.querySelectorAll('#'+id+' .label-warning');
         //console.dir(selectorWarning);
        if (selectorInput){
        selectorInput.addEventListener('focus',function(e){
            //console.dir(e);
        })
        selectorInput.addEventListener('blur',function(e){
            //console.dir(e);
             if (msgWarning){
                
                if (selectorInput.value){
                    
                    selectorWarning.forEach(function(item){
                        item.style.display='none';
                    });  
                    //selectorWarning.style.display='none';
                    if (callback){
                        callback();
                    }

                }else{
                    if (required){
                        selectorWarning.forEach(function(item){
                            item.style.display='block';
                        });
                    }
                  
                    //selectorWarning.style.display='block';
                 
                }

             }
        });            
    }
    if (selectorWarning){
        selectorWarning.forEach(function(item){
            item.style.display='none';
        });
        //selectorWarning.style.display='none';
    }
    if (fn)
      fn({selectorInput,selectorWarning})
  }

})(controls=controls||{},components,jQuery)

var UXValidation = controls.UXValidation
export {UXValidation}
/*
if (!window.controls)
   window.controls={}
   
util.addNameSpace(window.controls,controls);
*/