import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import ArticleListCard from './ArticleListCard';

const ArticlesList = () => {
    return (
        <MDBContainer>
            <MDBRow className='row-cols-2 row-cols-md-3 justify-content-center'>
                <MDBCol className='col-md-auto'>
                    <ArticleListCard />
                </MDBCol>
                </MDBRow> 
        </MDBContainer>
    );
}


export default ArticlesList;