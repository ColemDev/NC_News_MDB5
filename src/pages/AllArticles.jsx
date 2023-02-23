import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import ArticleList from '../components/ArticleList';
import ExplainerAllArticles from '../explainers/ExplainerAllArticles';

const AllArticles = () => {
  return (
    <MDBContainer>
      <MDBRow className='row-cols-2 row-cols-md-2 justify-content-center'>
        <MDBCol className='col-md-8 mb-3'>
          <ArticleList />
        </MDBCol>
        <MDBCol className='col-md-4 mb-3'>
          <ExplainerAllArticles />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default AllArticles;