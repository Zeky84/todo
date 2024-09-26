import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Web/Homepage/homepage';



function App() {
  const firstName = 'edward';
  return (<Router>
    <Routes>
      <Route path='/' element={<Homepage firstName={firstName} />}/>
      <Route path='/'></Route>
    </Routes>
  </Router>
    
      
  );
}

export default App;
