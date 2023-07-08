import React, { useEffect } from 'react';

const ComputerScience = () => {
    useEffect(() => {
        document.title = 'ComputerScience';
    }, []);

    return (
       <h1>Hello world</h1> 
    );
};

export default ComputerScience;