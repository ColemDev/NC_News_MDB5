import React, { useState} from 'react';
import { MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import CommentListCard from './CommentListCard';
import {fetchCommentsByArticleId} from '../utils/Api';

const CommentList = ({article_id}) => {
    const [comments, setComments] = useState([]);
    
    fetchCommentsByArticleId(article_id)
    .then((commentsFromApi) => {
        setComments(commentsFromApi);
    })
    .catch((err) => {
        console.log(err);
    });
    // the comment keys are comment_id,body,article_id,author,votes,created_at
    return (
        <MDBContainer>
            <MDBRow >
        <MDBCol>
          {comments.map((comment) => {
            return (
                <CommentListCard comment={comment} />
            );
            })}
        </MDBCol>
    </MDBRow>
</MDBContainer>
    );
};

export default CommentList;