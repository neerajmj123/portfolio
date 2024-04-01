// App.jsx

import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import Content from './components/Content';
// import Home from './Home';
// import About from './About';
// import Portfolio from './Portfolio';
// import Contact from './Contact';

const App = () => {
  return (
    <Router>
        <Navbar />
        <Content/>
    </Router>
  );
};

export default App;
