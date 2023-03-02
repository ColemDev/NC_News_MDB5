import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardHeader, MDBCardBody, MDBCardText, MDBBtn, MDBIcon,
MDBCardFooter } from 'mdb-react-ui-kit';
import {dateFormatter} from '../utils/DateFormatter';
import CommentVotingButton from './CommentVotingButton';

const CommentListCard = ({comment}) => {
    return (



<MDBCard key={comment.comment_id}>
<MDBCardHeader>
    <MDBRow>
        {/* aligned to the left */}
        <MDBCol className='d-flex flex-column justify-content-center align-items-start'>
            <p className='text-dark'>u/{comment.author}</p>
        </MDBCol>
        {/* aligned to the right */}
        <MDBCol className='d-flex flex-column justify-content-center align-items-end'>
            <p className='text-muted'>{dateFormatter(comment.created_at)}</p>
        </MDBCol>
        </MDBRow>
</MDBCardHeader>
    <MDBCardBody>
        <MDBCardText className='text-dark'>
            <p>{comment.body}</p>
        </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter>
    <MDBRow className='row-cols-3 row-cols-md-3'>
        <MDBCol>
            <CommentVotingButton comment_id={comment.comment_id} votes={comment.votes} />
        </MDBCol>
        <MDBCol>
          <MDBBtn color = 'white' className='text-muted'><MDBIcon icon='comment' fas /> Reply</MDBBtn>
        </MDBCol>
    </MDBRow>
    </MDBCardFooter>
</MDBCard>
    );
};

export default CommentListCard;