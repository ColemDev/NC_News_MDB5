// import React, { useState } from 'react';
// // import { useParams } from 'react-router-dom';
// import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
// // import { fetchArticles, fetchArticlesByTopic } from '../utils/api';
// import {fetchArticles} from '../utils/Api';
// import { articleListFunc } from '../utils/Functions';
// import TopicExplainer from './TopicExplainer';


// const ArticleList = (TopicExplainer
//     // const { topic } = useParams();
// ) => {

//     const [articles, setArticles] = useState([]);
//     //  if (topic === undefined) {
//         fetchArticles().then((articlesFromApi) => {
//             setArticles(articlesFromApi);
//         });
//     // </ArticleList>} else {
//     //     fetchArticlesByTopic(topic).then((articlesFromApi) => {
//     //         setArticles(articlesFromApi);
//     //     });
//     // }
//     return (
//       
//                     {articleListFunc(articles)}
//                 </MDBCol>
//             </MDBRow>
//         </MDBContainer>
//     );
// };

import React, {useState} from 'react';
import { fetchArticles } from '../utils/Api';
import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';

import ArticleListCard from './ArticleListCard';

const ArticleList = () => {

    const [articles, setArticles] = useState([]);

    fetchArticles().then((articles) => {
        setArticles(articles);
    });

    return (
        <MDBContainer>
        <MDBRow className='row-cols-2 row-cols-md-3 justify-content-center'>
             <MDBCol className='col-md-auto'>
                {articles.map((article) => {
    return (
        <ArticleListCard article={article}/>
)
})}
</MDBCol>
</MDBRow>
</MDBContainer>
)
}

export default ArticleList;