import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';

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
    <div>

      <Link to={`/bathroom/${props.match.params.id}`}><div>Cancel</div></Link>

      <input
        name='title'
        placeholder='Review Title'
        onChange={ handleChange }
        defaultValue={ form.title }
      />

      <input
        name='description'
        placeholder='Write your review!'
        onChange={ handleChange }
        defaultValue={ form.description }
      />

      <Mutation mutation={ POST_REVIEW } variables={ Post_Review_ID } onCompleted={() => props.history.push(`/bathroom/${route}/reviewsuccess`)}>
        { postReview => <button onClick={ postReview }>Post Review</button>}
      </Mutation>
    </div>
  )
}

export default CreateReviewPage;