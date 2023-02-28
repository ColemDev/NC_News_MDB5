import React, { useState} from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import ArticleList from '../components/ArticleList';
import { useParams } from 'react-router-dom';
// import ExplainerCard from '../components/ExplainerCard';

const ArticlesListPage = () => {
 
const { topic_slug } = useParams();
const typeOfParam = typeof topic_slug;
const [topic, setTopic] = useState(topic_slug);

            return (
                <MDBContainer>
                    <MDBRow className='row-cols-2 row-cols-md-2 justify-content-center'>
                        <MDBCol className='col-md-8 mb-3'>
                                {typeOfParam}
                                <ArticleList topic={topic} />
                        </MDBCol>
                        <MDBCol className='col-md-4 mb-3'>
                            {/* <ExplainerCard topic={topic} /> */}
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            );
        };

export default ArticlesListPage;