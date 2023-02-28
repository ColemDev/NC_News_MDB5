// import React from 'react';
// import {
//     MDBBtn,
//     MDBCard,
//     MDBCardImage,
//     MDBCardBody,
//     MDBCardTitle,
//     MDBCardText,
//     MDBCardFooter,
//     MDBContainer,
//   } from 'mdb-react-ui-kit';
// import fetchTopics from '../utils/Api';


const ExplainerCard = ({ topic }) => {
    if (topic === undefined) {
      return (
        <MDBContainer>
          <MDBCard className='h-auto'>
            <MDBCardImage
              src='https://mdbootstrap.com/img/new/standard/city/043.webp'
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>nc/allArticles</MDBCardTitle>
              <MDBCardText>
                The most active posts from all of Northcoders News.
                Com here to see new posts rising and be part of the conversation.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <MDBBtn color='primary'>Create Post</MDBBtn>
            </MDBCardFooter>
          </MDBCard>
        </MDBContainer>
      );
    } else {
      const allTopics = fetchTopics();
      allTopics.forEach(topicObj => {
        const { slug, description } = topicObj;
        if(topic === slug) {
          return (
            <MDBContainer>
              <MDBCard className='h-auto'>
                <MDBCardImage
                  src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                  alt='...'
                  position='top'
                />
                <MDBCardBody>
                  <MDBCardTitle>nc/`${slug}`</MDBCardTitle>
                  <MDBCardText>
                    `${description}`
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter>
                  <MDBBtn color='primary'>Create Post</MDBBtn>
                </MDBCardFooter>
              </MDBCard>
            </MDBContainer>
          );
        }
      });
    }
  };

  export default ExplainerCard;