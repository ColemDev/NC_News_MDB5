import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBCardFooter,
  MDBBtn,
  MDBIcon,
} from 'mdb-react-ui-kit';
import ExplainerCoding from '../explainers/ExplainerCoding';
import CommentsSection from '../components/CommentSection';
import ArticleVotingButton from '../components/ArticleVotingButton';


const SingleArticlePage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        {/* Article Column Left*/}
        <MDBCol md='8'>
          {/* <SinglePageCard/> */}
          {/* Article Card */}
          
          {/* Comment Section */}
          <CommentsSection />
        </MDBCol>
        {/* Explainer Column Right */}
        <MDBCol md='4' className='mx-auto'>
          <ExplainerCoding />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SingleArticlePage;
