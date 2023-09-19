import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Create />}></Route>
          <Route path='/read' element={<Read />}></Route>
          <Route path='/update' element={<Update />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
