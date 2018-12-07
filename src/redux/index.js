import { combineReducers } from 'redux'

import headerReducer from './header/reducer'
import moviesReducer from './movies/reducer'

const reducers = combineReducers({
  headerReducer,
  moviesReducer,
})

export default reducers
