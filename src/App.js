import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import {Route, Routes} from 'react-router-dom';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/Users';
function App() {
  return (
      <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/users/add" element={<AddUser/>} />
        <Route path="/users/edit/:id" element={<EditUser/>} />
        <Route path="/users/:id" element={<User/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  
  
  );
};

export default App;
