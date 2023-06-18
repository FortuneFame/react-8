import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';

const UseFormUncontrolled = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input {...register('firstName', { required: 'First Name is required' })} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} />
                {errors.firstName && <div className="text-danger">{errors.firstName.message}</div>}
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input {...register('lastName', { required: 'Last Name is required' })} className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} />
                {errors.lastName && <div className="text-danger">{errors.lastName.message}</div>}
            </div>
            <div className="form-group">
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input {...register('dateOfBirth', { required: 'Date of Birth is required' })} type="date" className={`form-control ${errors.dateOfBirth ? 'is-invalid' : ''}`} />
                {errors.dateOfBirth && <div className="text-danger">{errors.dateOfBirth.message}</div>}
            </div>
            <div className="d-flex justify-content-center m-2">
                <div className="form-check">
                    <input {...register('gender', { required: 'Gender is required' })} type="radio" value="male" className="form-check-input" /> Male
                </div>
                <div className="form-check">
                    <input {...register('gender')} type="radio" value="female" className="form-check-input" /> Female
                </div>
                {errors.gender && <div className="text-danger">{errors.gender.message}</div>}
            </div>
            <div className="d-flex justify-content-center m-2 form-check">
                <input {...register('isMarried')} type="checkbox" className="form-check-input" /> Married
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default UseFormUncontrolled;