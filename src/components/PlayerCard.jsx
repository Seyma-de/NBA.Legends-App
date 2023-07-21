import React, { useState } from "react";
import { Card } from "react-bootstrap";

const PlayerCard = ({ img, name, statistics }) => {
  const [showResim, setShow] = useState(true);

  return (
    <Card
      className="m-auto player-card "
      style={{ width: "18rem" }}
      onClick={() => setShow(!showResim)}
    >
      {showResim ? (
        <Card.Img variant="top" src={img} className="player-logo" />
      ) : (
        <ul className="m-auto">
          {statistics.map((item, index) => (
            <li key={index} className="h5 text-start list-unstyled">
              🏀{item}
            </li>
          ))}
        </ul>
      )}

      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default PlayerCard;
