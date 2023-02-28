import React, {useState} from 'react';
import { fetchArticles} from '../utils/Api';
import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';

import ArticleListCard from './ArticleListCard';
const ArticleList = ({ topic }) => {
    const [articles, setArticles] = useState([]);
    if (topic === 'all') {
        fetchArticles().then((articles) => {
            setArticles(articles);
        });
    } else {
        fetchArticles(topic).then((articles) => {
            setArticles(articles);
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