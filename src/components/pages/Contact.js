import React from "react";
import { Container } from 'react-bootstrap';
import "../../style.css";

function Contact() {
  return (
    <Container>
    <div>
      <h1>Contact Me</h1>
      <form>
        <div>
        <label>Name:</label>
        <input type="text" name="name" />
        </div>
        <div>
        <label>Email:</label>
        <input type="email" name="email" />
        </div>
        <div>
          <label for="comment">Message:</label>
          <textarea class="form-control" rows="5" id="comment"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
      </Container>
  );
}

export default Contact;


