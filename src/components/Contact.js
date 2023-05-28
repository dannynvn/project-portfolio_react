import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { validate } from "json-schema";


// contact me page with form

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // handles the form submission
    function handleSubmit(e) {
        e.preventDefault();
        
        // checks if the name is empty
        if (!name) {
            setErrorMessage("Please enter your name.");
            return;
        }

        // checks if the email is valid
        if (!validateEmail(email)) {
            setErrorMessage("Please enter a valid email.");
            return;
        }

        // checks if the message is empty
        if (!message) {
            setErrorMessage("Please enter a message.");
            return;
        }

        // clears the form if all fields are valid
        setName("");
        setEmail("");
        setMessage("");
        
    }


    // renders the contact me form
    return (
        <div className="form-card">
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>
                        Contact Me
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Reach out via the form below!
                    </p>
                    <form>
                        <div style={{ margin: 5 }} className="form-group form-input">
                            <input type="text" style={{ margin: 10 }} className="form-control" id="name" placeholder="name" />
                            <input type="email" style={{ margin: 10 }} className="form-control" id="email" placeholder="email" />
                            <textarea type="textarea" rows="4" style={{ margin: 10 }} className="form-control" id="message" placeholder="message" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" style={{ margin: 5 }}>
                        Save changes
                    </Button>
                    <Button variant="secondary" style={{ margin: 5 }}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default Contact;