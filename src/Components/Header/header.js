import React from 'react';

const Header = () => {
    return (
        <div>
            <h1>Header</h1>
        </div>
    );
};

const HeaderLogFunction = () => {
    return (
        console.log("I'm doing something")
    );
};

export {HeaderLogFunction};

export default Header;