import 'bootstrap/dist/css/bootstrap.min.css';

import UseReducerControlled from './UseReducerControlled';
import UseStateControlled from './UseStateControlled';
import FormikYupControlled from './FormikYupControlled';

const Controlled = () => {
    return (
        <div className="text-center">
            <h1 className="mb-5">Controlled form</h1>
            <div className="mb-5 container my-3 shadow p-5" style={{ maxWidth: '70%' }}>
                <h2 className="mb-3">Controlled form with useReducer:</h2>
                <UseReducerControlled />
            </div>
            <div className="mb-5 container my-3 shadow p-5" style={{ maxWidth: '70%' }}>
                <h2 className="mb-3">Controlled form with useState:</h2>
                <UseStateControlled />
            </div>
            <div className="mb-5 container my-3 shadow p-5" style={{ maxWidth: '70%' }}>
                <h2 className="mb-3">Form with formik and yup:</h2>
                <FormikYupControlled />
            </div>
        </div>
    );
};

export default Controlled;