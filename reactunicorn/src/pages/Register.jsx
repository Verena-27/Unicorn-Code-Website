import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        minta: '',
        age: '',
        email: '',
        laptop: '',
        interests: '',
        comments: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailBody = `
            Name: ${formData.name}
            MINTA*: ${formData.minta}
            Alter: ${formData.age}
            Email: ${formData.email}
            Eigener Laptop: ${formData.laptop}
            Interesse an folgenden Angeboten: ${formData.interests}
            Bemerkungen: ${formData.comments}
        `;

        const mailtoLink = `mailto:anmeldung@unicornsco.de?subject=Kursanmeldung&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="content register">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={8} lg={6}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={12}>
                                    Identifizierst du dich als MINTA*?
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                        type="radio"
                                        label="Ja"
                                        name="minta"
                                        value="Ja"
                                        checked={formData.minta === "Ja"}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Nein"
                                        name="minta"
                                        value="Nein"
                                        checked={formData.minta === "Nein"}
                                        onChange={handleChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Keine Angabe"
                                        name="minta"
                                        value="Keine Angabe"
                                        checked={formData.minta === "Keine Angabe"}
                                        onChange={handleChange}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group controlId="formBasicAge">
                                <Form.Label>Alter</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label as="legend" column sm={10}>
                                    Hast du einen eigenen Laptop?
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                        type="radio"
                                        label="Ja"
                                        name="laptop"
                                        value="Ja"
                                        checked={formData.laptop === "Ja"}
                                        onChange={handleChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Nein"
                                        name="laptop"
                                        value="Nein"
                                        checked={formData.laptop === "Nein"}
                                        onChange={handleChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Keine Angabe"
                                        name="laptop"
                                        value="Keine Angabe"
                                        checked={formData.laptop === "Keine Angabe"}
                                        onChange={handleChange}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group controlId="formBasicInterests">
                                <Form.Label>Interesse an folgenden Angeboten</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="interests"
                                    value={formData.interests}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicComments">
                                <Form.Label>Bemerkungen (optional)</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="comments"
                                    value={formData.comments}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Email senden
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Register;
