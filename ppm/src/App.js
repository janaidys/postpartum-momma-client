import React, {useState} from "react";

import Header from './shared/Header';
import Home from './components/Home';
import About from './components/About';
import Admin from './components/Admin';
import Create from './components/Create';
import Update from './components/Update';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './shared/Footer';

function App() {

const [user, setUser] = useState({})

  return (
    <div className="App">
      <Header user={user}setUser={setUser}/>
      <Home/>
      <About/>
      <Admin/>
      <Create/>
      <Update/>
      <Login user={user}setUser={setUser}/>
      <Signup user={user}setUser={setUser}/>
      <Footer/>
    </div>
  );
}

export default App;