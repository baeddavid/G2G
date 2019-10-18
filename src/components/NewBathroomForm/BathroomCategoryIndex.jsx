import React from "react";
import { Link } from "react-router-dom";
import Card from "../../blocks/Card";
import PageNav from "../../blocks/PageNav";
import BathroomPage from "../../blocks/BathroomPage";

const BathroomCategoryIndex = ({ form, nextStep, setForm }) => {
  const { category, genderNeutral } = form;

  const saveAndContinue = () => {
    nextStep();
  };

  const isPageComplete = () => {
    return category && genderNeutral;
  };

  return (
    <BathroomPage>
      <Link to="/">Cancel</Link>
      <h2>New Bathroom</h2>
      <p>
        Thanks for being a contributing member of the G2G community! By
        providing this information, you’re helping us keep our database updated
        and useful.
      </p>
      {/* Should we say swipe? Or tap arrow button */}
      <h3>Select relevant answers. Then click continue.</h3>
      <p>Where is this bathroom?</p>
      <Card.Container>
        <Card
          selected={category === "Private Business"}
          onClick={() => setForm({ ...form, category: "Private Business" })}
        >
          <Card.Image src="logo192.png" alt="Private Business" />
          Private Business
        </Card>
        <Card
          selected={category === "Indoor Public"}
          onClick={() => setForm({ ...form, category: "Indoor Public" })}
        >
          <Card.Image src="logo192.png" alt="Indoor Public" />
          Indoor Public
        </Card>
        <Card
          selected={category === "Outdoor Public"}
          onClick={() => setForm({ ...form, category: "Outdoor Public" })}
        >
          <Card.Image src="logo192.png" alt="Outdoor Public" />
          Outdoor Public
        </Card>
      </Card.Container>
      <p>Which bathroom did you use?</p>
      <Card.Container>
        <Card
          selected={genderNeutral === "Women's"}
          onClick={() => setForm({ ...form, genderNeutral: "Women's" })}
        >
          <Card.Image src="logo192.png" alt="Women's" />
          Women's
        </Card>
        <Card
          selected={genderNeutral === "Gender Neutral"}
          onClick={() => setForm({ ...form, genderNeutral: "Gender Neutral" })}
        >
          <Card.Image src="logo192.png" alt="Gender Neutral" />
          Gender Neutral
        </Card>
        <Card
          selected={genderNeutral === "Men's"}
          onClick={() => setForm({ ...form, genderNeutral: "Men's" })}
        >
          <Card.Image src="logo192.png" alt="Men's" />
          Men's
        </Card>
      </Card.Container>
      <PageNav.Controller
        isPageComplete={isPageComplete}
        saveAndContinue={saveAndContinue}
        page={1}
      />
    </BathroomPage>
  );
};

export default BathroomCategoryIndex;
