import React, { useState} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn } from 'mdb-react-ui-kit';
import ArticleList from '../components/ArticleList';
import { useParams } from 'react-router-dom';

const ArticlesListPage = () => {
 
const { topic_slug } = useParams();
const typeOfParam = typeof topic_slug;
const [topic, setTopic] = useState(topic_slug);

            return (
                <MDBContainer>
                    <MDBRow className='justify-content-center'>
                        <MDBCol className='col-md-8 mb-3'>
                                <ArticleList topic={topic} />
                        </MDBCol>
                        <MDBCol className='col-md-4 mb-3'>
                        <MDBCard className='h-auto'>
    <MDBCardImage
      src='https://mdbootstrap.com/img/new/standard/city/043.webp'
      alt='...'
      position='top'
    />
    <MDBCardBody>
      <MDBCardTitle>nc/AllArticles
      </MDBCardTitle>
      <MDBCardText>
        The most active posts from all of Northcoders News.
      </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter>
      <MDBBtn color='primary'>Create Post</MDBBtn>
    </MDBCardFooter>
  </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            );
};

export default ArticlesListPage;