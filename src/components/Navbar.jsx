import React, { useState } from "react";
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
} from "mdb-react-ui-kit";
import { fetchTopics } from "../utils/Api";
import { loggedInUser , profileName} from "../utils/loggedInProfile";

const Navbar = () => {
  const [showBasic, setShowBasic] = useState(false);
  const [topics, setTopics] = useState([]);


  fetchTopics().then((topics) => {
    setTopics(topics);
  });
  return (
    <MDBContainer>
      <MDBNavbar expand="lg" light bgColor="light" sticky="top">
        <MDBContainer>
          <MDBNavbarBrand href="/">
            <img
              src="https://img.icons8.com/ios/50/000000/face-with-tears-of-joy.png"
              height="30"
              alt=""
              loading="lazy"
            />
            <strong> Northcoders News</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-1 mb-sm-0">
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    Topics
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem>
                      <MDBNavbarLink href="/" className="text-dark">
                        All Topics
                      </MDBNavbarLink>
                    </MDBDropdownItem>
                    {topics.map((topic) => {
                      return (
                        <MDBDropdownItem key={topic.slug}>
                          <MDBNavbarLink
                            href={`/articles/topics/${topic.slug}`}
                          >
                            {topic.slug}
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                      );
                    })}
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBNavbarNav className="mb-2 mb-sm-0 justify-content-end">
              {/* profile dropdown */}
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    <MDBIcon icon="user" fas /><span className="mx-2">
                    <strong>{profileName}</strong> logged in as <strong>u/{loggedInUser}</strong>
                    </span>
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
