import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import { loggedInUser , profileName} from "../utils/loggedInProfile";

const CommentSection = ({ article_id }) => {

  return (
    <>
      <MDBContainer className="border border-primary rounded-3 p-3">
        <CommentForm username={loggedInUser} article_id={article_id} />
      </MDBContainer>

      <MDBContainer className="border border-primary rounded-3 p-3">
        <CommentList article_id={article_id} loggedInAuthor={profileName} />
      </MDBContainer>
    </>
  );
};

export default CommentSection;
