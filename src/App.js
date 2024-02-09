import './App.scss';
import {Routes,Route} from 'react-router-dom';
import Login from './Pages/Login';
import SignIn from './Pages/signIn'
import Patients from './Pages/Patients';
import Dashboard from './Pages/Dashboard';
import Calendar from './Pages/Calendar';


function App() {
  return (
    <Routes>
  <Route path="/" element={<SignIn/>}/>
  <Route path="/signup" element={<Login/>}/>
  <Route path="/calendar" element={<Calendar/>}/>
  <Route path="/dashboard" element={<Dashboard/>}/>
  <Route path="/patients" element={<Patients/>}/>
    {/* </Route> */}
    
</Routes>
  );
}

export default App;
