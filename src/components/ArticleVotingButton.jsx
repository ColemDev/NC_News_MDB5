import React from 'react';
import { MDBContainer, MDBBtn, MDBIcon
 } from 'mdb-react-ui-kit';

const ArticleVotingButton = () => {
    return (
        <MDBContainer className='d-flex flex-column justify-content-center align-items-center'>
            {/* upvote arrow button  */}
            <MDBBtn color='primary'>
                <MDBIcon icon='arrow-up' fas />
                </MDBBtn>
                {/* vote counter here */}
                <h6 className='text-center'>24k</h6>
                {/* downvote arrow button */}
                <MDBBtn color='primary'>
                    <MDBIcon icon='arrow-down' fas />
                    </MDBBtn>
                    </MDBContainer>
    );
}

export default ArticleVotingButton;