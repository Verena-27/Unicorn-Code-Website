import './App.css';
import Sidebar from './components/Sidebar';
import { Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Header from './pages/Header';
import Register from './pages/Register';
import Files from './pages/Files';
import Exercises from './pages/Exercises';
import Dates from './pages/Dates';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    
    <BrowserRouter>
      <div className= "App">
        <div className="grid-container">
          <Sidebar></Sidebar>
          <Header></Header>
          <div className='content'>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/dates" element={<Dates></Dates>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/aboutus" element={<About></About>}></Route>
            <Route path="/files" element={<Files></Files>}></Route>
            <Route path="/exercises" element={<Exercises/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
          </div>
        </div>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
