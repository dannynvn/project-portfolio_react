import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


// contact me page with form

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    // handles inputs
    const handleChange = (e) => {
        const { target } = e;
        const inputType = target.id;
        const inputValue = target.value;

        // sets the state for each input
        if (inputType === "name") {
            setName(inputValue);
        }
        if (inputType === "email") {
            setEmail(inputValue);
        }
        if (inputType === "message") {
            setMessage(inputValue);
        }
      
    }


    // handles the form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, message });
        
        // checks if the name is empty
        if (!name) {
            setErrorMessage("Please enter your name.");
            return;
        }

        // checks if the email is valid
        else if (!validateEmail(email)) {
            setErrorMessage("Please enter a valid email.");
            return;
        }

        // checks if the message is empty
        else if (!message) {
            setErrorMessage("Please enter a message.");
            return;
        }

        // clears the form if all fields are valid
        else {
            setName("");
            setEmail("");
            setMessage("");
        }
        
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
                            <input 
                                type="text" 
                                style={{ margin: 10 }} 
                                className="form-control" 
                                id="name" 
                                placeholder="name"
                                onChange={handleChange} 
                            />
                            <input 
                                type="email" 
                                style={{ margin: 10 }} 
                                className="form-control" 
                                id="email" 
                                placeholder="email" 
                                onChange={handleChange}
                            />
                            <textarea 
                                type="textarea" 
                                rows="4" 
                                style={{ margin: 10 }} 
                                className="form-control" 
                                id="message" 
                                placeholder="message" 
                                onChange={handleChange}
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        variant="primary" 
                        style={{ margin: 5 }} 
                        onClick={handleFormSubmit}
                    >
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default Contact;