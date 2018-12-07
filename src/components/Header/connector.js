import { connect } from 'react-redux'

const initMapStateToProps = store => ({
  header: store.headerReducer,
  url: store.moviesReducer.url,
})

export default connect(initMapStateToProps)
