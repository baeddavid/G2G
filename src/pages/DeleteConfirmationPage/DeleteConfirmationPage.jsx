import React from 'react';
import { Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';

const DeleteConfirmationPage = (props) => {

  const DELETE_BATHROOM = gql`
  mutation deleteBathroom($id: ID!) {
    deleteBathroom(id: $id) {
      postedBy {
        name
      }
    }
  }
  `

  const Mutate_Bathroom_ID = {id: props.match.params.id};

  return(
    <div>
      <div>Are you sure you want to flush your bathroom?</div>
      <Mutation mutation={ DELETE_BATHROOM } variables={ Mutate_Bathroom_ID } onCompleted={ () => props.history.push(`/`) }>
        { deleteMutation => <div onClick={ deleteMutation }>Yes I'm sure!</div>}
      </Mutation>
      <Link to={`/bathroom/${props.match.params.id}`}><div>Take me back!</div></Link>
    </div>
  )
}

export default DeleteConfirmationPage;