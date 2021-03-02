import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Player.css';
const Player = (props) => {
    console.log(props)
    const {name, pic, salary, team} =props.players;
    return (
        <div className="player">
      <Card style={{ width: '36rem' }}>
      <Card.Img variant="top" src={pic} />
      <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          <h2>Salary: <span className="salary">${salary}</span></h2>
          <h4>Team-Name:{team}</h4>
          </Card.Text>
          <Button variant="dark" onClick={ () => props.handleAddPlayer(props.players)}><FontAwesomeIcon icon={faPlus} />Add To Team</Button>
      </Card.Body>
      </Card>
      {/* <Card style={{ width: '36rem' }}>
      <Card.Img variant="top" src={pic} />
      <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          <h2>Salary :${salary}</h2>
          <h4>Team-Name:{team}</h4>
          </Card.Text>
          <Button variant="dark" onClick={ () => props.handleAddPlayer(props.players)}><FontAwesomeIcon icon={faPlus} />Add To Team</Button>
      </Card.Body>
      </Card> */}
      </div>
    )
}
    export default Player;
//       <div className="player" >
//           <div >
//               <img src={pic} alt=""/>
//           </div>
//           <div className="playerInfo">
//             <h1>{name}</h1>
//             <h2>Team-Name:{team}</h2>
//             <br/>
//             <h3>Salary :${salary}</h3>
//             <Button variant="dark"
//              onClick={ () => props.handleAddPlayer(props.players)}><FontAwesomeIcon icon={faPlus} />Add To Team</Button>{' '}
//         </div>
//       </div>
//     );
// };

// export default Player;