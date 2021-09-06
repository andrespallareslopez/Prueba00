import React,{useEffect} from 'react'


import '../../src/components/login/03form-fix-login-01.css'
import '../../src/components/buttons/03buttons.css'


const MyLogin02 = (props) => {
    useEffect(()=>{


    },[]);

    return (
      <>
           
      <form id="sign-up" className = "form-fix-login-01 " >
                <div className = "frm-background" >
                  <h1 className = "title" >Registrar Usuario:</h1>    
                  <div className="group" >  
                    <div className="label"><span className="fa fa-user fa-2x"></span></div>
                    <input type="text" placeholder="User" className="input" />
                  </div>
                  <div className="group" >
                    <div className="label" ><span class="fa fa-at fa-2x"></span></div>
                    <input type="text" placeholder="E-Mail" className="input" />  
                  </div>
                  <div className="group" >
                    <div className="label" ><span className="fa fa-unlock-alt fa-2x"></span></div>
                    <input type="text" placeholder="Password" className="input" />  
                  </div>
                  <div className="group" >
                    <div className="label" ><span className="fa fa-lock fa-2x"></span></div>
                    <input type="text" placeholder="Confirm Password" className="input" />
                  </div>
                  <button className="btn-login ripple" ><span>Resgistrar Usuario!</span></button>  
                </div> 
              </form> 

      </>
    )
}    

export default MyLogin02
