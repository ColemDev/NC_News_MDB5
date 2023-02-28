import React from 'react';
import { MDBContainer, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from 'mdb-react-ui-kit';


const CommentsMenu = () => {


  return (
    <MDBContainer>
      <MDBDropdown>
        <MDBDropdownToggle caret color='primary'>
          Sort By
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem>Newest</MDBDropdownItem> {/*default*/}
          <MDBDropdownItem>Oldest</MDBDropdownItem>
          <MDBDropdownItem>Popular</MDBDropdownItem> {/*most votes*/}
          <MDBDropdownItem>Controversial</MDBDropdownItem> {/*In order of most to least comments and least to most votes*/}
        </MDBDropdownMenu>
      </MDBDropdown>
    </MDBContainer>
  );
};

export default CommentsMenu;
