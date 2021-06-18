import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { useDispatch,useSelector } from 'react-redux';
import {login, logout, selectuser} from './userSlice';
import { useEffect } from 'react';
import { auth } from './Firebase';


function App() {
  const user = useSelector(selectuser);
  const dispatch = useDispatch();


  useEffect(()=>{
    auth.onAuthStateChanged((authnm)=>{
      // console.log("ap",authnm);
      if(authnm){
        dispatch(login({
          username:authnm.displayName,
          profilePic:authnm.photoURL,
          id:authnm.uid
        }))
      }
        else{
          dispatch(logout());
        }
    })
  })
  // console.log(user);
  return (
    <div className="App">
       <Router>

       {
         !user ? (
           <Login/>
         ):(
           <>
        <Switch>
          <Route path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
        </Switch>
        </>
      )
      
    }
    </Router>

    </div>
  );
}

export default App;
