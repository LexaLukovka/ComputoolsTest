import { connect } from 'react-redux'

const initMapStateToProps = store => ({
  url: store.moviesReducer.url,
  moviesStore: store.moviesReducer.movies,
  favorite: store.moviesReducer.favorite,
})


export default connect(initMapStateToProps)
