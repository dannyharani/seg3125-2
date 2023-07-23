import './App.css';
import Home from './components/pages/Home';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MediaDescription from './components/pages/MediaDescription';
import Searchbar from './components/Searchbar';
import Results from './components/pages/Results';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/media' element={<MediaDescription/>}/> 
        <Route path='/search' element={<Results/>}/>
      </Routes>

      </div>
      <NavBar />
    </Router>
  );
}

export default App;
