import { connect } from 'react-redux'

const initMapStateToProps = store => ({
  header: store.headerReducer,
})

export default connect(initMapStateToProps)
