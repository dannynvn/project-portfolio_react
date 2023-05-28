import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


// contact me page with form

function Contact() {
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