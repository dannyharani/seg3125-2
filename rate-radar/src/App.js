import './App.css';
import Home from './components/pages/Home';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MediaDescription from './components/pages/MediaDescription';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      
      <div className="searchArea">
        <Searchbar/>
      </div>
      <div className="App">
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/media' element={<MediaDescription/>}/> 
        {/*<Route path='/' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Home/>}/> */}
      </Routes>

      </div>
      <NavBar />
    </Router>
  );
}

export default App;
