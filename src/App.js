import './style.css'
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';

// import Footer from './footer/footer';
// import Service from './service/service';
import Navbar from './navbar/navbar'

function App() {
  return (
    <div>

      <Navbar />
      {/* <Router>
        <Navar />
            <Routes>
                <Route path='/TemplateReact' element= {<Home />} />
                <Route path='/TemplateReact/b' element = { <Service /> } />
            </Routes>
        
        <Footer />
      </Router> */}
    </div>
  );
}

export default App;
