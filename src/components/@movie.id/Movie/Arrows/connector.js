import { connect } from 'react-redux'

const initMapStateToProps = store => ({
  movies: store.moviesReducer.favorite,
})


export default connect(initMapStateToProps)
