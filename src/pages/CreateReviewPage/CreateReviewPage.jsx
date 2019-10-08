import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const CreateReviewPage = (props) => {

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
  console.log(props);
  const Post_Review_ID = {
    bathroomId: props.match.params.id,
    title: form.title,
    description: form.description
  };

  return(
    <div>
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
      <Mutation mutation={ POST_REVIEW } variables={ Post_Review_ID } onCompleted={() => props.history.push(`/`)}>
        { postReview => <button onClick={ postReview }>Post Review</button>}
      </Mutation>
    </div>
  )
}

export default CreateReviewPage;