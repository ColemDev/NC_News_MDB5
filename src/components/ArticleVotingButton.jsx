import React, { useState } from 'react';
import { MDBContainer, MDBBtn, MDBIcon
 } from 'mdb-react-ui-kit';
//article.votes is passed in as a prop from ArticleList.jsx via <ArticleVotingButton votes={article.votes}/>
const ArticleVotingButton = ({ votes }) => {
    //takes in votes as a prop and sets it as the initial state then increments it by 1 or -1 depending on which button is clicked.
    const [voteCount, setVoteCount] = useState(votes);
    const incrementVoteCount = (increment) => {
        setVoteCount(voteCount + increment);
    };


    return (
        <MDBContainer className='d-flex flex-column justify-content-center align-items-center'>
            {/* upvote arrow button  */}
            <MDBBtn color='primary' onClick={() => incrementVoteCount(1)}>
                <MDBIcon icon='arrow-up' fas />
                </MDBBtn>
                {/* vote counter here */}
                <h6 className='text-center'>{voteCount}</h6>
                {/* downvote arrow button */}
                <MDBBtn color='primary' onClick={() => incrementVoteCount(-1)}>
                    <MDBIcon icon='arrow-down' fas />
                    </MDBBtn>
                    </MDBContainer>
    );
}

export default ArticleVotingButton;