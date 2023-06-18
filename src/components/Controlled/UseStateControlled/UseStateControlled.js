import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UseStateControlled = () => {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        isMarried: false
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleCheckboxChange = (event) => {
        setFormState({
            ...formState,
            isMarried: event.target.checked
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    type="text"
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type="text"
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="dateOfBirth">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                    type="date"
                    name="dateOfBirth"
                    value={formState.dateOfBirth}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group className='d-flex justify-content-center m-2' controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Check
                    type="radio"
                    name="gender"
                    value="male"
                    label="Male"
                    checked={formState.gender === 'male'}
                    onChange={handleInputChange}
                />
                <Form.Check
                    type="radio"
                    name="gender"
                    value="female"
                    label="Female"
                    checked={formState.gender === 'female'}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="isMarried">
                <Form.Check
                    className='d-flex justify-content-center m-2'
                    type="checkbox"
                    name="isMarried"
                    label="Married"
                    checked={formState.isMarried}
                    onChange={handleCheckboxChange}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default UseStateControlled;