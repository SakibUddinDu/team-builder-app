import { useEffect, useState } from 'react';
import fakeData from '../../../fakeData/fakeData';
import PlayerPreview from '../../PlayerPreview/PlayerPreview';
import Player from '../Player/Player';
import './MainView.css';

const MainView = () => {
 const [players, setPlayers] = useState([]);
 const [playerCount,setPlayerCount] = useState([]);


 useEffect(() => {
     setPlayers(fakeData);
 }, [])
 const handleAddPlayer = (players)  =>{
    const newPlayerCount =[...playerCount, players]
    setPlayerCount(newPlayerCount)
 }

    return (
         <div className="homePage">
            <div className="playerDetails">
                {
                    players.map(player => <Player players ={player} handleAddPlayer={handleAddPlayer}></Player> )
                }
           </div>
           <div className="cartDetails">
                <PlayerPreview playerCount={playerCount}></PlayerPreview>
           </div>
       </div>
    );
};

export default MainView;