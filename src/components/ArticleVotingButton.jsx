import React, { useState } from 'react';
import { MDBContainer, MDBBtn, MDBIcon
 } from 'mdb-react-ui-kit';
 import { updateArticleVotes } from '../utils/Api';

const ArticleVotingButton = ({  article_id, vote }) => {
const [currentVote, setCurrentVote] = useState(vote);
const [count, setCount] = useState(currentVote);
const [error, setError] = useState('');

const incrementCount = (increment) => {
    if (increment === 1) {
        setCount(count + 1);
    } else if (increment === -1) {
        setCount(count - 1);
    }
    updateArticleVotes(article_id, increment)
    .catch((err) => {
        setError(err.response.data.msg);
        setCount(currentVote);
    });
};

return (
        
        <MDBContainer className='d-flex flex-column justify-content-center align-items-center'>
            {/* upvote arrow button  */}
            <MDBBtn color='primary' onClick={() => incrementCount(1)}>
                <MDBIcon icon='arrow-up' fas />
                </MDBBtn>
                {/* vote counter here */}
                <p>{count}</p>
                {/* downvote arrow button */}
                <MDBBtn color='primary' onClick={() => incrementCount(-1)}>
                    <MDBIcon icon='arrow-down' fas />
                    </MDBBtn>
                  {/* blank space unless error message is displayed */}
                    <p>{error}</p>
                    </MDBContainer>
    );
}

export default ArticleVotingButton;