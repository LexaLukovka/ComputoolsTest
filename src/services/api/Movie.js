/* eslint-disable class-methods-use-this,no-underscore-dangle */
import Http from 'services/Http'

class Movie {
  all(page) {
    return Http.get(`/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=${page}`)
  }
}

export default new Movie()
