import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol, MDBCardText
 } from 'mdb-react-ui-kit';
 import { updateArticleVotes } from '../utils/Api';

const ArticleVotingButton = ({  article_id, vote }) => {
 
    
const [currentVote, setCurrentVote] = useState(vote);
const [count, setCount] = useState(currentVote);
const [error, setError] = useState('');

useEffect(() => {
    setCurrentVote(count);
}, [count]);

const incrementCount = (num) => {
    if (count + num < 0) {
        setError('You cannot vote lower than 0');
    } else {
        setCount(count + num);
        updateArticleVotes(article_id, num);
    }
};



return (
        
    //  vertically stacked buttons
    <MDBContainer className='d-flex flex-column'>
        <MDBRow className='row-cols-1 row-cols-md-1'>
            <MDBCol className='col-md-1'>
                <MDBContainer>
            {/* upvote arrow button  */}
            <MDBBtn color='primary' onClick={() => incrementCount(1)}>
                <MDBIcon icon='arrow-up' fas />
                </MDBBtn>
                </MDBContainer>
                <MDBContainer>
                {/* vote counter here */}
                <p>{currentVote}</p>
                </MDBContainer>
                <MDBContainer>
                {/* downvote arrow button */}
                <MDBBtn color='primary' onClick={() => incrementCount(-1)}>
                    <MDBIcon icon='arrow-down' fas />
                    </MDBBtn>
                    </MDBContainer>
                    <MDBContainer>
                  {/* blank space unless error message is displayed */}
                    <MDBCardText>{error}</MDBCardText>
                    </MDBContainer>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
    );
}

export default ArticleVotingButton;