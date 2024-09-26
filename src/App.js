import './App.css';
import Header from './Components/Header/header';
import AnotherHeader from './Components/Header/anotherHeader.js';
import Footer from './Components/Footer/footer.js';



function App() {
  const firstName = 'John';
  return (
    <div>
      <Header/>
      <AnotherHeader/>
    <div>
      <h1>{firstName}</h1>
    </div>
    <Footer/>
    </div>
      
  );
}

export default App;
