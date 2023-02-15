import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBCard,
  MDBCardImage,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

const AllArticles = () => {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBContainer>
      {/* navbar  */}
      <MDBNavbar expand='lg' light bgColor='light' sticky='top'>
        <MDBContainer>
          <MDBNavbarBrand href='#'>
            <MDBIcon icon='Logo' fas />
            Northcoders News
          </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-1 mb-sm-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Topics
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Football</MDBDropdownItem>
                  <MDBDropdownItem link>Coding</MDBDropdownItem>
                  <MDBDropdownItem link>Cooking</MDBDropdownItem>

          
                  
                  {/* {getTopics().array.forEach(element => {
                    return <MDBDropdownItem link>{getArticlesByTopic(element)}</MDBDropdownItem>
  */}  </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            </MDBNavbarNav>
          {/* <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Search NC News' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form> */}
          <MDBNavbarNav className='mb-2 mb-sm-0 justify-content-end'>
          {/* profile dropdown */}
          <MDBNavbarItem>
          <MDBDropdown>
            <MDBDropdownToggle tag='a' className='nav-link' role='button'>
              <MDBIcon icon='user' fas />Hardcore-Muppetry2023

            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem link>Profile</MDBDropdownItem>
              </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
{/* end of navbar  */}
<MDBContainer>
   <MDBRow className='row-cols-2 row-cols-md-3 justify-content-center'>
   {/* Article Column of Reddit Clone*/}
          <MDBCol className='col-md-6'>
          <MDBCard shadow='0' border='primary' background='white' className='mb-3'>
        <MDBRow className='row-cols-2 row-cols-md-2'>
            {/* left column of card is voting button component  */}
            <MDBCol className='col-md-1'>
                {/* upvote arrow button  */}
                <MDBBtn color='primary'>
                    <MDBIcon icon='arrow-up' fas />
                </MDBBtn>
                {/* vote counter here */}
                <p>24k.0k</p>
                {/* downvote arrow button */}
                <MDBBtn color='primary'>
                    <MDBIcon icon='arrow-down' fas />
                </MDBBtn>
            </MDBCol> 
            {/* right column of card is article component and should be the equivalent of 640px wide */}
            <MDBCol className='col-md-11'>

             <MDBCardHeader>
                    <MDBRow className='row-cols-3 row-cols-md-3'>
                        <MDBCol>
                            <p className='text-muted'>nc/topic</p>
                        </MDBCol>
                        <MDBCol>
                            <p className='text-muted'>Posted by: nc/user</p>
                        </MDBCol>
                        <MDBCol>
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
                    <MDBBtn color='primary'><MDBIcon icon='comment' fas /> 422 Comments</MDBBtn>
                  </MDBCardFooter>
            </MDBCol>
        </MDBRow> 
            </MDBCard>
            <MDBCard shadow='0' border='primary' background='white' className='mb-3'>
        <MDBRow className='row-cols-2 row-cols-md-2'>
            {/* left column of card is voting button component  */}
            <MDBCol className='col-md-1'>
                {/* upvote arrow button  */}
                <MDBBtn color='primary'>
                    <MDBIcon icon='arrow-up' fas />
                </MDBBtn>
               {/* vote counter here */}
                <p className='text-muted justify-content-center'>24k</p>
                {/* downvote arrow button */}
                <MDBBtn color='primary'>
                    <MDBIcon icon='arrow-down' fas />
                </MDBBtn>
            </MDBCol> 
            {/* right column of card is article component and should be the equivalent of 640px wide */}
            <MDBCol className='col-md-11'>

             <MDBCardHeader>
                    <MDBRow className='row-cols-3 row-cols-md-3'>
                        <MDBCol>
                            <p className='text-muted'>nc/topic</p>
                        </MDBCol>
                        <MDBCol>
                            <p className='text-muted'>Posted by: nc/user</p>
                        </MDBCol>
                        <MDBCol>
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
                    <MDBBtn color='primary'><MDBIcon icon='comment' fas /> 422 Comments</MDBBtn>
                  </MDBCardFooter>
            </MDBCol>
        </MDBRow> 
            </MDBCard>
            <MDBCard shadow='0' border='primary' background='white' className='mb-3'>
        <MDBRow className='row-cols-2 row-cols-md-2'>
            {/* left column of card is voting button component  */}
            <MDBCol className='col-md-1'>
                {/* upvote arrow button  */}
                <MDBBtn color='primary'>
                    <MDBIcon icon='arrow-up' fas />
                </MDBBtn>
                {/* vote counter here */}
                <p className='text-muted justify-content-center'>24k</p>
                {/* downvote arrow button */}
                <MDBBtn color='primary'>
                    <MDBIcon icon='arrow-down' fas />
                </MDBBtn>
            </MDBCol> 
            {/* right column of card is article component and should be the equivalent of 640px wide */}
            <MDBCol className='col-md-11'>

             <MDBCardHeader>
                    <MDBRow className='row-cols-3 row-cols-md-3'>
                        <MDBCol>
                            <p className='text-muted'>nc/topic</p>
                        </MDBCol>
                        <MDBCol>
                            <p className='text-muted'>Posted by: nc/user</p>
                        </MDBCol>
                        <MDBCol>
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
                    <MDBBtn color='primary'><MDBIcon icon='comment' fas /> 422 Comments</MDBBtn>
                  </MDBCardFooter>
            </MDBCol>
        </MDBRow> 
            </MDBCard>
          </MDBCol>
          {/* Page Description of Reddit Clone, should be equivalent of 312px wide*/}
          <MDBCol className='col-md-3'>
            
            <MDBCard className='h-auto'>
              <MDBCardImage
                src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                alt='...'
                position='top'
              />
              <MDBCardBody>
                <MDBCardTitle>nc/all</MDBCardTitle>
                <MDBCardText>
                 The most active posts from all of Northcoders News.
                 Com here to see new posts rising and be part of the conversation.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                        <MDBBtn color='primary'>Create Post</MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol> 
        </MDBRow>
        </MDBContainer>
    </MDBContainer>
  );
};
export default AllArticles;
