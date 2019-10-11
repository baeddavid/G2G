import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import styles from './CreateReviewPage.module.css';

const CreateReviewPage = props => {

  const route = props.match.params.id;
  const [form, setForm] = useState({
    title: '',
    description: ''
  });

  const handleChange = event => setForm({ ...form, [event.target.name]: event.target.value });

  const POST_REVIEW = gql`
    mutation postReview($bathroomId: ID!, $title: String!, $description: String!) {
      postReview(bathroomId: $bathroomId, title: $title, description: $description) {
        id
      }
    }
  `

  const Post_Review_ID = {
    bathroomId: props.match.params.id,
    title: form.title,
    description: form.description
  };

  return(
    <div className={styles.CreateReviewPage}>

      <Link className={styles.cancelBtn} to={`/bathroom/${props.match.params.id}`}>Cancel</Link>

      <h1>Review a bathroom</h1>
      <p>Tell us a little more about the bathroom you are using. On which floor is it located? Is it clean? Do you like the mirrors?</p>

      {/* <input
        name='title'
        placeholder='Review Title'
        onChange={ handleChange }
        defaultValue={ form.title }
      /> */}

      <textarea
        name='description'
        placeholder='Add your description here'
        onChange={ handleChange }
        defaultValue={ form.description }
      />

      <Mutation mutation={ POST_REVIEW } variables={ Post_Review_ID } onCompleted={() => props.history.push(`/bathroom/${route}/reviewsuccess`)}>
        { postReview => <button className={styles.darkBtn} onClick={ postReview }>Post to Reviews</button>}
      </Mutation>
    </div>
  )
}

export default CreateReviewPage;