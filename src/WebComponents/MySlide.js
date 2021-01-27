import React,{useEffect} from 'react'


import '../../src/components/slides/04slide-container.css'



export const MySlide = (props) => {
    useEffect(()=>{


    },[]);

    return (
        <div className="slide-container">
        <button className="slide-button left">
          <i className="fa fa-chevron-left fa-2x" ></i>
        </button>
        <div className="slide-items">
          <ul className="cf" >
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
        <button className="slide-button right">
          <i className="fa fa-chevron-right fa-2x"></i>
        </button>
        <div className="slide-controls"></div>
     </div>

    )
}    



export default MySlide