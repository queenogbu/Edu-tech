import React, { useEffect } from 'react';

const Baking = () => {
    useEffect(() => {
        document.title = 'Baking';
    }, []);

    return (
       <h1>Hello world</h1> 
    );
};

export default Baking;