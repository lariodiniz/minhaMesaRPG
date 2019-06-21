import React from 'react'
import { Switch, Route, Redirect } from 'react-router'


import Index from '../index/index'
import Auth from '../auth/auth'

export default props => (
    
   
       <Switch>
           <Route exact path='/' component={Index} />
           <Route exact path='/Login' component={Auth} />

           <Redirect from='*' to='/' />
       </Switch>
   
)


//           <Route path='/billingCycles' component={BillingCycle} />
