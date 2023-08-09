import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
<>
<Router>
  <Navbar/>
  <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/login" element={<Login/>} />
  </Routes>
  <Footer />
</Router>
</>
  );
}

export default App;
