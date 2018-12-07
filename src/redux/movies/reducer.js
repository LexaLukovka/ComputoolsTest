import LocalStorage from 'services/LocalStorage'
import {
  FAVORITE_MOVIE,
  FIND_MOVIE,
  LOAD_MOVIES_FULFILLED,
  LOAD_MOVIES_PENDING,
  LOAD_MOVIES_REJECTED,
  URL,
} from './action'

const initialState = {
  loading: false,
  error: null,
  url: LocalStorage.get('url') || null,
  pages: LocalStorage.get('pages') || null,
  favorite: LocalStorage.get('favorite') || [],
  current: LocalStorage.get('current') || null,
  movies: LocalStorage.get('movies') || {},
  allMovies: LocalStorage.get('allMovies') || [],
}

const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case URL: {
      LocalStorage.put('url', payload)
      return {
        ...state,
        url: payload,
      }
    }

    case FIND_MOVIE: {
      const current = state.allMovies.filter(movie => movie.id === +payload)[0]
      if (current) LocalStorage.put('current', current)
      return {
        ...state,
        current,
      }
    }

    case FAVORITE_MOVIE: {
      const favorite = [...state.favorite]
      const index = favorite.findIndex(f => f.id === payload.id)
      if (index < 0) {
        favorite.unshift(payload)
        LocalStorage.put('favorite', favorite)
      } else {
        favorite.splice(index, 1)
        LocalStorage.put('favorite', favorite)
      }


      return {
        ...state,
        favorite,
      }
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
      const allMovies = [...state.allMovies]

      if (allMovies.findIndex(movies => movies.id === payload.results[0].id) < 0) {
        payload.results.map(movie => allMovies.push(movie))
      }

      LocalStorage.put('movies', payload)
      LocalStorage.put('pages', payload.total_pages)
      LocalStorage.put('allMovies', allMovies)
      return {
        ...state,
        loading: false,
        movies: payload,
        allMovies,
        pages: payload.total_pages,
      }
    }

    default:
      return state
  }
}

export default moviesReducer
