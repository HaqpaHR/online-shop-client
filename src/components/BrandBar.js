import React, { useContext } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { Card } from "react-bootstrap";

const BrandBar = () => {
  const { device } = useContext(Context);
  return (
    <div className="d-flex gap-3">
      {device.brands.map((brand) => (
        <Card
          key={brand.id}
          className="p-3"
          style={{ cursor: "pointer" }}
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
        >
          {brand.name}
        </Card>
      ))}
    </div>
  );
};

export default observer(BrandBar);
