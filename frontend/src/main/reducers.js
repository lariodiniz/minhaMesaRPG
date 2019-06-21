import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'


import AuthReducer from '../component/auth/authReducer'
/*
import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'
import AuthReducer from '../auth/authReducer'

*/
const rootReducer = combineReducers({
    auth: AuthReducer,
    form: formReducer,
})

export default rootReducer