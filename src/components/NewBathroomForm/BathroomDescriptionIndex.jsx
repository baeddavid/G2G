import React from "react";
import { Link } from "react-router-dom";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import BathroomPage from "../../blocks/BathroomPage";
import PageNav from "../../blocks/PageNav";
import Button from "../Button";

const BathroomDescriptionIndex = ({
  nextStep,
  prevStep,
  handleChange,
  form,
  setNewBathroomId
}) => {
  const {
    category,
    genderNeutral,
    description,
    address,
    businessName,
    purchaseRequired,
    accessibleStall,
    singleOccupancy,
    changingStations,
    lat,
    lng
  } = form;

  const POST_MUTATION = gql`
    mutation PostMutation(
      $businessName: String
      $description: String!
      $address: String!
      $genderNeutral: String!
      $category: String!
      $lat: Float!
      $lng: Float!
      $changingStations: Boolean!
      $purchaseRequired: Boolean!
      $accessibleStall: Boolean!
      $singleOccupancy: Boolean!
    ) {
      postBathroom(
        businessName: $businessName
        description: $description
        address: $address
        genderNeutral: $genderNeutral
        category: $category
        lat: $lat
        lng: $lng
        changingStations: $changingStations
        purchaseRequired: $purchaseRequired
        accessibleStall: $accessibleStall
        singleOccupancy: $singleOccupancy
      ) {
        id
        lat
        lng
      }
    }
  `;

  const back = () => {
    prevStep();
  };

  const isFormComplete = () => {
    return !!(businessName && description && address);
  };

  const saveAndContinue = data => {
    setNewBathroomId(data.postBathroom.id);
    nextStep();
  };

  return (
    <BathroomPage>
      <Link to="/">Cancel</Link>
      <h2>New Bathroom</h2>
      <h3>Last step! Where in the world is this bathroom?</h3>
      <input
        type="text"
        name="businessName"
        placeholder="Enter business name"
        onChange={handleChange}
        defaultValue={businessName}
      />
      <input
        type="text"
        name="address"
        placeholder="Enter address"
        onChange={handleChange}
        defaultValue={address}
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        defaultValue={description}
      />
      <Mutation
        mutation={POST_MUTATION}
        variables={{
          businessName,
          description,
          address,
          genderNeutral,
          category,
          lat,
          lng,
          changingStations,
          purchaseRequired,
          accessibleStall,
          singleOccupancy
        }}
        onCompleted={data => {
          saveAndContinue(data);
        }}
      >
        {postMutation => (
          <Button
            primary
            light
            disabled={!isFormComplete()}
            onClick={isFormComplete() ? postMutation : null}
          >
            Finish
          </Button>
        )}
      </Mutation>
      <PageNav.Controller
        back={back}
        saveAndContinue={saveAndContinue}
        page={3}
      />
    </BathroomPage>
  );
};

export default BathroomDescriptionIndex;
