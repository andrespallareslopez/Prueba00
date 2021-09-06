import React from 'react'

import '../../src/components/list/03List-collections.css'

export const MyListCollection = (props) => {
     
     return (
        <ul className="list-collection"  >
        {
           props.data && props.data.map(function(value,i){
            return (
              <li key={i}>

                <div className="el-left" ></div>
                <div className="el-content" >
    
                  <h2>{value.description}</h2>
                  
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quidem facilis nisi soluta dicta, asperiores, fugiat enim ab adipisci doloribus quaerat at saepe suscipit labore. Sit ipsa esse illo reprehenderit?</p>
                           
                </div>
                <a className="list-element el-right ripple" href={"#/" + i} >
                    <span className="fa fa-chevron-right center" data-panel-id = {i}  href = {i}  ></span>
                </a>
              </li>
            )
            }
          )
        }
       
          
        </ul>
        
     )
} 

