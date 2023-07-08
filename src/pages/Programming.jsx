import React, { useEffect } from 'react';

const Programming = () => {
    useEffect(() => {
        document.title = 'Programming';
    }, []);

    return (
        <h1>Hello world</h1>
    );
};

export default Programming;