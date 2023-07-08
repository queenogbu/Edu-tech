import React, { useEffect } from 'react';

const DataScience = () => {
    useEffect(() => {
        document.title = 'DataScience';
    }, []);

    return (
       <h1>Hello world</h1> 
    );
};

export default DataScience;