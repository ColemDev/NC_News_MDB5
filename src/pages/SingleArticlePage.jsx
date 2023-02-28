
import React, { useState} from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleById } from '../utils/Api';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import SinglePageCard from '../components/SinglePageCard';

import CommentSection from '../components/CommentSection';
// import TopicExplainer from '../components/TopicExplainer';


const SingleArticlePage = () => {

  // lets think in steps, what needs to happen here?
  // 1. we need to get the article id from the url
  // 2. we need to fetch the article from the api
  // 3. we need to display the article on the page

  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  fetchArticleById(article_id)
    .then((article) => {
      setArticle(article);
    })
    .catch((err) => {
      console.log(err);
    });
/*article_id
title
topic
author
body
created_at
votes
article_img_url
comment_count*/

    return ( 
        <MDBContainer>
            <MDBRow>
                <MDBCol md='8'>
                    <SinglePageCard article={article}/>
                    <CommentSection />
                </MDBCol>
                <MDBCol md='4' className='mx-auto'>
                    {/* <TopicExplainer topic={article.topic} /> */}
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default SingleArticlePage;
