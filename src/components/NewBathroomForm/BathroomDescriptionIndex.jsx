import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styles from './BathroomDescriptionIndex.module.css';

const BathroomDescriptionIndex = ({ nextStep, prevStep, handleChange, form, setNewBathroomId }) => {

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
    lng,
  } = form;

  const POST_MUTATION = gql`
      mutation PostMutation(
          $businessName: String,
          $description: String!,
          $address: String!,
          $genderNeutral: String!,
          $category: String!,
          $lat: Float!,
          $lng: Float!,
          $changingStations: Boolean!,
          $purchaseRequired: Boolean!,
          $accessibleStall: Boolean!,
          $singleOccupancy: Boolean!
      ) {
          postBathroom(
              businessName: $businessName,
              description: $description,
              address: $address,
              genderNeutral: $genderNeutral,
              category: $category,
              lat: $lat,
              lng: $lng,
              changingStations: $changingStations,
              purchaseRequired: $purchaseRequired,
              accessibleStall: $accessibleStall,
              singleOccupancy: $singleOccupancy
          ) {
              id
              lat
              lng
          }
      }
  `


  const back = () => {
    prevStep();
  }
  
  const isFormComplete = () => {
    return businessName && description && address;
  }

  const saveAndContinue = (data) => {
    setNewBathroomId(data.postBathroom.id);
    nextStep();
}
  

  return(
    <div className={styles.BathroomDescriptionIndex}>
      <h1>New Bathroom</h1>
      <h3>Last step! Where in the world is this bathroom?</h3>
      <input
        type="text"
        name='businessName'
        placeholder='Enter business name'
        onChange={ handleChange }
        defaultValue={ businessName }
      />
      <input
        type="text"
        name='address'
        placeholder='Enter address'
        onChange={ handleChange }
        defaultValue={ address }
      />
      <textarea
        name='description'
        placeholder='Description'
        onChange={ handleChange }
        defaultValue={ description }
      />
      <Mutation mutation={ POST_MUTATION } variables={{
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
      }} onCompleted={ (data) => { saveAndContinue(data) } }>
        { postMutation => (
          <div 
            className={isFormComplete() ? styles.finishBtn : styles.nopeBtn}
            onClick={ postMutation }
          >
            Finish
          </div>
        )}
      </Mutation>
      <div className={styles.backBtnContainer}>
        <div 
          className={styles.backBtn}
          onClick={ back }
        >
            Back
        </div>
      </div>
      <div className={styles.dotContainer}>
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={`${styles.dot} ${styles.highlight}`} />
      </div>
    </div>
  )
}

export default BathroomDescriptionIndex;