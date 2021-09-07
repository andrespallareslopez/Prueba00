import React,{useEffect} from 'react'
import {MyNav} from './MyNav.js'
import {MyMenuVertical} from './MyMenuVertical.js'
import {MyMenuVerticalPanel} from './MyMenuVerticalPanel.js'
import {MyTab} from './MyTab.js'

import '../../src/components/layouts/03layout02/03layout02.css'
import '../../src/components/layouts/03layout02/03transition02.css'
import '../../src/components/effects/03rippleEffects01.css'


export const Layout01 =(props)=>{
    return (
        <div id="container" className="container lyt03layout02"  >
        <div className="pages" >
        <header>
            <div className="logo">
                
            </div>
            <h1 className="title-application">My Application</h1>
        </header>
        <div className="main-body">
            <aside id="menuvertical" className="menu-area">
              <MyMenuVerticalPanel id="MenuVertical01" ></MyMenuVerticalPanel>
            </aside>
            <div id="root" className="wrapper page root">
        
                <div className="nav">
                    
                    <nav >
                     <MyNav>
                         {props.top}
                     </MyNav>
                    
                    </nav>
                    
                </div>
        
                <div className="main">
                    <main>
                        <div className="content"  >
                           {props.children}
                    
        
                        </div>
                    </main>
                </div>
                <div className="footer">
                    <footer>
                    
                    </footer>
                </div>
            </div>
            <div className="childLayout">

            </div>
            <div className="childLayout1"></div>
            <div className="childLyt" ></div>
          </div>
        </div> 
    </div>
    
    )
}

export default Layout01;