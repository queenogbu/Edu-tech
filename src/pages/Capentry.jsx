import React, { useEffect } from 'react';

const Capentry = () => {
    useEffect(() => {
        document.title = 'Capentry';
    }, []);

    return (
       <h1>Hello world</h1> 
    );
};

export default Capentry;