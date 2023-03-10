import React from "react";
import {
  MDBCard,
  MDBRow,
  MDBCol,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBCardFooter,
  MDBBtn,
  MDBIcon,
  MDBCardLink,
} from "mdb-react-ui-kit";
import ArticleVotingButton from "./ArticleVotingButton";
import { Link } from "react-router-dom";
import { dateFormatter } from "../utils/DateFormatter";

const ArticleListCard = ({ article }) => {
  return (
    <MDBCard shadow="0" border="primary" background="white" className="mb-3">
      <MDBRow className="row-cols-2 row-cols-md-2 justify-content-center">
        <MDBCol className="col-md-1">
          <ArticleVotingButton
            article_id={article.article_id}
            vote={article.votes}
          />
        </MDBCol>
        <MDBCol className="col-md-11">
          <MDBCardHeader>
            <MDBRow className="row-cols-3 row-cols-md-3 justify-content-center">
              <MDBCol className="col-md-auto">
                <MDBCardLink href={`/articles/topics/${article.topic}`}>
                  <p className="text-muted">nc/{article.topic}</p>
                </MDBCardLink>
              </MDBCol>
              <MDBCol className="col-md-auto">
                <p className="text-muted">Posted by: u/{article.author}</p>
              </MDBCol>
              <MDBCol className="col-md-auto">
                <p className="text-muted">
                  Posted: {dateFormatter(article.created_at)}
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>
              <MDBCardLink
                href={`/articles/id/${article.article_id}`}
                className="text-dark"
              >
                {article.title}
              </MDBCardLink>
            </MDBCardTitle>

            <MDBCardImage
              src={article.article_img_url}
              alt="..."
              position="top"
            />
          </MDBCardBody>
          <MDBCardFooter>
            <MDBBtn color="white" className="px-3">
              <Link to={`/articles/id/${article.article_id}`}>
                <MDBIcon far icon="comment-alt" /> {article.comment_count}{" "}
                Comments
              </Link>
            </MDBBtn>
          </MDBCardFooter>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
};

export default ArticleListCard;
