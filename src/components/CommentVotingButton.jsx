import React, { useState } from 'react';
import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol, MDBCardText } from 'mdb-react-ui-kit';
// import { updateCommentVotes } from '../utils/Api';

const CommentVotingButton = ({ comment_id, votes }) => {
    const [currentVote, setCurrentVote] = useState(votes);
    const [count, setCount] = useState(currentVote);
    const [error, setError] = useState('');


    // const incrementCount = (increment) => {
    //     if (increment === 1) {
    //         setCount(count + 1);
    //     } else if (increment === -1) {
    //         setCount(count - 1);
    //     }
    //     updateCommentVotes(comment_id, increment)
    //     .catch((err) => {
    //         setError(err.response.data.msg);
    //         setCount(currentVote);
    //     });
    // }
    const incrementCount = (increment) => {
        if (increment === 1) {
            setCount(count + 1);
        } else if (increment === -1) {
            setCount(count - 1);
        }
    }
  
    return (
        <MDBContainer className='d-flex flex-column justify-content-center align-items-center'>
            <MDBRow className='row-cols-3 row-cols-md-3'>
                <MDBCol className='d-flex flex-column justify-content-center align-items-center'>
                    <MDBBtn color='primary' onClick={() => incrementCount(1)}>
                        <MDBIcon icon='arrow-up' fas />
                    </MDBBtn>
                </MDBCol>
                <MDBCol className='d-flex flex-column justify-content-center align-items-center'>
                    <MDBCardText>{count}</MDBCardText>
                </MDBCol>
                <MDBCol className='d-flex flex-column justify-content-center align-items-center'>
                    <MDBBtn color='primary' onClick={() => incrementCount(-1)}>
                        <MDBIcon icon='arrow-down' fas />
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default CommentVotingButton;