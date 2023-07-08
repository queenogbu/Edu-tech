import React, { useEffect } from 'react';

const Tailoring = () => {
    useEffect(() => {
        document.title = 'Tailoring';
    }, []);

    return (
       <h1>Hello world</h1> 
    );
};

export default Tailoring;