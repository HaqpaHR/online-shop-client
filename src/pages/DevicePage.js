import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import fulfilledStar from "../assets/star-fill.svg";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../api/deviceApi";

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);

  return (
    <Container>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
        </Col>
        <Col md={4}>
          <Row>
            <h2>{device.name}</h2>
            <img
              src={fulfilledStar}
              alt="star"
              style={{ width: 240, height: 240, position: "relative" }}
            />
            <div
              className="d-flex align-items-center justify-content-center text-align-center"
              style={{ fontSize: 64 }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>От:{device.price} руб.</h3>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Характеристики:</h1>
        {device.info.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "gray" : "transparent",
              padding: 10,
            }}
          >
            {info.title}: {info.description}}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
