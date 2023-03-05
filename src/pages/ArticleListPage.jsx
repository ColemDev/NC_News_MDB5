import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import ArticleListCard from '../components/ArticleListCard';
import { fetchArticles } from '../utils/Api';

const ArticlesListPage = () => {
  const { topic } = useParams();
  // const urlParams = new URLSearchParams(location.search);

  // const [sort_by, setSortBy] = useState(urlParams.get('sort_by') || 'created_at');
  // const [order, setOrder] = useState(urlParams.get('order') || 'desc');
  // const [articles, setArticles] = useState([]);

  // const handleBasicClick = (sortBy) => {
  //   setSortBy(sortBy);
  // };

  useEffect(() => {
    fetchArticles(sort_by, order, topic).then((data) => {
      setArticles(data);
    });
  }, [sort_by, order, topic]);

  return (
    <MDBContainer>
      <MDBRow className='row-cols-2 row-cols-md-3 justify-content-center'>
        <MDBCol className='col-md-auto'>
          <MDBTabs className='mb-3'>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleBasicClick('created_at')} active={sort_by === 'created_at'}>
                Newest
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleBasicClick('comment_count')} active={sort_by === 'comment_count'}>
                Most Popular
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleBasicClick('votes')} active={sort_by === 'votes'}>
                Most Controversial
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          <MDBTabsContent>
            <MDBTabsPane show={true}>
              {articles.map((article) => (
                <ArticleListCard key={article.article_id} article={article} />
              ))}
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ArticlesListPage;
