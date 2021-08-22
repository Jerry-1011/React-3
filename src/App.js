import React, { useState , useEffect } from "react";
import './App.css';
import { CheckCircleIcon } from '@heroicons/react/solid';

export const Time = () => {
    var [date] = useState(new Date());
    useEffect(() => {
        <div className="container">
        <div className="box">
            <div className="header"></div>

            <div className="body"></div>

            <div className="todo">
                <span>Buy New Phone</span>
                <CheckCircleIcon/>

                <div className="todo">
                <span>Buy New Phone</span>
                <CheckCircleIcon/>

                <div className="todo">
                <span>Buy New Phone</span>
                <CheckCircleIcon/>
            </div>
            <div className="footer">
                <input type="text" />
                <button>submit</button>
            </div>
        </div>
    </div>
  </div>
  </div>

 });
    return(
        <div>
            <h1> Date : {date.toLocaleDateString()}</h1>

        </div>
        
    )
    
}


export default  Time;
