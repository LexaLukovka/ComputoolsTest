import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import layout from 'src/redux/layout/action'
import movies from 'src/redux/movies/action'

const initMapStateToProps = store => ({
  layout: store.layoutReducer,
  movie: store.moviesReducer.current,
  favorite: store.moviesReducer.favorite,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    layout: bindActionCreators(layout, dispatch),
    movies: bindActionCreators(movies, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
