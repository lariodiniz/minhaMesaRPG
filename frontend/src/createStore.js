import { applyMiddleware, createStore } from 'redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import ReduxThunk from 'redux-thunk'
import reducers from './main/reducers'

export const middleware = [multi, promise, ReduxThunk]

export const createStoreWithiddleware = applyMiddleware(...middleware)(createStore)

export const store = createStoreWithiddleware(reducers)
