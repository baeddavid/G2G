import React from 'react';
import { useQuery} from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import styles from './ShowBathroomPage.module.css';
import LoadingPage from '../LoadingPage/LoadingPage';
import DeletedPage from '../DeletedPage/DeletedPage';
import FeaturesScrollbar from '../../components/FeaturesScrollbar/FeaturesScrollbar';
// import ErrorPage from '../ErrorPage/ErrorPage';

const GET_BATHROOM = gql`
query getBathroom($bathroomId: ID!) {
  getBathroom(bathroomId: $bathroomId) {
    businessName
    description
    address
    genderNeutral
    category
    changingStations
    purchaseRequired
    accessibleStall
    singleOccupancy
    lat
    lng
    postedBy {
      id
    }
    reviews {
      id
      title
      description
    }
  }
}
`

const ShowBathroomPage = props => {

  const Bathroom_ID_Object = {bathroomId: props.match.params.id};
  // const Mutate_Bathroom_ID = {id: props.match.params.id};

  const { loading, error, data } = useQuery(GET_BATHROOM, { fetchPolicy: 'no-cache', variables: Bathroom_ID_Object });
  
  if(loading) return <LoadingPage />;
  if(error) return <DeletedPage />;

  const Bathroom = data;

  let editAction;
  let showReviews;

        if(props.user.userId === Bathroom.getBathroom.postedBy.id) {
          editAction = <Link className={styles.btn} to={`/bathroom/${props.match.params.id}/edit`}>Edit Bathroom</Link>
        }


  let tempArr = Bathroom.getBathroom.reviews.slice(0).reverse();
  if(tempArr.length === 0) {
    showReviews = <div>Write the first review!</div>
  } else {
    showReviews = tempArr.map((review, index) => (
      <div key={index}>
        <br/>Title: { review.title }<br/>
        Description: { review.description }
      </div>
    ))
  }

  return(
    <div className={styles.ShowBathroomPage}>
      <Link to={'/'}><div className={styles.backBtn}>back to results</div></Link>
      <div className={styles.mapOuterContainer}>
        <div className={styles.mapContainer}>
          {/* TODO: insert map here */}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.headSection}>
          <div className={styles.nameAddrContainer}>
            <div className={styles.businessName}>
              { Bathroom.getBathroom.businessName }
            </div>
            <div className={styles.address}>
              { Bathroom.getBathroom.address }
            </div>
          </div>
          <div className={styles.voteContainer}>
            <div className={styles.upGroup}>
              <img src="/thumbsUp.png" alt="thumbs up"/>
              93
            </div>
            <div className={styles.downGroup}>
              <img src="/thumbsDown.png" alt="thumbs down"/>
              21
            </div>
          </div>
        </div>
        <div className={styles.description}>
          { Bathroom.getBathroom.description }
        </div>
        <div className={styles.row}>
          <h4>Features</h4>
            { editAction }
        </div>
        <FeaturesScrollbar getBathroom={Bathroom.getBathroom}/>
        <div className={styles.row}>
          <h4>Reviews</h4>
          <Link className={styles.btn} to={`/bathroom/${props.match.params.id}/createreview`}><div>Add a review</div></Link>
        </div>
        <div className={styles.reviews}>
          { showReviews }
        </div>
      </div>
    </div>
  )
}

export default ShowBathroomPage;