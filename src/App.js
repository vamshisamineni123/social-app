
import './App.css';
import SideBar from './components/SideBar/SideBar';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
function App() {
  return (
    <div className="App"> 
     {/* <Profile/> */}
     {/* <Login/> */}
     <Register/>
    </div>
  );
}
export default App;