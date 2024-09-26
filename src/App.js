import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Web/Homepage/homepage';
import Dashboard from './Web/Dashboard/dashboard';
import Errorpage from './Web/Errorpage/errorpage';



function App() {
  const firstName = 'edward';
  return (<Router>
    <Routes>
      <Route path='/' element={<Homepage firstName={firstName} />}/>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='*' element={<Errorpage/>}></Route>
    </Routes>
  </Router>
    
      
  );
}

export default App;
