import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NaviBar  from './Components/NaviBar';
import  Footer  from './Components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import {Home} from './Home';
import {Users} from './Works';


function App() {
  return (
    <>
    <Router>
    <NaviBar />
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/users" element={<Users/>} />
      
    </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
