import React, { useState, useEffect, useRef } from 'react';
import './../../css/Scoreboard.css';

const Scoreboard = () => {

    const [points, setPoints] = useState({teamA: 0, teamB: 0});
    const [sets, setSets] = useState({teamA: 0, teamB: 0 });

    const [teamA1, setTeamA1] = useState({attack: 0, block: 0, ace:0, error: 0});
    const [teamA2, setTeamA2] = useState({attack: 0, block: 0, ace:0, error: 0});

    const [teamB1, setTeamB1] = useState({attack: 0, block: 0, ace:0, error: 0});
    const [teamB2, setTeamB2] = useState({attack: 0, block: 0, ace:0, error: 0});



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

    const teamA1Attack = () => {
        setTeamA1({...teamA1, attack: teamA1.attack + 1})
        setPoints({...points, teamA: points.teamA + 1})
        setPointsOrder(prevArray => [...prevArray, 'fas fa-volleyball-ball top'])
    }
    const teamA1Block = () => {
        setTeamA1({...teamA1, block: teamA1.block + 1})
        setPoints({...points, teamA: points.teamA + 1})
        setPointsOrder(prevArray => [...prevArray, 'fas fa-volleyball-ball top'])
    }
    const teamA1Ace = () => {
        setTeamA1({...teamA1, ace: teamA1.ace + 1})
        setPoints({...points, teamA: points.teamA + 1})
        setPointsOrder(prevArray => [...prevArray, 'fas fa-volleyball-ball top'])
    }
    const teamA1Error = () => {
        setTeamA1({...teamA1, error: teamA1.error + 1})
        setPoints({...points, teamB: points.teamB + 1})
        setPointsOrder(prevArray => [...prevArray, 'fas fa-volleyball-ball bottom'])
    }
    const teamA2Attack = () => {
        setTeamA2({...teamA2, attack: teamA2.attack + 1})
        setPoints({...points, teamA: points.teamA + 1})
        setPointsOrder(prevArray => [...prevArray, 'fas fa-volleyball-ball top'])
    }
    const teamA2Block = () => {
        setTeamA2({...teamA2, block: teamA2.block + 1})
        setPoints({...points, teamA: points.teamA + 1})
        setPointsOrder(prevArray => [...prevArray, 'fas fa-volleyball-ball top'])
    }
    const teamA2Ace = () => {
        setTeamA2({...teamA2, ace: teamA2.ace + 1})
        setPoints({...points, teamA: points.teamA + 1})
        setPointsOrder(prevArray => [...prevArray, 'fas fa-volleyball-ball top'])
    }
    const teamA2Error = () => {
        setTeamA2({...teamA2, error: teamA2.error + 1})
        setPoints({...points, teamB: points.teamB + 1})
        setPointsOrder(prevArray => [...prevArray, 'fas fa-volleyball-ball bottom'])
    }

    const teamB1Attack = () => {
        setTeamB1({...teamB1, attack: teamB1.attack + 1})
        setPoints({...points, teamB: points.teamB + 1})
        setPointsOrder(prevArray => [...prevArray, 'fas fa-volleyball-ball bottom'])
    }
    const teamB1Block = () => {
        setTeamB1({...teamB1, block: teamB1.block + 1})
        setPoints({...points, teamB: points.teamB + 1})
        setPointsOrder(prevArray => [...prevArray, 'fas fa-volleyball-ball bottom'])
    }
    const teamB1Ace = () => {
        setTeamB1({...teamB1, ace: teamB1.ace + 1})
        setPoints({...points, teamB: points.teamB + 1})
        setPointsOrder(prevArray => [...prevArray, 'fas fa-volleyball-ball bottom'])
    }
    const teamB1Error = () => {
        setTeamB1({...teamB1, error: teamB1.error + 1})
        setPoints({...points, teamA: points.teamA + 1})
        setPointsOrder(prevArray => [...prevArray, 'fas fa-volleyball-ball top'])
}
    const teamB2Attack = () => {
        setTeamB2({...teamB2, attack: teamB2.attack + 1})
        setPoints({...points, teamB: points.teamB + 1})
        setPointsOrder(prevArray => [...prevArray, 'fas fa-volleyball-ball bottom'])
    }
    const teamB2Block = () => {
        setTeamB2({...teamB2, block: teamB2.block + 1})
        setPoints({...points, teamB: points.teamB + 1})
        setPointsOrder(prevArray => [...prevArray, 'fas fa-volleyball-ball bottom'])
    }
    const teamB2Ace = () => {
        setTeamB2({...teamB2, ace: teamB2.ace + 1})
        setPoints({...points, teamB: points.teamB + 1})
        setPointsOrder(prevArray => [...prevArray, 'fas fa-volleyball-ball bottom'])
    }
    const teamB2Error = () => {
        setTeamB2({...teamB2, error: teamB1.error + 1})
        setPoints({...points, teamA: points.teamA + 1})
        setPointsOrder(prevArray => [...prevArray, 'fas fa-volleyball-ball top'])
    }


    useKey('q', teamA1Attack);
    useKey('w', teamA1Block);
    useKey('e', teamA1Ace);
    useKey('r', teamA1Error);

    useKey('a', teamA2Attack);
    useKey('s', teamA2Block);
    useKey('d', teamA2Ace);
    useKey('f', teamA2Error);

    useKey('y', teamB1Attack);
    useKey('u', teamB1Block);
    useKey('i', teamB1Ace);
    useKey('o', teamB1Error);

    useKey('h', teamB2Attack);
    useKey('j', teamB2Block);
    useKey('k', teamB2Ace);
    useKey('l', teamB2Error);





    return(
        <>
            <section className="score-wrapper">
                <div className="title-box">
                    <h1>VolleyStat</h1>
                    <p>by Przemek Rura</p>
                </div>
                <div className="result-box">
                    <div className="flex">
                        <p className="points">{points.teamA}</p>
                        <p className="sets">{sets.teamA}</p><p className="team">Player A1 / Player A2</p><p>:</p><p className="team">Player B1 / Player B2</p><p className="sets">{sets.teamB}</p>
                        <p className="points">{points.teamB}</p>
                    </div>
                </div>
                <div className="order-box">
                    <div className="order-text">
                            <p>Player A1 / Player A2</p>
                            <p>Player B1 / Player B2</p>
                    </div>
                        {pointsOrderList}
                </div>

                <div className="pitch-box">
                    <div className="pitch">
                        <div className="player-box">
                            <h3>Player A1</h3>
                            <p>Attacks(q): {teamA1.attack}</p>
                            <p>Blocks(w): {teamA1.block}</p>
                            <p>Aces(e): {teamA1.ace}</p>
                            <p>Errors(r): {teamA1.error}</p>
                        </div>
                        <div className="player-box">
                            <h3>Player A2</h3>
                            <p>Attacks(a): {teamA2.attack}</p>
                            <p>Blocks(s): {teamA2.block}</p>
                            <p>Aces(d): {teamA2.ace}</p>
                            <p>Errors(f): {teamA2.error}</p>
                        </div>
                        </div>
                        <div className="pitch">
                            <div className="player-box">
                                <h3>Player B1</h3>
                                <p>Attacks(y): {teamB1.attack}</p>
                                <p>Blocks(u): {teamB1.block}</p>
                                <p>Aces(i): {teamB1.ace}</p>
                                <p>Errors(o): {teamB1.error}</p>
                            </div>
                            <div className="player-box">
                                <h3>Player B2</h3>
                                <p>Attacks(h): {teamB2.attack}</p>
                                <p>Blocks(j): {teamB2.block}</p>
                                <p>Aces(k): {teamB2.ace}</p>
                                <p>Errors(l): {teamB2.error}</p>
                            </div>
                        </div>
                    </div>
            </section>
            </>
    )
    
};


export default Scoreboard;