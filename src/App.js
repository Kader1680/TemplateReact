import './App.css';


import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
import Navar from './navbar/navbar';
import Home from './home/home';
import Footer from './footer/footer';
import Service from './service/service';


function App() {
  return (
    <div>
      <Router>
        <Navar />
            <Routes>
                <Route path='/' element= {<Home />} />
                <Route path='/service' element = { <Service/> } />
            </Routes>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
