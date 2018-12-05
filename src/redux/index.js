import { combineReducers } from 'redux'

import layoutReducer from './layout/reducer'
import headerReducer from './header/reducer'
import modalReducer from './modal/reducer'

const reducers = combineReducers({
  layoutReducer,
  modalReducer,
  headerReducer,
})

export default reducers
