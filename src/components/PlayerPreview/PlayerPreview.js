import React from 'react';
import { Card } from 'react-bootstrap';
import './PlayerPreview.css';

const PlayerPreview = (props) => {
    console.log(props)
    const playerCount =props.playerCount;
    const {name} =props.playerCount;
    // const [playerName, setPlayerName] = useState([])''

    // console.log(playerCount);

    const totalBudget =playerCount.reduce((total, player) => total + player.salary, 0)
    return (
        <div>
              <h3 className="header">Selected Players Overview</h3>
              <h4>Players Added : {playerCount.length}</h4>
              <p >Total Budget - <span className="header">${totalBudget}</span></p>
              <p>Added Players are---{name}</p>
              <div>
               {
                  playerCount.map((player)=>(<Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={player.pic} />
                    <Card.Body>
                      <Card.Title>{player.name}</Card.Title>
                      <Card.Text>
                      ${player.salary}
                      </Card.Text>
                  </Card.Body>
                </Card>))            
                }     
               </div>
              
        </div>
    );
};

export default PlayerPreview;