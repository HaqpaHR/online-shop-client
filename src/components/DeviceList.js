import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import DeviceItem from "./DeviceItem";

const DeviceList = () => {
  const { device } = useContext(Context);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {device.devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </div>
  );
};

export default observer(DeviceList);
