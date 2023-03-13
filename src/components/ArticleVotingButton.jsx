import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol, MDBCardText
 } from 'mdb-react-ui-kit';
 import { updateArticleVotes, fetchArticleById } from '../utils/Api';

const ArticleVotingButton = ({ article_id}) => {
const [voteCount, setVoteCount] = useState(0);
const [error, setError] = useState('');

useEffect(() => {
    fetchArticleById(article_id)
    .then((article) => {
        setVoteCount(article.votes);
    })
    .catch((err) => {
        console.log(err);
    });
}, [article_id]);

const handleIncrement = (increment) => {
    //can't vote below 0
    if (voteCount + increment < 0) {
        setError('You cannot vote below 0');
    } else {
        if (increment === 1) {
            setVoteCount(voteCount + 1);
        }
        if (increment === -1) {
            setVoteCount(voteCount - 1);
        }
        updateArticleVotes(article_id, increment)
        .catch((err) => {
            setError(err.response.data.msg);
            setVoteCount(voteCount);
        });
    }
}


return (
    <MDBContainer>
 
        <MDBRow>
            <MDBCol>
                <div className='d-flex justify-content-center'>
                    {/* upvote arrow button */}
                    <MDBBtn color='primary' onClick={() => handleIncrement(1)} >
                        <MDBIcon icon='arrow-up' fas />
                    </MDBBtn>
                </div>
            </MDBCol>
        </MDBRow>
    
        <MDBRow>
            <MDBCol>
                <div className='d-flex justify-content-center'>
                    {/* vote counter must always have a correct number , when first rendered and after voting buttons are clicked */}
                    <MDBCardText>{voteCount}</MDBCardText>
                </div>
            </MDBCol>
        </MDBRow>
      
        <MDBRow>
            <MDBCol>
                <div className='d-flex justify-content-center'>
                    {/* downvote arrow button */}
                    <MDBBtn color='primary' onClick={() => handleIncrement(-1)}>
                        <MDBIcon icon='arrow-down' fas />
                    </MDBBtn>
                </div>
                <div> {error} </div>

     
            </MDBCol>
        </MDBRow>
    </MDBContainer>
    );
}

export default ArticleVotingButton;