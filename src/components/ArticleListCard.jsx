import React from 'react';
import { MDBCard, MDBRow, MDBCol, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBCardFooter, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import ArticleVotingButton from './ArticleVotingButton';
import { Link } from 'react-router-dom';

const ArticleListCard = ({ article }) => {

    return (      
        <MDBCard shadow='0' border='primary' background='white' className='mb-3'>
        <MDBRow className='row-cols-2 row-cols-md-2 justify-content-center'>
    {/* left column of card is voting button component  */}
    <MDBCol className='col-md-1'>
        <ArticleVotingButton votes={article.votes}/>
    </MDBCol> 
    {/* right column of card is article component*/}
    <MDBCol className='col-md-11'>
        <MDBCardHeader>
            <MDBRow className='row-cols-2 row-cols-md-2'>
                <MDBCol className='col-md-4'>
                    <p className='text-muted'>nc/{article.topic}</p>
                </MDBCol>
                <MDBCol className='col-md-4'>
                    <p className='text-muted'>Posted by: u/{article.author}</p>
                </MDBCol>
                <MDBCol className='col-md-4'>
                    <p className='text-muted'>Posted on: nc/{article.date}</p>
                </MDBCol>
                </MDBRow>
                </MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle>`${article.title}`</MDBCardTitle>
                        </MDBCardBody>
                        <MDBCardImage
                        src={article.article_img_url}
                        alt='...'
                        position='top'
                        />
                        <MDBCardBody>
                            <MDBCardText>
                                {article.body}
                            </MDBCardText>
                            </MDBCardBody>
                        <MDBCardFooter>
                            <MDBBtn color='white' className='px-3'>
                                    <Link to={`/article/${article.article_id}`}>
                                     <MDBIcon far icon="comment-alt" /> {article.comment_count} Comments
                            
                            </Link>
                            </MDBBtn>
                                </MDBCardFooter>
                                </MDBCol>
                                </MDBRow> 
                                </MDBCard>

    )
}

export default ArticleListCard;