import React from 'react';
import './GameDalgona.css';
import GameTimer from './GameTimer';

// 지울 것
import { useNavigate } from 'react-router-dom';



const GameDalgona = () => {

    // 지울 것
    const Navigate = useNavigate();

    return( 
    <div className="tt">
        <div className='DalgonaHeader'>
            <h1>SQUID-CANVAS 달고나 게임</h1>
        </div>

        {/* 지울 것 */}
        <div>
            <button className='btn btn-large btn-primary'
                    onClick={(e)=>{Navigate('/Game2')}}>NEXT PAGE</button>
        </div>
        
        <div className='DalgonaNav'>
            <div className='DalgonaNavTimer'>
                <GameTimer/>
            </div>
            <div className='DalgonaNavStartCount'>시작인원 수</div>
            <div className='DalgonaNavSurviveCount'>생존인원 수</div>
        </div>
        <div className="DalgonaFrame">
            <div className='DalgonaBox'>
                <h2>달고나 이미지화면</h2>
            </div>
            <div className='WebcamBox'>
                <img src='http://localhost:8000/video_feed' alt="video_feed" />
            </div>
        </div>
    </div>)
}

export default GameDalgona;
