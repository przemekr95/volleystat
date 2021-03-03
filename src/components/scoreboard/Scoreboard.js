import React, { Component } from 'react';
import './../../css/Scoreboard.css';

class Scoreboard extends Component {
    state ={
        
    };

    render(){
        return(
            <>
                <section className="score-wrapper">
                    <div className="result-box">
                        <h3>Team1: <span>0</span></h3>
                        <h3>Team2: <span>0</span></h3>
                    </div>
                </section>
            </>
        )
    }
}

export default Scoreboard;