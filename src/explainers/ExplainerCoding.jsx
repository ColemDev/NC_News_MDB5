import React from 'react';
import {
    MDBBtn,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBContainer,
  } from 'mdb-react-ui-kit';


const ExplainerCoding = () => {

return (
<MDBContainer>
<MDBCard className='h-auto'>
<MDBCardImage
  src='https://mdbootstrap.com/img/new/standard/city/043.webp'
  alt='...'
  position='top'
/>
<MDBCardBody>
  <MDBCardTitle>nc/Coding</MDBCardTitle>
  <MDBCardText>
  It seems many people who program computers, or do web design, or networks, or something technically computer related also seem to have some form of nc/ADHD. We thought we'd start this topic to discuss techniques we use to cope, experiences we've had, etc. Open to anyone who wants to hang out and be constructive, learn, teach, or offer a helping hand. This is a subclass of nc/ADHD. ;-) </MDBCardText>
</MDBCardBody>
<MDBCardFooter>
          <MDBBtn color='primary'>Create Post</MDBBtn>
</MDBCardFooter>
</MDBCard>
</MDBContainer>
);
};

export default ExplainerCoding;
