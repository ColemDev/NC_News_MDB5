import React from 'react';
import { MDBCard, MDBRow, MDBCol, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBCardFooter, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import ArticleVotingButton from './ArticleVotingButton';
import { Link } from 'react-router-dom'


const ArticleListCard = () => {
return (
    <MDBCard shadow='0' border='primary' background='white' className='mb-3'>
    <MDBRow className='row-cols-2 row-cols-md-2 justify-content-center'>
        {/* left column of card is voting button component  */}
        <MDBCol className='col-md-1'>
            <ArticleVotingButton />
        </MDBCol> 
        {/* right column of card is article component*/}
        <MDBCol className='col-md-11'>
            <MDBCardHeader>
                <MDBRow className='row-cols-2 row-cols-md-2'>
                    <MDBCol className='col-md-4'>
                        <p className='text-muted'>nc/topic</p>
                    </MDBCol>
                    <MDBCol className='col-md-4'>
                        <p className='text-muted'>Posted by: nc/user</p>
                    </MDBCol>
                    <MDBCol className='col-md-4'>
                        <p className='text-muted'>Posted on: nc/date</p>
                    </MDBCol>
                    </MDBRow>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle>Article Slug</MDBCardTitle>
                        <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                            </MDBCardText>
                            </MDBCardBody>
                            <MDBCardImage
                            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                            alt='...'
                            position='top'
                            />
                            <MDBCardFooter>
                                <MDBBtn color='primary' size='sm'>
                                <MDBIcon far icon="comment-alt" />
                       <Link to='/article/test'> 422 Comments</Link>
                                </MDBBtn>
                                    </MDBCardFooter>
                                    </MDBCol>
                                    </MDBRow> 
                                    </MDBCard>
)
}

export default ArticleListCard;
