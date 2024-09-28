import React, { useEffect,useState } from 'react';
import Header from '../../Components/Header/header';
import AnotherHeader, { AnotherHeaderOn } from '../../Components/Header/anotherHeader';
import Footer from '../../Components/Footer/footer';

const Homepage = () => {

    const [name, setName] = useState("Manolo");//getter(name) and setter(setName) the same that java but less verbose 
    const [age, setAge] = useState(0);
    const [lastName, setLastName] = useState("Lopez");

    useEffect( () => {
        console.log("hello my name is " + name);
    }, [name]);
    
    

    return (
        <div className="homepage">
            <Header />
            <div>
                <label htmlFor="name" style={{ color: "grey", marginRight: "10px" }}>First Name:</label>
                <input type="text" id="setName" onChange={(e) =>setName(e.target.value)} value= {name}/>
            </div>
            <br />
            <div>
                {name}
            </div>
            <AnotherHeader />
            <AnotherHeaderOn />
            <Footer />
        </div>
    );
};


export default Homepage;