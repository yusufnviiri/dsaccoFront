import './App.css';
import { Route,Routes } from 'react-router-dom';
import Dashbord from './components/Dashbord';
import Notification from './components/Notification';
import Register from './components/Register'
import Login from './components/Login';

function App() {
  return (
    <div className="App font-mul w-full m-auto">
      <Notification/>
      <Dashbord/>

      <Routes>
<Route path='/' element={<Dashbord/>}/>
<Route path='/logins' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/da' element={<Notification/>}/>



      </Routes>
    </div>
  );
}

export default App;
