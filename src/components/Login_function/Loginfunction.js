import {useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
import React, { useState } from 'react';

export default 
function Loginfunction(props){

    const dispatch = useDispatch();

    const[Id, setId] = useState('');
    const[Password, setPw] = useState('');
    const[Name, setName] = useState('');
    const[Email, setEmail] = useState('');

    
    const onIdHandler = (event) => {
        setId(event.currentType.value);
    };
    
    const onNameHandler = (event) => {
        setName(event.currentType.value);
    };
    
    const onPasswordHandler = (event) => {
        setPassword(event.currentType.value);
    };

    const onEmailHandler = (event) => {
        setEmail(event.currentType.value);
    };
}