import { combineReducers } from 'redux'

import layoutReducer from './layout/reducer'
import headerReducer from './header/reducer'
import modalReducer from './modal/reducer'
import moviesReducer from './movies/reducer'

const reducers = combineReducers({
  layoutReducer,
  modalReducer,
  headerReducer,

  moviesReducer,
})

export default reducers
