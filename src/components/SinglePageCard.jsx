// import { fetchArticleById } from "../utils/Api";
// import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardImage, MDBCardFooter, MDBBtn, MDBIcon, MDBRow, MDBCol } from 'mdb-react-ui-kit';
// // import { Link } from 'react-router-dom';
// import ArticleVotingButton from './ArticleVotingButton';
// import { useState } from 'react';


// const SinglePageCard = (article_id) => {
//     const [article, setArticle] = useState([]);

//     fetchArticleById(article_id).then((articleFromApi) => {
//         setArticle(articleFromApi);
//     });

//     // the arguments are id, title, author, topic, date, votes, comment-count, body, articleImage
//     return (
//         <MDBCard shadow='0' border='primary' background='white' className='mb-3'>
//             <MDBRow>
//               {/* left column of card is voting button component  */}
//               <MDBCol md='1'>
//                 <ArticleVotingButton votes={article.votes} />
//               </MDBCol>
//               {/* right column of card is article component */}
//               <MDBCol md='11'>
//                 <MDBCardHeader>
//                   <MDBRow className='row-cols-3 row-cols-md-3'>
//                     <MDBCol>
//                       <p className='text-muted'>nc/`${article.topic}`</p>
//                       {/* <p className='text-muted'><Link to={`/topic/${article.topic}`}>{article.topic}</Link></p> */}
//                     </MDBCol>
//                     <MDBCol>
//                       <p className='text-muted'>Posted by: nc/`${article.author}`</p>
//                     </MDBCol>
//                     <MDBCol>
//                       <p className='text-muted'>Posted on: nc/`${article.date}`</p>
//                     </MDBCol>
//                   </MDBRow>
//                 </MDBCardHeader>
//                 <MDBCardBody>
//                   <MDBCardTitle>{article.title}</MDBCardTitle>
//                   <MDBCardImage
//                     src={article.articleImage}
//                     alt='...'
//                     position='top'
//                   />
//                   <MDBCardText>
//                     {article.body}
//                   </MDBCardText>
//                 </MDBCardBody>
//                 <MDBCardFooter>
//                   <MDBBtn color='primary'><MDBIcon fas icon='comment-alt' /> {article.commentCount} Comments</MDBBtn>
//                 </MDBCardFooter>
//               </MDBCol>
//             </MDBRow>
//           </MDBCard>
//     );
// };

// export default SinglePageCard;