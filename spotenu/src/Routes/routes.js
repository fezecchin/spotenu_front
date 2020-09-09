import  React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import { Login } from '../Login'
import {SignupListener} from '../Signup/signupListener'
import { Home } from '../Home'
import { SignupBand } from '../SignupBand'
import {HomeUser} from '../HomeUser'
import {Search} from '../Search'
import {CreatePlaylist} from '../CreatePlaylist'

const Routes = ()=>{
  return(
  <BrowserRouter>
  <Switch>
  <Route exact path='/home'>
     <Home/>
   </Route>
  <Route exact path='/login'>
     <Login/>
   </Route>
  
   <Route exact path='/signupListener'>
     <SignupListener/>
   </Route>
   

   <Route exact path='/HomeUser'>
     <HomeUser/>
   </Route>

   <Route exact path='/Search'>
     <Search/>
   </Route>

   <Route exact path='/CreatePlaylist'>
     <CreatePlaylist/>
   </Route>

   <Route exact path='/signupBand'>
     <SignupBand/>
   </Route>
  </Switch>
  </BrowserRouter>
  )
}

export default Routes;