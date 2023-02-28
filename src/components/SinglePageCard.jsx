import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardImage, MDBCardFooter, MDBBtn, MDBIcon, MDBRow, MDBCol , MDBCardLink, MDBCardText} from 'mdb-react-ui-kit';
import ArticleVotingButton from './ArticleVotingButton';
import { dateFormatter } from '../utils/DateFormatter';


const SinglePageCard = ({ article }) => {
 
    return (
        <MDBCard shadow='0' border='primary' background='white' className='mb-3'>
            <MDBRow>
              {/* left column of card is voting button component  */}
              <MDBCol md='1'>
                <ArticleVotingButton votes={article.votes} />
              </MDBCol>
              {/* right column of card is article component */}
              <MDBCol md='11'>
                <MDBCardHeader>
                  <MDBRow className='row-cols-3 row-cols-md-3'>
                    <MDBCol>
                        {/* link to list of topics  */}
                        <MDBCardLink href={`/topics/${article.topic}`}>
                            <p className='text-muted'>{`nc/${article.topic}`}</p>
                        </MDBCardLink>
                    </MDBCol>
                    <MDBCol>
                      <p className='text-muted'>Posted by: u/{article.author}</p>
                    </MDBCol>
                    <MDBCol>
                      <p className='text-muted'>Posted: {dateFormatter(article.created_at)}</p>
                    </MDBCol>
                  </MDBRow>
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>{article.title}</MDBCardTitle>
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

                 <MDBIcon fas icon='comment-alt' /> {article.comment_count} Comments
                            

                </MDBCardFooter>
              </MDBCol>
            </MDBRow>
          </MDBCard>
    );
};

export default SinglePageCard;