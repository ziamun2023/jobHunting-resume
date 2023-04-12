import React from 'react';
import {useRouteError} from 'react-router-dom'
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/98488-bot-error-404.json";


const ErrorHandle = () =>{
    const {error,status}=useRouteError()
    
    return (
        <div>
            <p>{error?.msessage}</p>
            <p>{status || <Lottie style={{width:700}} className='mx-auto mt-28' animationData={groovyWalkAnimation} loop={true} /> }</p>


        </div>
    );
};

export default ErrorHandle;

