import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';

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
      <div>
        <Link to={`/bathroom/${id}`}><div>Cancel</div></Link>
        <Link to={`/bathroom/${id}/delete`}><div>Delete</div></Link>
        Business Name:
        <input
          defaultValue={businessName}
          onChange={this.handleChange('businessName')}
        />
        Addresss:
        <input
          defaultValue={address}
          onChange={this.handleChange('address')}
        />
        Description: 
        <input
          defaultValue={description}
          placeholder='desc'
          onChange={this.handleChange('description')}
        />
        <div><br /></div>
        Gender Neutral:
        <div
          onClick={ () => this.setState({ genderNeutral: 'Men\'s'}) }
          >Men's</div>
        <div
          onClick={ () => this.setState({ genderNeutral: 'Women\'s'}) }
          >Women's</div>
        <div
          onClick={ () => this.setState({ genderNeutral: 'Gender Neutral'}) }
          >Gender Neutral</div>
          <br />
          Bathroom Type: 
        <div
          onClick={ () => this.setState({ category: 'Indoor Public'}) }
          >Indoor Public</div>
        <div
          onClick={ () => this.setState({ category: 'Private Business'}) }
          >Private Business</div>
        <div
          onClick={ () => this.setState({ category: 'Outdoor Public'}) }
          >Outdoor Public</div>
          <br />
        <div
          onClick={ () => this.setState({ changingStations: !changingStations}) }
          >Changing Stations</div>
        <div
          onClick={ () => this.setState({ purchaseRequired: !purchaseRequired}) }
          >Purchase Required</div>
        <div
          onClick={ () => this.setState({ accessibleStall: !accessibleStall}) }
          >Accessible Stall</div>
        <div
          onClick={ () => this.setState({ singleOccupancy: !singleOccupancy}) }
          >Single Occupancy</div>
        <br />
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
          { editMutation => <div onClick={editMutation}>Submit</div>}
        </Mutation>
      </div>
    )
  }
}