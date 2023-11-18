import './App.css';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import Navbar from './components/Navbar';
import { shopContextProvider } from './context/shopContext';


function App() {
  return (
    <div className="App">
      <shopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Shop />}/>
          <Route  path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      </shopContextProvider>
    </div>
  );
}

export default App;
