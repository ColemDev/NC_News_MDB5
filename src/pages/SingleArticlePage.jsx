import {
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
// import CommentSection from '../components/CommentSection';
// import TopicExplainer from '../components/TopicExplainer';
import { useParams } from 'react-router-dom';
import SinglePageCard from '../components/SinglePageCard';
import { fetchArticleById } from '../utils/Api';

/*
passed from articlelistcard with   <MDBCardLink href={`/article/${article.article_id}`} className='text-dark'>{article.title}</MDBCardLink>        

to app.jsx which passes the id via
<Route path="/article/:article_id" element={<SingleArticlePage />} />*/

const SingleArticlePage = () => {
  const { article_id } = useParams();

  return (
    <MDBContainer>
      {article_id}
    </MDBContainer>
  );
};

//     <MDBContainer>
//       <MDBRow>
//         {/* Article Column Left*/}
//         <MDBCol md='8'>
//           {/* <SinglePageCard article={article} /> */}
//           {/* lets just return the object for now */}
//           {article}

//           {/* Comment Section */}
//           {/* <CommentSection /> */}
//         </MDBCol>
//         {/* Explainer Column Right */}
//         <MDBCol md='4' className='mx-auto'>
//           {/* <TopicExplainer topic={article.topic} /> */}
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// };

export default SingleArticlePage;
