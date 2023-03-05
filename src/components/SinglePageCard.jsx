import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBCardHeader, MDBIcon, MDBCardFooter, MDBCardLink } from 'mdb-react-ui-kit';
import ArticleVotingButton from  './ArticleVotingButton';
import { dateFormatter } from '../utils/DateFormatter';

const SinglePageCard = ({ article }) => {
 
    return (
      <MDBCard shadow='0' border='primary' background='white' className='mb-3'>
      <MDBRow>
          <MDBCol className='col-md-1'>
             <ArticleVotingButton article_id = {article.article_id} vote = {article.votes}/>
          </MDBCol>
          <MDBCol className='col-md-11'>
            <MDBCardHeader>
             <MDBRow className='row-cols-3 row-cols-md-3'>
                  <MDBCol className='col-md-4'>
                    <MDBCardLink href={`/articles?topic=${article.topic}`}>
                <p className='text-muted'>
                  nc/{article.topic}
                </p> 
                    </MDBCardLink>
                  </MDBCol>
                  <MDBCol>
      <p className='text-muted'>Posted by: u/{article.author}</p>
                  </MDBCol>
                  <MDBCol>
      <p className='text-muted'>Posted: {dateFormatter(article.created_at)}
      </p>
                  </MDBCol>
              </MDBRow>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>
                {article.title}
              </MDBCardTitle>
              <MDBCardImage
                src={article.article_img_url}
                alt='...'
                position='top'
              />
              <MDBCardText>
                {article.body}
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <MDBRow>
                <MDBCol>
                  <MDBIcon far icon="comment-alt" /> {article.comment_count} Comments
                </MDBCol>
            </MDBRow>
            </MDBCardFooter>
          </MDBCol>
      </MDBRow>
      </MDBCard>
    );
};

export default SinglePageCard;