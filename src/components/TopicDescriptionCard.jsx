import React from "react";
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn } from "mdb-react-ui-kit";



const TopicDescriptionCard = ({ topic }) => {

const description = (topic) => {
  return topic === "All Topics"
          ? "Welcome to Northcoders News! This is a list of all the articles on the site."
          : topic === "coding"
          ? "Code is love, code is life"
          : topic === "football"
          ? "FOOTIE!"
          : topic === "cooking"
          ? "Hey good looking, what you got cooking?"
          : "No description available";
          };

    


        

    return (

          <MDBCard className="h-auto">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/043.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>
                nc/
                {topic}
              </MDBCardTitle>
              <MDBCardText>{description(topic)}</MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <MDBBtn color="primary">Create Post</MDBBtn>
            </MDBCardFooter>
          </MDBCard>
          )
    }

export default TopicDescriptionCard;