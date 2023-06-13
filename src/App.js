import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navigatorbar from './component/navbar';
import About from './pages/about';
import Contact from './pages/contact';
import Teams from './pages/teams';
import Login from './pages/login';
import NotFound from './pages/notFound';
import Footer from './component/footer';
import Regis from './pages/registration';
import Profile from './pages/profile';
function App() {
  return (
    <div>
      <Router>
        <Navigatorbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/teams' element={<Teams/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/regis' element={<Regis/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
