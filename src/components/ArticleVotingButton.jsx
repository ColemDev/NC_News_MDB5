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
        
        <MDBContainer className='d-flex flex-column justify-content-center align-items-center'>
            {/* upvote arrow button  */}
               
            <MDBBtn color='primary' onClick={() => incrementCount(1)}>
                <MDBIcon icon='arrow-up' fas />
                </MDBBtn>
               
                
                
                {/* vote counter here */}
                <p>{currentVote}</p>
                
                
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