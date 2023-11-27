import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Photography from './components/Photography'
import Design from './components/Design';
import Commercial from './components/Commercial';
import Sidebar from './components/Sidebar';
import NotFound from './components/NotFound';
import { useState } from 'react';



function App() {

const [favorites, setFavorites] = useState([]);

const handleFavorites = (target) => {
  if(favorites.includes(target)){
    const updatedFavorites = favorites.filter(favorite=>favorite!==target);
    setFavorites(updatedFavorites);
  } else {
    const updatedFavorites = [...favorites, target];
    setFavorites(updatedFavorites);
  }
}


  return (
    <Router>
    <div className='App'>
      <div className='sidebar'>
        <Sidebar/>
      </div>
      <div className='content'>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/photography' element={<Photography favorites={favorites} handleFavorites={handleFavorites}/>}/>
          <Route path='/design' element={<Design favorites={favorites} handleFavorites={handleFavorites}/>}/>
          <Route path='/commercial' element={<Commercial favorites={favorites} handleFavorites={handleFavorites}/>}/>
          <Route path='*' Component={NotFound}/>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
