import React, { useRef, useReducer } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const formReducer = (state, action) => {
    switch (action.type) {
        case 'SUBMIT_FORM':
            return action.payload;
        default:
            return state;
    }
};

function UseFormUncontrolled() {
    const [formState, dispatch] = useReducer(formReducer, {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        isMarried: false
    });

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const dateOfBirthRef = useRef();
    const maleGenderRef = useRef();
    const femaleGenderRef = useRef();
    const isMarriedRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({ 
            type: 'SUBMIT_FORM',
            payload: {
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
                dateOfBirth: dateOfBirthRef.current.value,
                gender: maleGenderRef.current.checked ? 'male' : (femaleGenderRef.current.checked ? 'female' : ''),
                isMarried: isMarriedRef.current.checked
            }
        });
        console.log(formState);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control ref={firstNameRef} name="firstName" />
            </Form.Group>
            <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control ref={lastNameRef} name="lastName" />
            </Form.Group>
            <Form.Group controlId="dateOfBirth">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control ref={dateOfBirthRef} type="date" name="dateOfBirth" />
            </Form.Group>
            <Form.Group className='d-flex justify-content-center m-2' controlId="gender">
                <Form.Check
                    type="radio"
                    name="gender"
                    value="male"
                    label="Male"
                    ref={maleGenderRef}
                />
                <Form.Check
                    type="radio"
                    name="gender"
                    value="female"
                    label="Female"
                    ref={femaleGenderRef}
                />
            </Form.Group>
            <Form.Group controlId="isMarried">
                <Form.Check
                    className='d-flex justify-content-center m-2'
                    type="checkbox"
                    name="isMarried"
                    label="Married"
                    ref={isMarriedRef}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default UseFormUncontrolled;