import 'bootstrap/dist/css/bootstrap.min.css';

import UseReducerUncontrolled from './UseReducerUncontrolled';
import UseStateUncontrolled from './UseStateUncontrolled'
import UseFormUncontrolled from './UseFormUncontrolled'

const Uncontrolled = () => {
    return (
        <div className="text-center">
            <h1 className="mb-5">Uncontrolled form</h1>
            <div className="mb-5 container my-3 shadow p-5" style={{ maxWidth: '70%' }}>
                <h2 className="mb-3">Uncontrolled form with useReducer:</h2>
                <UseReducerUncontrolled />
            </div>
            <div className="mb-5 container my-3 shadow p-5" style={{ maxWidth: '70%' }}>
                <h2 className="mb-3">Uncontrolled form with useState:</h2>
                <UseStateUncontrolled />
            </div>
            <div className="mb-5 container my-3 shadow p-5" style={{ maxWidth: '70%' }}>
                <h2 className="mb-3">Form with react-hook-form:</h2>
                <UseFormUncontrolled />
            </div>
        </div>
    );
};

export default Uncontrolled;
