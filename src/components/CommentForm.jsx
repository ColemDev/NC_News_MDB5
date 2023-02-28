import React from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";


const CommentForm = () => {

    return (
        <form>
        <MDBInput wrapperClass='mb-4' textarea id='form6Example7' rows={4} label='What are your thoughts?' />
          <MDBBtn color='primary' type='submit'>comment</MDBBtn>
        </form>
    );
};

export default CommentForm;