import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";
const CardContainer = () => {
  const [inputVeri, setInput] = useState("");
  return (
    <>
      <Form.Control
        placeholder="Search Player..."
        className="w-50 m-auto"
        type="search"
        onChange={(e) => setInput(e.target.value)}
      />
      <Container className="card-container rounded-4 my-4 p-3">
        <Row className="g-3">
          {data
            .filter((a) =>
              a.name.toLowerCase().includes(inputVeri.toLowerCase())
            )
            .map((player, index) => (
              <Col key={index} md={6} lg={4} xl={3}>
                <PlayerCard {...player} />

                {/* <PlayerCard player={player} /> */}
                {/* player={player} yazarsakta olur ama içiçe object old için birsürü dest. gerekiyor, baştan parçalanmış gönderiyoruz */}
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
