import React from "react";
import { Link } from "react-router-dom";
import Card from "../../blocks/Card";
import PageNav from "../../blocks/PageNav";
import BathroomPage from "../../blocks/BathroomPage";

const BathroomTypesIndex = ({ form, nextStep, prevStep, setForm }) => {
  const saveAndContinue = () => {
    nextStep();
  };

  const back = () => {
    prevStep();
  };

  return (
    <BathroomPage>
      <Link to="/">Cancel</Link>
      <h2>New Bathroom</h2>
      <h3>Let us know the options available!</h3>
      <Card.Container>
        <Card
          selected={form.purchaseRequired}
          onClick={() =>
            setForm({ ...form, purchaseRequired: !form.purchaseRequired })
          }
        >
          <Card.Image src="/logo192.png" alt="Purchase Required" />
          Purchase Required
        </Card>
        <Card
          selected={form.accessibleStall}
          onClick={() =>
            setForm({ ...form, accessibleStall: !form.accessibleStall })
          }
        >
          <Card.Image src="/logo192.png" alt="Wheelchair Accessible" />
          Wheelchair Accessible
        </Card>
      </Card.Container>
      <Card.Container>
        <Card
          selected={form.singleOccupancy}
          onClick={() =>
            setForm({ ...form, singleOccupancy: !form.singleOccupancy })
          }
        >
          <Card.Image src="/logo192.png" alt="Single Occupancy" />
          Single Occupancy
        </Card>
        <Card
          selected={form.changingStations}
          onClick={() =>
            setForm({ ...form, changingStations: !form.changingStations })
          }
        >
          <Card.Image src="/logo192.png" alt="Changing Stations" />
          Changing Stations
        </Card>
      </Card.Container>
      <PageNav.Controller
        back={back}
        saveAndContinue={saveAndContinue}
        page={2}
      />
    </BathroomPage>
  );
};

export default BathroomTypesIndex;
