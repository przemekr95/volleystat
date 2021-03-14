import React, { useState, useEffect, useRef } from 'react';
import './../../css/Scoreboard.css';

const Scoreboard = () => {

const [points, setPoints] = useState({teamA: 0, teamB: 0});
const [sets, setSets] = useState({teamA: 0, teamB: 0 });

const [teamA, setTeamA] = useState({attack: 0, block: 0, serve:0, error: 0});
const [teamB, setTeamB] = useState({attack: 0, block: 0, serve:0, error: 0});

const [pointsOrder, setPointsOrder] = useState([]);

function useKey(key, callback) {
    const callbackRef = useRef(callback);
    useEffect(() => {
        callbackRef.current = callback;
    });


    useEffect(() => {
        function handle(keyEvent){
            if(keyEvent.key === key) {
                callbackRef.current(keyEvent)
            }
        }
        document.addEventListener("keyup", handle)
        return () => {
            document.removeEventListener("keyup", handle)
        };
    }, [key]);
}


const setCounter = () => {
    if (points.teamA >= 21 && points.teamA >= points.teamB + 2) {
        setSets({...sets, teamA: sets.teamA + 1})
        setPoints({...points, teamA: 0, teamB: 0})
        setPointsOrder([])
    } else if (points.teamB >= 21 && points.teamB >= points.teamA + 2) {
        setSets({...sets, teamB: sets.teamB + 1})
        setPoints({...points, teamA: 0, teamB: 0})
        setPointsOrder([])
    } else if (sets.teamA === 1 && sets.teamB === 1){
        if (points.teamA >= 15 && points.teamA >= points.teamB + 2) {
            setSets({...sets, teamA: sets.teamA + 1})
            setPointsOrder([])
        } else if (points.teamB >= 15 && points.teamB >= points.teamA + 2) {
            setSets({...sets, teamB: sets.teamB + 1})
            setPointsOrder([])
        }
    }
}

useEffect(() => {
    setCounter()
});

const pointsOrderList = pointsOrder.map(item => (
    <div className="points-order">
        <i key={pointsOrder.length} className={item}></i>
    </div>
))

const teamAAttack = () => {
    setTeamA({...teamA, attack: teamA.attack + 1})
    setPoints({...points, teamA: points.teamA + 1})
    setPointsOrder(prevArray => [...prevArray, 'fas fa-volleyball-ball top'])
}
const teamABlock = () => {
    setTeamA({...teamA, block: teamA.block + 1})
    setPoints({...points, teamA: points.teamA + 1})
    setPointsOrder(prevArray => [...prevArray, 'fas fa-volleyball-ball top'])
}
const teamAServe = () => {
    setTeamA({...teamA, serve: teamA.serve + 1})
    setPoints({...points, teamA: points.teamA + 1})
    setPointsOrder(prevArray => [...prevArray, 'fas fa-volleyball-ball top'])
}
const teamAError = () => {
    setTeamA({...teamA, error: teamA.error + 1})
    setPoints({...points, teamA: points.teamA + 1})
    setPointsOrder(prevArray => [...prevArray, 'fas fa-volleyball-ball top'])
}

const teamBAttack = () => {
    setTeamB({...teamB, attack: teamB.attack + 1})
    setPoints({...points, teamB: points.teamB + 1})
    setPointsOrder(prevArray => [...prevArray, 'fas fa-volleyball-ball bottom'])
}
const teamBBlock = () => {
    setTeamB({...teamB, block: teamB.block + 1})
    setPoints({...points, teamB: points.teamB + 1})
    setPointsOrder(prevArray => [...prevArray, 'fas fa-volleyball-ball bottom'])
}
const teamBServe = () => {
    setTeamB({...teamB, serve: teamB.serve + 1})
    setPoints({...points, teamB: points.teamB + 1})
    setPointsOrder(prevArray => [...prevArray, 'fas fa-volleyball-ball bottom'])
}
const teamBError = () => {
    setTeamB({...teamB, error: teamB.error + 1})
    setPoints({...points, teamB: points.teamB + 1})
    setPointsOrder(prevArray => [...prevArray, 'fas fa-volleyball-ball bottom'])
}



useKey('q', teamAAttack);
useKey('w', teamABlock);
useKey('e', teamAServe);
useKey('r', teamAError);

useKey('y', teamBAttack);
useKey('u', teamBBlock);
useKey('i', teamBServe);
useKey('o', teamBError);





        return(
            <>
                <section className="score-wrapper">
                    <div className="result-box">
                        <table>
                            <tbody className="result">
                                <tr><th></th><th>Sets</th><th>Points</th></tr>
                                <tr><td><h3>TeamA</h3></td><td>{sets.teamA}</td><td>{points.teamA}</td></tr>
                                <tr><td><h3>TeamB</h3></td><td>{sets.teamB}</td><td>{points.teamB}</td></tr>
                            </tbody>
                        </table>
                        <div className="points-order-box">
                            <div className="points-order-text">
                                <h3>TeamA</h3>
                                <h3>TeamB</h3>
                            </div>
                            {pointsOrderList}
                        </div>
                    </div>
                    <div className="stat-box">
                        <h3>Stats</h3>
                        <div className="stat-teamA">
                            <h4>TeamA</h4>
                            <p>Attack: {teamA.attack}</p>
                            <p>Block: {teamA.block}</p>
                            <p>Serve: {teamA.serve}</p>
                            <p>Opponent error: {teamA.error}</p>
                        </div>
                        <div className="stat-teamB">
                            <h4>TeamB</h4>
                            <p>Attack: {teamB.attack}</p>
                            <p>Block: {teamB.block}</p>
                            <p>Serve: {teamB.serve}</p>
                            <p>Opponent error: {teamB.error}</p>
                        </div>
                    </div>

                </section>
            </>
        )
    
}

export default Scoreboard;