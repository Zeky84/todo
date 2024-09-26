import React from 'react';
import Header from '../../Components/Header/header';
import AnotherHeader from '../../Components/Header/anotherHeader';
import Footer from '../../Components/Footer/footer';

const Homepage = ({firstName}) => {
    return (
        <div>
            <Header />
            <AnotherHeader />
            <div>
                <h1>{firstName}</h1>
            </div>
            <Footer />
        </div>
    );
};

export default Homepage;