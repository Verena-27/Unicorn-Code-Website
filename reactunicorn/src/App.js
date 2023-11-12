import './App.css';
import Sidebar from './components/Sidebar';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Header from './pages/Header';
import Register from './pages/Register';
import Files from './pages/Files';
import Dates from './pages/Dates';

function App() {
  return (
    
    <BrowserRouter>
      <div className= "App">
        <div className="grid-container">
          <Sidebar></Sidebar>
          <Header></Header>
          <Routes>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/dates" element={<Dates></Dates>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/files" element={<Files></Files>}></Route>
          </Routes>

        </div>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
