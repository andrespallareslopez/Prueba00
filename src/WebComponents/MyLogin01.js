import React,{useEffect} from 'react'


import '../../src/components/login/03form-login.css'
import '../../src/components/buttons/03buttons.css'


const MyLogin01 = (props) => {
    useEffect(()=>{


    },[]);

    return (
      <>
            <form className="form-login form-background-1" id="frmlogin01" >
                 <div className="form-background" > 
                     <div className="group" >
                         <input type="text" required />
                         <span className="hightlight" ></span>
                         <span className="bar" ></span>
                         <label>Name</label>
                     </div>
                     <div className="group" >
                         <input type="text" required />
                         <span class="hightlight" ></span>
                         <span class="bar" ></span>
                         <label>Email</label>
                     </div>
                     <div className="group cf" >
                       <button className="btn-default push-float-left" >
                          <span>Cancelar</span>
                       </button>    
                       <button className="btn-primary push-float-right" >
                         <span>Aceptar</span>
                       </button>
                     </div>
                   
                </div>
            </form>
      </>
    )
}    



export default MyLogin01
