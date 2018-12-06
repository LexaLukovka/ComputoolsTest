import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import movies from 'src/redux/movies/action'

const initMapStateToProps = store => ({
  currentPage: store.moviesReducer.currentPage,
  pages: store.moviesReducer.pages,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    movies: bindActionCreators(movies, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
