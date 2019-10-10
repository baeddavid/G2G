import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import styles from './EditBathroom.module.css';

const UPDATE_BATHROOM = gql`
mutation updateBathroom(
  $id: ID!,
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
  updateBathroom(
    id: $id,
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
  }
}
`

export default class EditBathroom extends Component {
  constructor(props) {
    super();
    this.state = {
      id: props.data.id,
      businessName: props.data.businessName,
      description: props.data.description,
      address: props.data.address,
      genderNeutral: props.data.genderNeutral,
      category: props.data.category,
      changingStations: props.data.changingStations,
      purchaseRequired: props.data.purchaseRequired,
      accessibleStall: props.data.accessibleStall,
      singleOccupancy: props.data.singleOccupancy,
      lat: props.data.lat,
      lng: props.data.lng,
    }
  }
  
  handleChange = input => event => this.setState({ [input]: event.target.value });

  render() {

    const {
      id,
      businessName,
      description,
      address,
      genderNeutral,
      category,
      changingStations,
      purchaseRequired,
      accessibleStall,
      singleOccupancy,
      lat,
      lng
    } = this.state;

    return(
      <div className={styles.EditBathroom}>
        <div className={styles.row}>
          <Link className={styles.cancelBtn} to={`/bathroom/${id}`}>Cancel</Link>
          <Link className={styles.deleteBtn} to={`/bathroom/${id}/delete`}>Delete</Link>
        </div>
        <h1>Edit Bathroom</h1>
        <p>Notice something is amiss? Misspelled? You can edit the bathroom here to ensure our data stays accurate. Thos who gotta go thank you!</p>
        <input
          defaultValue={businessName}
          onChange={this.handleChange('businessName')}
        />
        <input
          defaultValue={address}
          onChange={this.handleChange('address')}
        />
        <textarea
          defaultValue={description}
          placeholder='desc'
          onChange={this.handleChange('description')}
        />
        <h5>Select relevent answers. Then swipe.</h5>

    

        <div className={styles.cardContainer}>
          <div
            className={`${styles.card} ${genderNeutral === 'Women\'s' ? styles.selected : null} `}
            onClick={ () => this.setState({ genderNeutral: 'Women\'s'}) }
          >
            <img src="/logo192.png" alt=""/>
            Women's
          </div>
          <div
            className={`${styles.card} ${genderNeutral === 'Gender Neutral' ? styles.selected : null} `}
            onClick={ () => this.setState({ genderNeutral: 'Gender Neutral'}) }
          >
            <img src="/logo192.png" alt=""/>
            Gender Neutral
          </div>
          <div
            className={`${styles.card} ${genderNeutral === 'Men\'s' ? styles.selected : null} `}
            onClick={ () => this.setState({ genderNeutral: 'Men\'s'}) }
          >
            <img src="/logo192.png" alt=""/>
            Men's
          </div>

          <div
            className={`${styles.card} ${category === 'Private Business' ? styles.selected : null} `}
            onClick={ () => this.setState({ category: 'Private Business'}) }
          >
            <img src="/logo192.png" alt=""/>
            Private Business
          </div>
          <div
            className={`${styles.card} ${category === 'Indoor Public' ? styles.selected : null} `}
            onClick={ () => this.setState({ category: 'Indoor Public'}) }
          >
            <img src="/logo192.png" alt=""/>
            Indoor Public
          </div>
          <div
            className={`${styles.card} ${category === 'Outdoor Public' ? styles.selected : null} `}
            onClick={ () => this.setState({ category: 'Outdoor Public'}) }
          >
            <img src="/logo192.png" alt=""/>
            Outdoor Public
          </div>
          <div
            className={`${styles.card} ${purchaseRequired ? styles.selected : null} `}
            onClick={ () => this.setState({ purchaseRequired: !purchaseRequired}) }
          >
            <img src="/logo192.png" alt=""/>
            Purchase Required
          </div>
          <div
            className={`${styles.card} ${accessibleStall ? styles.selected : null} `}
            onClick={ () => this.setState({ accessibleStall: !accessibleStall}) }
          >
            <img src="/logo192.png" alt=""/>
            Wheelchair Accessible
          </div>
          <div
            className={`${styles.card} ${changingStations ? styles.selected : null} `}
            onClick={ () => this.setState({ changingStations: !changingStations}) }
          >
            <img src="/logo192.png" alt=""/>
            Baby Changing
          </div>
          <div
            className={`${styles.card} ${singleOccupancy ? styles.selected : null} `}
            onClick={ () => this.setState({ singleOccupancy: !singleOccupancy}) }
          >
            <img src="/logo192.png" alt=""/>
            Single Occupancy
          </div>
        </div>
      
        <Mutation mutation={UPDATE_BATHROOM} variables={{
          id,
          businessName,
          description,
          address,
          genderNeutral,
          category,
          changingStations,
          purchaseRequired,
          accessibleStall,
          singleOccupancy,
          lat,
          lng
        }} onCompleted={() => this.props.history.push(`/bathroom/${id}`)}>
          { editMutation => <div className={styles.darkBtn} onClick={editMutation}>Submit</div>}
        </Mutation>
      </div>
    )
  }
}