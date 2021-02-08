import { useState } from 'react';

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    }

    const loadDataForm = (state) => {
        setValues(state);
    }

    const reset = (stade) => {
        setValues(initialState);
    }

    return [values, handleInputChange, loadDataForm, reset, setValues];

} 