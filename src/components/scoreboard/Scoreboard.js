import React, { useState, useEffect } from 'react';
import './../../css/Scoreboard.css';

const Scoreboard = () => {

const [points, setPoints] = useState({teamA: 10, teamB: 10});
const [sets, setSets] = useState({teamA: 0, teamB: 0 });


const handlePoints = (e) =>{
    if (e.target.id==="teamA"){
        setPoints({...points, teamA: points.teamA + 1})
    } else if (e.target.id==="teamB"){
        setPoints({...points, teamB: points.teamB + 1})
    } 
}

const setCounter = () => {
    if (points.teamA >= 21 && points.teamA >= points.teamB + 2) {
        setSets({...sets, teamA: sets.teamA + 1})
        setPoints({...points, teamA: 0, teamB: 0})
    } else if (points.teamB >= 21 && points.teamB >= points.teamA + 2) {
        setSets({...sets, teamB: sets.teamB + 1})
        setPoints({...points, teamA: 0, teamB: 0})
    } else if (sets.teamA === 1 && sets.teamB === 1){
        if (points.teamA >= 15 && points.teamA >= points.teamB + 2) {
            setSets({...sets, teamA: sets.teamA + 1})
        } else if (points.teamB >= 15 && points.teamB >= points.teamA + 2) {
            setSets({...sets, teamB: sets.teamB + 1})
            setPoints({...points, teamA: 0, teamB: 0})
        }
    }
}


useEffect(() => {
    setCounter()

});



        return(
            <>
                <section className="score-wrapper">
                    <div className="result-box">
                        <h3>TeamA points:{points.teamA}, sets:{sets.teamA}</h3>
                        <h3>TeamB points:{points.teamB}, sets:{sets.teamB}</h3>
                    </div>
                    <button onClick={handlePoints} id="teamA">Point A</button>
                    <button onClick={handlePoints} id="teamB">Point B</button>
                </section>
            </>
        )
    
}

export default Scoreboard;