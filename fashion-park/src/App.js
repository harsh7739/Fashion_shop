import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Routes/Navbar';
import AllRoute from './Component/Routes/AllRoutes';
import Home from './Component/Pages/Home';

function App() {
  return (
    <div className="App">
   <h1>Welcome To The Fashion Park</h1>
   {/* <Navbar />
  <AllRoute /> */}
  <Home />
    </div>
  );
}

export default App;
