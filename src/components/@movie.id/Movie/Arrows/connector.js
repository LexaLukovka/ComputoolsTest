import { connect } from 'react-redux'

const initMapStateToProps = store => ({
  movies: store.moviesReducer.movies,
})


export default connect(initMapStateToProps)
