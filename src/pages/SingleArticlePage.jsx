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
          {/* Article Card */}
          <MDBCard shadow='0' border='primary' background='white' className='mb-3'>
            <MDBRow>
              {/* left column of card is voting button component  */}
              <MDBCol md='1'>
                <ArticleVotingButton />
              </MDBCol>
              {/* right column of card is article component */}
              <MDBCol md='11'>
                <MDBCardHeader>
                  <MDBRow className='row-cols-3 row-cols-md-3'>
                    <MDBCol>
                      <p className='text-muted'>nc/topic</p>
                    </MDBCol>
                    <MDBCol>
                      <p className='text-muted'>Posted by: nc/user</p>
                    </MDBCol>
                    <MDBCol>
                      <p className='text-muted'>Posted on: nc/date</p>
                    </MDBCol>
                  </MDBRow>
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Article Title</MDBCardTitle>
                  <MDBCardText>
                    <strong>Article Slug </strong>
                  </MDBCardText>
                  <MDBCardImage
                    src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                    alt='...'
                    position='top'
                  />
                  <MDBCardText>
                    main content
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter>
                  {/* <MDBBtn color='primary'><MDBIcon fas icon='comment-alt' /> 422 Comments</MDBBtn> */}
                </MDBCardFooter>
              </MDBCol>
            </MDBRow>
          </MDBCard>
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
