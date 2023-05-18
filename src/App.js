import Landing from './components/Layout/Landing';
import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div className="app">
        <Router>
          <Routes>
            <Route exact path="/" element={<Landing></Landing>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
