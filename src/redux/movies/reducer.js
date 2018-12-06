import LocalStorage from 'services/LocalStorage'
import { CHANGE_PAGE, FIND_MOVIE, LOAD_MOVIES_FULFILLED, LOAD_MOVIES_PENDING, LOAD_MOVIES_REJECTED } from './action'

const initialState = {
  loading: false,
  error: null,
  currentPage: 1,
  pages: LocalStorage.get('pages') || null,
  current: LocalStorage.get('current') || null,
  movies: LocalStorage.get('movies') || {},
}

const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case FIND_MOVIE: {
      const current = state.movies.results.filter(movie => movie.id === +payload)[0]
      LocalStorage.put('current', current)
      return {
        ...state,
        current,
      }
    }

    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: payload,
      }

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

    case LOAD_MOVIES_FULFILLED: {
      LocalStorage.put('movies', payload)
      LocalStorage.put('pages', payload.total_pages)
      return {
        ...state,
        loading: false,
        movies: payload,
        pages: payload.total_pages,
      }
    }

    default:
      return state
  }
}

export default moviesReducer
