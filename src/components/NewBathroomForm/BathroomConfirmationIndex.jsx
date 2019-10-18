import React from "react";
import { useMutation, Mutation } from "react-apollo";
import gql from "graphql-tag";
import styles from "./BathroomConfirmationIndex.module.css";

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

const BathroomConfirmationIndex = ({
  form,
  nextStep,
  prevStep,
  setNewBathroomId,
  newBathroomId
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

  const saveAndContinue = data => {
    setNewBathroomId(data.postBathroom.id);
    nextStep();
  };

  const back = e => {
    e.preventDefault();
    prevStep();
  };

  const [addBathroom] = useMutation(POST_MUTATION, {
    onCompleted() {
      saveAndContinue();
    }
  });

  return (
    <div className={styles.BathroomConfirmationIndex}>
      <h1>New Bathroom</h1>
      <h3>Click Finish if the following details are correct!</h3>
      <div className={styles.list}>
        <div>Bathroom Type: {category}</div>
        <div>Bathroom Gender: {genderNeutral}</div>
        <div>Purchase Required: {purchaseRequired ? "true" : "false"}</div>
        <div>Accessible Stall: {accessibleStall ? "true" : "false"}</div>
        <div>Single Occupancy: {singleOccupancy ? "true" : "false"}</div>
        <div>Changing Stations: {changingStations ? "true" : "false"}</div>
        <div>Business Name: {businessName}</div>
        <div>Address: {address}</div>
        <div>Description: {description}</div>
      </div>
      <div
        className={styles.finishBtn}
        onClick={() =>
          addBathroom({
            variables: businessName,
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
          })
        }
      >
        > Finish
      </div>
      <div className={styles.backBtnContainer}>
        <div className={styles.backBtn} onClick={back}>
          Back
        </div>
      </div>
      <div className={styles.dotContainer}>
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={`${styles.dot} ${styles.highlight}`} />
      </div>
    </div>
  );
};

export default BathroomConfirmationIndex;
