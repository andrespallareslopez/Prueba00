import React,{useEffect} from 'react'

import {MyPanelScrollPopUp} from '../../src/WebComponents/MyPanelScrollPopUp.js'
import {MyPanelScrollSearch} from '../../src/WebComponents/MyPanelScrollSearch.js'

import {MyPanelScrollContent} from '../../src/WebComponents/MyPanelScrollContent.js'

import {MyPanelScrollForm} from '../../src/WebComponents/MyPanelScrollForm.js'

import {MyForm} from '../../src/WebComponents/MyForm.js'


export const MyPageForm = (props) => {

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
            <MyPanelScrollForm id="panelform01" >
              <MyForm id="form02" />
            </MyPanelScrollForm>     
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


export default MyPageForm;
