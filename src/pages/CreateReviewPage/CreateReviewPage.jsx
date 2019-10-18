import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import styles from "./CreateReviewPage.module.css";

const POST_REVIEW = gql`
  mutation postReview(
    $bathroomId: ID!
    $title: String!
    $description: String!
  ) {
    postReview(
      bathroomId: $bathroomId
      title: $title
      description: $description
    ) {
      id
    }
  }
`;

const CreateReviewPage = props => {
  const route = props.match.params.id;
  const [form, setForm] = useState({
    title: "",
    description: ""
  });

  const handleChange = event =>
    setForm({ ...form, [event.target.name]: event.target.value });

  const Post_Review_ID = {
    bathroomId: props.match.params.id,
    title: form.title,
    description: form.description
  };

  const [addReview] = useMutation(POST_REVIEW, {
    onCompleted() {
      props.history.push(`/bathroom/${route}/reviewsuccess`);
    }
  });

  return (
    <div className={styles.CreateReviewPage}>
      <Link
        className={styles.cancelBtn}
        to={`/bathroom/${props.match.params.id}`}
      >
        Cancel
      </Link>

      <h1>Review a bathroom</h1>
      <p>
        Tell us a little more about the bathroom you are using. On which floor
        is it located? Is it clean? Do you like the mirrors?
      </p>

      <textarea
        name="description"
        placeholder="Add your description here"
        onChange={handleChange}
        defaultValue={form.description}
      />

      <button
        className={styles.darkBtn}
        onClick={() => addReview({ variables: Post_Review_ID })}
      >
        Post to Reviews
      </button>
    </div>
  );
};

export default CreateReviewPage;
