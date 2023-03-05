import React from 'react'
import { MDBContainer }
 from 'mdb-react-ui-kit';
import CommentMenu from './CommentMenu';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const CommentSection = ({ article_id }) => {
  const loggedInUser = 'jessjelly';
  return ( 
    <MDBContainer className='mb-3'>
    <MDBContainer className='border border-primary rounded-3 p-3'>
    {/* Comment Form */}
          <CommentForm username={loggedInUser} article_id={article_id} />
    </MDBContainer>
    <MDBContainer className='border border-primary rounded-3 p-3'>
      {/* Comment Sort Menu */} 
          <CommentMenu />
    </MDBContainer>
    <MDBContainer className='border border-primary rounded-3 p-3'>
      {/* Comment List */}
          <CommentList article_id={article_id} />
    </MDBContainer>
    </MDBContainer>
  );
};

export default CommentSection;
