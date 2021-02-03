import {createStore} from 'redux'
import reducers from '../reducers'

const initialState= {money: 1000, actiony: 'RETURN_MONEY'}
export const store= createStore(reducers, initialState)