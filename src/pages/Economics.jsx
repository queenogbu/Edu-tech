import React, { useEffect } from 'react';

const Economics = () => {
    useEffect(() => {
        document.title = 'Economics';
    }, []);

    return (
       <h1>Hello world</h1> 
    );
};

export default Economics;