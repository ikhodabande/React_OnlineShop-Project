import './App.css';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path="/" element={Shop}/>
          <Route  path="/cart" element={Cart} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;