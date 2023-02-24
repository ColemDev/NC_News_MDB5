import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import {CommentsSection, SinglePageCard, TopicExplainer} from '../components';


const SingleArticlePage = (article_id) => {
  return (
    <MDBContainer>
      <MDBRow>
        {/* Article Column Left*/}
        <MDBCol md='8'>
          <SinglePageCard article_id={article_id} />
          {/* Comment Section */}
          <CommentsSection />
        </MDBCol>
        {/* Explainer Column Right */}
        <MDBCol md='4' className='mx-auto'>
          <TopicExplainer topic={article.topic} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SingleArticlePage;
