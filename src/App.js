import './App.css';

import Dashboard from './components/dashboard';
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import Description from './components/Description';
import Auth from './components/auth';
import DisplayAll from './components/displayAll';
import UserProfile from './components/userProfile';
import RegisterUser from './components/register';
import DarkMode from './components/darkMode';
import { useState } from 'react';



export default function App() {
  const [mode,setMode] = useState("light");

  const toggleMode =() =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';

    }
  }
  return (
    <div className='App'>
      
      <Router>
      
        <Routes>
          <Route exact path='/' element ={<Auth mode={mode}/>}></Route>

          {localStorage.getItem('token') &&
          <>
          <Route exact path='/displayAll' element={<DisplayAll mode={mode}/>}></Route>
          <Route exact path='/home' element ={<Dashboard mode={mode}/>}></Route>
          <Route exact path='/register' element ={<RegisterUser/>}></Route>  
          <Route exact path='/item/:currentItemInView' element ={<Description/>}></Route>
          <Route exact path='/profile' element ={<UserProfile mode={mode}/>}></Route>
          </>
          }
        </Routes>
        <DarkMode mode={mode} toggleMode={toggleMode}/>
      </Router>

    </div>
  );
}


