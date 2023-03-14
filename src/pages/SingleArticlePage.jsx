import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../utils/Api";
import {
  MDBContainer,
  MDBRow,
  MDBCol
} from "mdb-react-ui-kit";
import SinglePageCard from "../components/SinglePageCard";
import TopicDescriptionCard from "../components/TopicDescriptionCard";
import CommentSection from "../components/CommentSection";

const SingleArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    fetchArticleById(article_id)
      .then((articleFromApi) => {
        setArticle(articleFromApi);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);



  return (
    <MDBContainer>
      <MDBRow className="row-cols-2 row-cols-md-3 justify-content-center">
        <MDBCol md="8">
          <SinglePageCard article={article} />
          <CommentSection article_id={article_id} />
        </MDBCol>
        <MDBCol md="4">
          <TopicDescriptionCard topic={article.topic} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SingleArticlePage;
