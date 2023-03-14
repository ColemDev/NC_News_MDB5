import React from 'react'
import { MDBContainer }
 from 'mdb-react-ui-kit';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const CommentSection = ({ article_id }) => {
  const loggedInUsername = 'jessjelly';
  const loggedInUsersName = 'Jess Jelly';
  return ( 
    <>
    <MDBContainer className='border border-primary rounded-3 p-3'>
          <CommentForm username={loggedInUsername} article_id={article_id} />
    </MDBContainer>
 
    <MDBContainer className='border border-primary rounded-3 p-3'>
          <CommentList article_id={article_id} loggedInUser={loggedInUsersName} />
    </MDBContainer>
    </>
  );
};

export default CommentSection;
