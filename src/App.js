import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import ShopProducts from './components/Shop/ShopPruducts';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ShopProducts/>
      
   </div>
  );
}

export default App;
