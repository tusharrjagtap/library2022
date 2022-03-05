import React from "react";
import { Form ,Button} from "react-bootstrap";
function Book(){
    return(<>
        <div className="Heading">
        <h3>Add Book Details</h3>
      </div><br/>
      < div className="book">
      <Form>
        <Form.Group  controlId="formBasicFirstName">
          
          <Form.Control type="text" placeholder="Enter book Name" />
          </Form.Group><br/>
          <Form.Group  controlId="formBasicLastName">
          
          <Form.Control type="text" placeholder="Enter author name" />
          </Form.Group><br/>
          <Form.Group  controlId="formBasicEmail">
         
          <Form.Control type="text" placeholder="Enter book Id" />
          </Form.Group><br/>
      
        <Form.Group  controlId="formBasicPassword">
      
          <Form.Control type="Number" placeholder="Enter Mobile Number" />
        </Form.Group><br/>
       <div className="booksubmit">
        <Button   className="btn btn-success" type="submit">
          Add Customer
        </Button>
        </div>
      </Form>
      </div>
      </>
    )
}
export default Book;