import  React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import { Login } from '../Login'
import {SignupListener} from '../Signup/signupListener'
import { Home } from '../Home'
import {HomeUser} from '../HomeUser'
import {Search} from '../Search'
import {CreatePlaylist} from '../CreatePlaylist'
import {Admin} from '../Admin'
import {LoginAdmin} from '../LoginAdmin'
import {ApproveBand} from '../ApproveBand'
import {AddAdmin} from '../AddAdmin'
import {BlockUser} from '../BlockUser'
import {AddGender} from '../AddGender'

const Routes = ()=>{
  return(
  <BrowserRouter>
  <Switch>
  <Route exact path='/'>
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

  <Route exact path='/Admin'>
     <Admin/>
   </Route>

   <Route exact path='/LoginAdmin'>
     <LoginAdmin/>
   </Route>

   <Route exact path='/AddAdmin'>
     <AddAdmin/>
   </Route>

   <Route exact path='/ApproveBand'>
     <ApproveBand/>
   </Route>

   <Route exact path='/BlockUser'>
     <BlockUser/>
   </Route>

   <Route exact path='/AddGender'>
     <AddGender/>
   </Route>
   

  </Switch>
  </BrowserRouter>
  )
}

export default Routes;