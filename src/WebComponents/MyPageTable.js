import React from 'react'
import {MyTable} from '../../src/WebComponents/MyTable.js'

export const MyPageTable= (props) => {
    
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
             <div className="box content"  >
               <MyTable id="tablepage01" />      
             </div>
         </main>
         </div>
         <div className="footer">
             <footer  >
                 
             </footer>
         </div>
     </div>
    )
 }