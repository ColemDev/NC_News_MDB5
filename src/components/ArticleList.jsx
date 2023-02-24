import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
// import { fetchArticles, fetchArticlesByTopic } from '../utils/api';
import {fetchArticles} from '../utils/api';
import { articleListFunc } from '../utils/Functions';

// const ArticleList = (topic) => {
const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    //  if (topic === undefined) {
        fetchArticles().then((articlesFromApi) => {
            setArticles(articlesFromApi);
        });
    // </ArticleList>} else {
    //     fetchArticlesByTopic(topic).then((articlesFromApi) => {
    //         setArticles(articlesFromApi);
    //     });
    // }
    return (
        <MDBContainer>
            <MDBRow className='row-cols-2 row-cols-md-3 justify-content-center'>
                <MDBCol className='col-md-auto'>
                    {articleListFunc(articles)}
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default ArticleList;