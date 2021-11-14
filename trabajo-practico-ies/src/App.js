import './App.css';
import React, { useState } from "react";
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import User from './components/User';
import EpisodeList from './components/EpisodeList';
import Inicio from './components/Inicio';
import Episode from './components/Episode';
import { useSelector, useDispatch } from 'react-redux';
import {
  setUser,
  cleanUser,
} from './components/global/global.slice';
import Profile from './components/profile';
import NewEpisode from './components/NewEpisode';



function App() {
  const dispatch = useDispatch();
  const position = useSelector( state => state.global.position );
  const user =useSelector(state => state.global.user);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const onSuccessLogin = (response) => {
    console.log("========== onSuccess ==============", response)
    console.log("response.profileObj", response.profileObj)
    if(response && response.accessToken && response.profileObj) {
      dispatch(setUser({...response.profileObj, accessToken: response.accessToken}))
      setName(response.profileObj.name)
      setEmail(response.profileObj.email)
    }
  };
  
  const onErrorLogin = (response) => {
    console.log("========== onError ==============", response);
    dispatch(cleanUser());
  };
  
  return (
    <Router>
      <div className="App container">
        <h1>Mi app en REACT</h1>
        <hr/>
        
        {!user ?
          <GoogleLogin
          clientId="719106732100-l1ooc510d5avjgdjo3ebonq3i0dk5v14.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={onSuccessLogin}
          onFailure={onErrorLogin}
          cookiePolicy={'single_host_origin'}
          
        />
        :
        <>
        <header>User: {name} - Email: {email}</header>
        
          <GoogleLogout
             clientId={"719106732100-l1ooc510d5avjgdjo3ebonq3i0dk5v14.apps.googleusercontent.com"}
             buttonText="Logout"
             onLogoutSuccess={() => dispatch(cleanUser()) }
          />
        
        <hr/>
        <Switch>
            <Route path="/episode/:id">
              <Episode/>
            </Route>
            <Route path="/user">
              <User/>
            </Route>
            <Route path="/episodios/new">
              <NewEpisode/>
            </Route>
            <Route path="/episodios">
              <EpisodeList/>
            </Route>
            <Route path="/">
              <Inicio/>
            </Route>
        </Switch>
        </>}
        
      </div>
    </Router>

  );
}

export default App;
