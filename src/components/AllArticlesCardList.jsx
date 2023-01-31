import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCardHeader,
  MDBCardFooter,
  MDBIcon,
} from "mdb-react-ui-kit";
import { fetchArticles } from "../utils/Api";

const AllArticlesCardList = () => {
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    fetchArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, []);

  const articleList = articles.map((article) => {
    return (
      <MDBBtn href={`/articles/${article.article_id}`}>
        <MDBCard>
          <MDBCardHeader>
            <MDBCardText>nc/{article.topic}</MDBCardText>
            <MDBCardText>
              posted by {article.author} {article.created_at}
            </MDBCardText>
          </MDBCardHeader>
          <MDBCardTitle>{article.title}</MDBCardTitle>
          <MDBCardBody>
            <MDBCardText>{article.slug}</MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <MDBCardText>
              <MDBBtn href={`/articles/${article.article_id}`}>
                <MDBIcon far icon="comment-alt" />
                {article.comment_count} comments
              </MDBBtn>
            </MDBCardText>
          </MDBCardFooter>
        </MDBCard>
      </MDBBtn>
    );
  });

  return <div>{articleList}</div>;
};

export default AllArticlesCardList;
