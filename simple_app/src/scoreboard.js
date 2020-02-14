import React from "react";
import ReactDOM from "react-dom";

import "./index.css";



function showScoreBoard(result) {
    console.log(result);
    ReactDOM.render(() => {
    	return (<div>
            
        </div>);
    		    
    }, document.getElementsByTagName("body"));
}

export  {showScoreBoard};
