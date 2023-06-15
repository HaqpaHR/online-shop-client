import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import star from "../assets/star.svg";
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();

  return (
    <Col md={3} className={"mt-4 me-4"} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image src={process.env.REACT_APP_API_URL + device.img} />
        <div className="d-flex justify-content-between align-items-center text-black-50">
          <div>Iphone</div>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <Image src={star} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
