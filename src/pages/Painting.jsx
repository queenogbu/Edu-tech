import React, { useEffect } from 'react';

const Painting = () => {
    useEffect(() => {
        document.title = 'Painting';
    }, []);

    return (
        <h1>Hello world</h1>
    );
};

export default Painting;