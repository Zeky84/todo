/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from 'react';
import Header from '../../Components/Header/header';
// import AnotherHeader, { AnotherHeaderOn } from '../../Components/Header/anotherHeader';
import Footer from '../../Components/Footer/footer';
import TodoItem from '../../Components/TodoItem';

const Homepage = () => {
    function handleTodoItemDataUpdate(data){
        console.log("We  need to update the data such that it equals", data)
    }

    const todoItems = [
        { id: 1, itemName: "get milk", isDone: false },
        { id: 2, itemName: "get bread", isDone: false },
        { id: 3, itemName: "get eggs", isDone: false },
    ];

    // const [name, setName] = useState("Manolo");//getter(name) and setter(setName) the same that java but less verbose 
    // const [lastName, setLastName] = useState("Lopez");
    // const [age, setAge] = useState(20);

    // useEffect(() => {
    //     console.log("My Name is " + name);
    // }, [name]);

    // useEffect(() => {
    //     console.log("My Last Name i is " + lastName);
    // }, [lastName]);



    return (
        <div className="homepage">
            {/* <div>
                <label htmlFor="name" style={{ color: "grey", marginRight: "10px" }}>First Name:</label>
                <input type="text" id="name" onChange={(e) =>setName(e.target.value)} value= {name}/>
                </div>
                <div>
                <label htmlFor="lastName" style={{ color: "grey", marginRight: "10px" }}>Last Name:</label>
                <input type="text" id="lastName" onChange={(e) =>setLastName(e.target.value)} value= {lastName}/>
                </div>
                <div>
                <label htmlFor="age" style={{ color: "grey", marginRight: "10px" }}>age:</label>
                <input type="number" id="age" onChange={function (e){
                    console.log(e);//printing the event to see all the things it fires
                    setAge(e.target.ariaValueNow)}} value= {age}/>
                    </div>
                    <br />
                    <div>
                    My name is  {name} {lastName} and I am {age} years old
                    </div> */}
            <Header />
            <h3>Todo list</h3>
            {todoItems.map((data) => {
                return (
                    <TodoItem todoItem={data} key={data.id} emitTodoItemDataUpdate={handleTodoItemDataUpdate} />
                );
            })}
            <Footer />
        </div>
    );
};


export default Homepage;