// App.jsx

import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Skils from './components/Skils';
// import Home from './Home';
// import About from './About';
// import Portfolio from './Portfolio';
// import Contact from './Contact';

const App = () => {
  return (
    <Router>
        <Navbar />
        <Content/>
        <Skils/>
    </Router>
  );
};

export default App;
