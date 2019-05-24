import React from 'react';
import './Main.css';
var uk = require("./uk.jpg");

const Main = () =>(
    <div className="main container">
        <div className="row">
            <div className="col-sm-4">
                <h3>
                    Hello! Wanna be in the Mountains ?
                </h3>
                <p>
                    Be there among the hill people.
                    Try their routine.
                </p>
            </div>
        </div>
        <div className="row">
            <img className="imgStyle" src={uk}>
            </img>
        </div>
        <div className="row" style={{paddingTop:'20px'}}>
            <div className="column">
                <div className="card">
                    <h3>
                        Bairhat
                    </h3>
                    <p>
                        Try our Homestay in the unexplored hills of Bairhat in Pauri Garhwal.
                    </p>
                    
                </div>                
            </div>
            <div className="column">
                <div className="card">
                    <h3>
                        Bironkhal
                    </h3>
                    <p>
                        The land of the braves welcomes you to its astounding beauty.
                        And who knows, you might be the the lucky one to witness the mesmerising snowfall.
                    </p>
                </div>
            </div>           
        </div>
    </div>
);

export default Main;