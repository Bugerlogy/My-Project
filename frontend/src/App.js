import HomePage from './HomePage';
import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';  
import RoutePage from './RoutePage';

function App() {
  
  return (
    <div>
     <Router>
      <Routes>  
                <Route exact path="/" element = {<HomePage/>}></Route>
                 <Route exact path="/browser/:id" element={< RoutePage />}></Route>  
          </Routes>  
          </Router>
    </div>
  );
}

export default App;
