import { LOAD_MOVIES_FULFILLED, LOAD_MOVIES_PENDING, LOAD_MOVIES_REJECTED } from './action'

const initialState = {
  loading: false,
  error: null,
  movies: {},
}

const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case LOAD_MOVIES_PENDING:
      return {
        ...state,
        loading: true,
      }

    case LOAD_MOVIES_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
      }

    case LOAD_MOVIES_FULFILLED:
      return {
        ...state,
        loading: false,
        movies: payload,
      }

    default:
      return state
  }
}

export default moviesReducer
