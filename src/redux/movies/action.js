import Movie from 'services/api/Movie'

export const FIND_MOVIE = 'FIND_MOVIE'
export const FAVORITE_MOVIE = 'FAVORITE_MOVIE'

export const LOAD_MOVIES = 'LOAD_MOVIES'
export const LOAD_MOVIES_PENDING = 'LOAD_MOVIES_PENDING'
export const LOAD_MOVIES_REJECTED = 'LOAD_MOVIES_REJECTED'
export const LOAD_MOVIES_FULFILLED = 'LOAD_MOVIES_FULFILLED'

const load = params => ({
  type: LOAD_MOVIES,
  payload: Movie.all(params),
})

const find = id => ({
  type: FIND_MOVIE,
  payload: id,
})

const favorite = movie => ({
  type: FAVORITE_MOVIE,
  payload: movie,
})

export default { load, find, favorite }
