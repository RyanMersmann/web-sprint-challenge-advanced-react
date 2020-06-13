// write your custom hook here to control your checkout form
import { useState } from 'react';

export const useForm = (initialValue) => {
    //setting state
    const [values, setValues] = useState(initialValue);

    //added handleChanges 
    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    };
    //return
    return [values, setValues, handleChanges]
};