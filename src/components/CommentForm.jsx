import React, { useState, useEffect } from "react";
import {
  MDBInput,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { postCommentToArticle_id } from "../utils/Api";

const CommentForm = ({ username, article_id }) => {
  const [comment, setComment] = useState("");
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    postCommentToArticle_id(article_id, username, comment).then((comment) => {
      setCommentSubmitted(true);
    });
  };

  useEffect(() => {
    if (commentSubmitted) {
      setComment("");
      setCommentSubmitted(false);
    }
  }, [commentSubmitted]);

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <form onSubmit={handleSubmit}>
            <MDBInput
              label={`Comment as ${username}`}
              type="textarea"
              rows="3"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
            <MDBBtn type="submit" color="primary">
              Submit
            </MDBBtn>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default CommentForm;
