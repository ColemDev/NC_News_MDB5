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
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Link</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                Disabled
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
<MDBContainer>
   <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
   {/* Article Column of Reddit Clone  */}
          <MDBCol> 
            <MDBCard className='h-100'>
        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
            {/* left column is voting button component */}
            <MDBCol>
                {/* upvote arrow button */}
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
            {/* right column is article component */}
            <MDBCol>
              <MDBCardImage
                src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                alt='...'
                position='top'
              />
              <MDBCardBody>
                <MDBCardHeader>
                    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                        <MDBCol>
                            <MDBBtn color='primary'>nc/topicnamehere</MDBBtn>
                        </MDBCol>
                        <MDBCol>
                            <p className='text-muted'>posted by {<MDBBtn color='primary'>u/username</MDBBtn>} 3 mins ago</p>
                        </MDBCol>
                        </MDBRow>
                </MDBCardHeader>
                <MDBCardTitle>Article Slug</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural lead-in to additional content.
                  This content is a little bit longer.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <MDBButton>
                    <MDBIcon icon='comment-alt' fas />
                     477 comments
                </MDBButton>

              </MDBCardFooter>
            </MDBCol>
        </MDBRow>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            {/* Page Description of Reddit Clone  */}
            <MDBCard className='h-100'>
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