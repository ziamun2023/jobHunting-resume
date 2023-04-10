import React from 'react';
import {useRouteError} from 'react-router-dom'

const ErrorHandle = () =>{
    const {error,status}=useRouteError()
    
    return (
        <div>
            <p>{error?.msessage}</p>
            <p>{status || 404}</p>
        </div>
    );
};

export default ErrorHandle;