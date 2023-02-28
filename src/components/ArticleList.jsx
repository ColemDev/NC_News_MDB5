import React, {useState} from 'react';
import { fetchArticles, fetchArticlesByTopic } from '../utils/Api';
import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';

import ArticleListCard from './ArticleListCard';

const ArticleList = ({ topic }) => {
    const [articles, setArticles] = useState([]);
    if (topic) {
        fetchArticlesByTopic(topic).then((articlesFromApi) => {
            setArticles(articlesFromApi);
        });
    } else {
        fetchArticles().then((articlesFromApi) => {
            setArticles(articlesFromApi);
        });
    }
    
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