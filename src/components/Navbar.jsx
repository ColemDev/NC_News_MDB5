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
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,

} from 'mdb-react-ui-kit';

const Navbar = () => {
    const [showBasic, setShowBasic] = useState(false);


return (
 <MDBContainer>
      <MDBNavbar expand='lg' light bgColor='light' sticky='top'>
        <MDBContainer>
          <MDBNavbarBrand href='#'>
          <img
              src = 'https://img.icons8.com/ios/50/000000/face-with-tears-of-joy.png'
              height='30'
              alt=''
              loading='lazy'
            />
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
                  <MDBDropdownItem>Football</MDBDropdownItem>
                  <MDBDropdownItem>Coding</MDBDropdownItem>
                  <MDBDropdownItem>Cooking</MDBDropdownItem>
                  </MDBDropdownMenu>
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
    </MDBContainer>
    );
};

export default Navbar;