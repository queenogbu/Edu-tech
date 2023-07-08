import React, { useEffect } from 'react';

const DigitalMarketting = () => {
    useEffect(() => {
        document.title = 'DigitalMarketting';
    }, []);

    return (
       <h1>Hello world</h1> 
    );
};

export default DigitalMarketting;