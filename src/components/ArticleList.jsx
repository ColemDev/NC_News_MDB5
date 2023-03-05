import React, {useState, useEffect} from 'react';
import { fetchArticles} from '../utils/Api';
import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';

import ArticleListCard from './ArticleListCard';

const ArticleList = ({ sort_by, order, topic }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchArticles(sort_by, order, topic)
        .then((articlesFromApi) => {
            setArticles(articlesFromApi);
        });
    }, [sort_by, order, topic]);

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

// export default ArticleList;