import React from 'react';

const AnotherHeader = () => {
    return (
        <div>
            <h2>this is another header export default</h2>
        </div>
    );
};


const AnotherHeaderOn = () => {
    return (
        <div>
            <h3>this is another header export not default</h3>
        </div>
    );
};

export default AnotherHeader;

export {AnotherHeaderOn};