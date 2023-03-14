import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardText,
  MDBBtn,
  MDBIcon,
  MDBCardFooter,
} from "mdb-react-ui-kit";
import { fetchCommentsByArticleId, deleteCommentById } from "../utils/Api";
import { dateFormatter } from "../utils/DateFormatter";
import CommentVotingButton from "./CommentVotingButton";


const CommentList = ({ loggedInAuthor, article_id }) => {
  const [comments, setComments] = useState([]);
  const [deleteError, setDeleteError] = useState(null);
  const [DeleteMessage, setDeleteMessage] = useState("Delete");

  const DeleteButton = ({ comment_id, loggedInAuthor, commentAuthor }) => {
    if (loggedInAuthor === commentAuthor) {
      return (
        <MDBBtn
          color="white"
          className="text-muted"
          onClick={() => {
            CommentDelete({ comment_id });
          }}
        >
          <MDBIcon fas icon="trash" />
          {DeleteMessage}
        </MDBBtn>
      );
    } else {
      return null;
    }
  };

  const CommentDelete = ({ comment_id }) => {
    setDeleteMessage("Deleting...");
    deleteCommentById(comment_id)
      .then(() => {
        setDeleteMessage("Reloading page...");
        window.location.reload();
      })
      .catch((err) => {
        setDeleteError(err);
      });
  };

  useEffect(() => {
    fetchCommentsByArticleId(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [article_id]);

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          {comments.map((comment) => (
            <MDBCard
              key={comment.comment_id}
              author={comment.author}
              className="mb-3 border border-primary rounded-3"
            >
              <MDBCardHeader>
                <MDBRow>
                  <MDBCol className="d-flex flex-column justify-content-center align-items-start">
                    <p className="text-dark">u/{comment.author}</p>
                  </MDBCol>
                  <MDBCol className="d-flex flex-column justify-content-center align-items-end">
                    <p className="text-muted">
                      {dateFormatter(comment.created_at)}
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBCardText className="text-dark">
                  <p>{comment.body}</p>
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <MDBRow className="row-cols-3 row-cols-md-3">
                  <MDBCol>
                    <CommentVotingButton
                      comment_id={comment.comment_id}
                      votes={comment.votes}
                    />
                  </MDBCol>
                  <MDBCol>
                    <DeleteButton
                      comment_id={comment.comment_id}
                      loggedInAuthor={loggedInAuthor}
                      commentAuthor={comment.author}
                    />
                  </MDBCol>
                </MDBRow>
              </MDBCardFooter>
            </MDBCard>
          ))}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default CommentList;
