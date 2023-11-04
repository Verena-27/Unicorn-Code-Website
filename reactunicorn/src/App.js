import './App.css';
import Sidebar from './components/Sidebar';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Header from './pages/Header';

function App() {
  return (
    
    <BrowserRouter>
      <div className= "App">
        <div className="grid-container">
          <Header></Header>
          <Sidebar></Sidebar>
          <Routes>
            <Route path="/home" element={<Home></Home>}></Route>
          </Routes>
        </div>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
