import Movie from 'services/api/Movie'

export const LOAD_MOVIES = 'LOAD_MOVIES'
export const LOAD_MOVIES_PENDING = 'LOAD_MOVIES_PENDING'
export const LOAD_MOVIES_REJECTED = 'LOAD_MOVIES_REJECTED'
export const LOAD_MOVIES_FULFILLED = 'LOAD_MOVIES_FULFILLED'

const load = params => ({
  type: LOAD_MOVIES,
  payload: Movie.all(params),
})

export default { load }
