import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import ArticleListCard from '../components/ArticleListCard';
import { fetchArticles } from '../utils/Api';

const ArticlesListPage = () => {
  const [sort_by, setSort_by] = useState('created_at');
  const [order, setOrder] = useState('desc');
  const { topic } = useParams();

 
  
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles(sort_by, order, topic).then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, [sort_by, order, topic]);

  const articleList = () => {
    setArticles([]);
    fetchArticles(sort_by, order, topic).then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  };



  return (
    <MDBContainer>
      <MDBRow className='row-cols-2 row-cols-md-3 justify-content-center'>
        <MDBCol className='col-md-auto'>
            <MDBContainer className='d-flex flex-column justify-content-center align-items-start'>
              {/* sort_by and order select toggle */}
              <MDBRow className='row-cols-2 row-cols-md-2 justify-content-center'>
                <MDBCol className='col-md-auto'>
          <select onChange={(event) => {
            setSort_by(event.target.value);
            articleList();
          }
          }>
            <option value='created_at'>Date</option>
            <option value='votes'>Votes</option>
            </select>
            </MDBCol>
            <MDBCol className='col-md-auto'>
            <select onChange={(event) => {
            setOrder(event.target.value);
            articleList();
          }
          }>
            <option value='desc'>Descending</option>
            <option value='asc'>Ascending</option>
            </select>
            </MDBCol>
            </MDBRow>
            </MDBContainer>
            <MDBContainer>
            {/* article list */}
        {articles.map((article) => (
          <ArticleListCard article={article} />
              ))}
              </MDBContainer>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ArticlesListPage;
