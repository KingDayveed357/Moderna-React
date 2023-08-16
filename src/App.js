import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/main';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfoilo from './pages/Portfoilo';
import Team from './pages/Team';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Main/>}>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/portfoilo' element={<Portfoilo/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
