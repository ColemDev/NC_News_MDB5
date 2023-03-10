import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import ArticleListCard from "../components/ArticleListCard";
import { fetchArticles } from "../utils/Api";
import TopicDescriptionCard from "../components/TopicDescriptionCard";

const ArticlesListPage = () => {
  const [sort_by, setSort_by] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const { topic } = useParams();
  const [description, setDescription] = useState(topic ? topic : "All Topics");

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles(sort_by, order, topic).then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, [sort_by, order, topic]);

  const articleListRefresh = () => {
    setArticles([]);
    fetchArticles(sort_by, order, topic).then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  };

  return (
    <MDBContainer>
      <MDBRow className="row-cols-2 row-cols-md-3 justify-content-center">
          {/* left column */}
        <MDBCol className="col-md-8">
          <MDBContainer className="d-flex flex-column justify-content-center align-items-start">
            {/* sort_by and order select toggle */}
            <MDBRow className="row-cols-2 row-cols-md-2 justify-content-center">
              <MDBCol className="col-md-auto">
                <select
                  onChange={(event) => {
                    setSort_by(event.target.value);
                    articleListRefresh();
                  }}
                >
                  <option value="created_at">Date</option>
                  <option value="votes">Votes</option>
                </select>
              </MDBCol>
              <MDBCol className="col-md-auto">
                <select
                  onChange={(event) => {
                    setOrder(event.target.value);
                    articleListRefresh();
                  }}
                >
                  <option value="desc">Descending</option>
                  <option value="asc">Ascending</option>
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
        {/* right column */}
        <MDBCol className="col-md-4">
          <TopicDescriptionCard topic={description} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ArticlesListPage;
