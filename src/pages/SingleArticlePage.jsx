
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleById} from '../utils/Api';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn } from 'mdb-react-ui-kit';
import SinglePageCard from '../components/SinglePageCard';

import CommentSection from '../components/CommentSection';


const SingleArticlePage = () => {

  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    fetchArticleById(article_id)
    .then((articleFromApi) => {
      setArticle(articleFromApi);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [article_id]);


   const description = (article) => {
    return (article.topic === 'coding') ? 'Code is love, code is life' :
    (article.topic === 'football') ? 'FOOTIE!' :
    (article.topic === 'cooking') ? 'Hey good looking, what you got cooking?' :
    'No description available'
  }

    return ( 
        <MDBContainer>
            <MDBRow>
                <MDBCol md='8'>
                    <SinglePageCard article={article} />
                    <CommentSection article_id={article_id}/>
                </MDBCol>
                <MDBCol md='4'>
                <MDBCard className='h-auto'>
    <MDBCardImage
      src='https://mdbootstrap.com/img/new/standard/city/043.webp'
      alt='...'
      position='top'
    />
    <MDBCardBody>
      <MDBCardTitle>nc/
      {article.topic}
      </MDBCardTitle>
      <MDBCardText>
        {description(article)}
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

export default SingleArticlePage;