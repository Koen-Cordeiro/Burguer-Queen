import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from '../src/Pages/login/login'
import Kitchen from '../src/Pages/kitchen/kitchen'
import Saloon from '../src/Pages/saloon/saloon'
import Register from '../src/Pages/register/register'
import Page404 from '../src/Pages/404'

const App = () => {
  const [userPage, setUserPage] = useState();

  const checkWorkPlace = (user) => {
    const userCollection = firebase.firestore().collection('users-info').doc(user.uid);
    userCollection.get().then((staff) => {
      if (staff.data().workPlace === 'Cozinha') {
        setUserPage(() => <BrowserRouter>
        <Redirect to='/kitchen'/>
      <Switch>
        <Route path='/kitchen' component={Kitchen} />
        <Route path='*' component={Page404} />
      </Switch>
    </BrowserRouter>)
      } else  if (staff.data().workPlace === 'Salão') {
        setUserPage(() => <BrowserRouter>
          <Redirect to='/saloon'/>
        <Switch>
          <Route path='/saloon' component={Saloon} />
          <Route path='*' component={Page404} />
        </Switch>
      </BrowserRouter>)
      } else {
        setUserPage(() =><Route path='/error' component={404} />)
      
      }
    });
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        checkWorkPlace(user)

      } else {
        console.log(window.location.pathname)
        setUserPage(() => <BrowserRouter>
        <Redirect to={window.location.pathname ==='/register'?'/register': '/'}/>
          <Switch>
            <Route path='/' exact={true} component={Login} />
            <Route path='/register' component={Register} />
            <Route path='*' component={Page404} />
          </Switch>
        </BrowserRouter>)
      }
    });

  }, [])

  return (
    <>
      {userPage}
    </>);

};

export default App;