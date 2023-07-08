import React, { useEffect } from 'react';

const HairStyling = () => {
    useEffect(() => {
        document.title = 'HairStyling';
    }, []);

    return (
       <h1>Hello world</h1> 
    );
};

export default HairStyling;