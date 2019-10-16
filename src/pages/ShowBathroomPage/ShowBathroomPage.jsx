import React, { useState } from "react";
import { useQuery } from "react-apollo";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import styles from "./ShowBathroomPage.module.css";
import LoadingPage from "../LoadingPage/LoadingPage";
import DeletedPage from "../DeletedPage/DeletedPage";
import FeaturesScrollbar from "../../components/FeaturesScrollbar/FeaturesScrollbar";
import ShowMap from "../../components/ShowMap/ShowMap";
import BookmarkIndex from "../../components/Bookmark/BookmarkIndex";
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
        createdBy {
          name
        }
      }
      bookmarks {
        id
        user {
          id
        }
      }
    }
  }
`;

const ShowBathroomPage = props => {
  const Bathroom_ID_Object = { bathroomId: props.match.params.id };
  const [isBookmarked, setBookmark] = useState(false);

  const { loading, error, data, refetch } = useQuery(GET_BATHROOM, {
    fetchPolicy: "network-only",
    variables: Bathroom_ID_Object,
    onCompleted: handleCompleted
  });

  if (loading) return <LoadingPage />;
  if (error) return <DeletedPage />;

  const Bathroom = data;
  const Bookmarks = data.getBathroom.bookmarks;

  let editAction;
  let showReviews;
  let bookmarkId;

  let isBookmarkedByUser = Bookmarks.find(
    bookmark => bookmark.user.id === props.user.userId
  );

  if (isBookmarkedByUser !== undefined) {
    bookmarkId = isBookmarkedByUser.id;
  } else {
    bookmarkId = "Bookmark not present";
  }

  isBookmarkedByUser = !!isBookmarkedByUser;

  // This breaks sometimes for some reason. It is a hoisting bug.
  // TODO Fix the hoisting bug.
  function handleCompleted() {
    setBookmark(isBookmarkedByUser);
  }

  if (props.user.userId === Bathroom.getBathroom.postedBy.id) {
    editAction = (
      <Link
        className={styles.btn}
        to={`/bathroom/${props.match.params.id}/edit`}
      >
        Edit Bathroom
      </Link>
    );
  }

  let tempArr = Bathroom.getBathroom.reviews.slice(0).reverse();
  if (tempArr.length === 0) {
    showReviews = <div>Write the first review!</div>;
  } else {
    showReviews = tempArr.map((review, index) => (
      <div className={styles.Review} key={index}>
        <div className={styles.icon}>
          <img src="/toilet-paper.png" alt="toilet paper" />
        </div>
        <div className={styles.text}>
          <div className={styles.author}>@{review.createdBy.name}</div>
          <p>{review.description}</p>
        </div>
      </div>
    ));
  }
  const location = {
    lat: Bathroom.getBathroom.lat,
    lng: Bathroom.getBathroom.lng
  };

  return (
    <div className={styles.ShowBathroomPage}>
      <Link to={"/"}>
        <div className={styles.backBtn}>back to results</div>
      </Link>
      <div className={styles.mapOuterContainer}>
        <div className={styles.mapContainer}>
          <ShowMap location={location} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.headSection}>
          <div className={styles.nameAddrContainer}>
            <div className={styles.businessName}>
              {Bathroom.getBathroom.businessName}
            </div>
            <div className={styles.address}>{Bathroom.getBathroom.address}</div>
          </div>
          <div className={styles.voteContainer}>
            <div className={styles.upGroup}>
              <img src="/thumbsUp.png" alt="thumbs up" />
              93
            </div>
            <div className={styles.downGroup}>
              <img src="/thumbsDown.png" alt="thumbs down" />
              21
            </div>
          </div>
        </div>
        <div className={styles.description}>
          {Bathroom.getBathroom.description}
        </div>
        <BookmarkIndex
          setBookmark={setBookmark}
          isBookmarked={isBookmarked}
          currentState={isBookmarkedByUser}
          refetch={refetch}
          bathroomId={Bathroom_ID_Object}
          bookmarkId={bookmarkId}
        />
        <div className={styles.row}>
          <h4>Features</h4>
          {editAction}
        </div>
        <FeaturesScrollbar getBathroom={Bathroom.getBathroom} />
        <div className={styles.row}>
          <h4>Reviews</h4>
          <Link
            className={styles.btn}
            to={`/bathroom/${props.match.params.id}/createreview`}
          >
            <div>Add a review</div>
          </Link>
        </div>
        <div className={styles.reviews}>{showReviews}</div>
      </div>
    </div>
  );
};

export default ShowBathroomPage;
