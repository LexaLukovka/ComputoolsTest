import { action, extendObservable, set } from 'mobx'
import LocalStorage from 'services/LocalStorage'
import Movie from 'services/api/Movie'

class MoviesStore {

  constructor() {
    extendObservable(this, {
      loading: false,
      error: null,
      message: null,
      url: LocalStorage.get('url') || null,
      pages: LocalStorage.get('pages') || null,
      favorite: LocalStorage.get('favorite') || [],
      current: LocalStorage.get('current') || null,
      movies: LocalStorage.get('movies') || {},
      allMovies: LocalStorage.get('allMovies') || [],
    })
  }

  @action load(params) {
    const allMovies = [...this.allMovies]
    this.loading = true

    Movie.all(params)
      .then(action(payload => {
        if (allMovies.findIndex(movies => movies.id === payload.results[0].id) < 0) {
          payload.results.map(movie => allMovies.push(movie))
        }

        LocalStorage.put('movies', payload)
        LocalStorage.put('pages', payload.total_pages)
        LocalStorage.put('allMovies', allMovies)

        set(this, {
          movies: payload,
          allMovies,
          pages: payload.total_pages,
        })
      }))
      .finally(action(() => {
        this.loading = false
      }))
      .catch(error =>
        set(this, {
          loading: false,
          error: true,
          message: error,
        }))
  }

  @action find(id) {
    const { allMovies } = this

    const current = allMovies.filter(movie => movie.id === +id)[0]
    if (current) LocalStorage.put('current', current)

    set(this, {
      current,
    })
  }

  @action changeFavorite(movie) {
    const favorite = [...this.favorite]
    const index = favorite.findIndex(f => f.id === movie.id)
    if (index < 0) {
      favorite.unshift(movie)
      LocalStorage.put('favorite', favorite)
    } else {
      favorite.splice(index, 1)
      LocalStorage.put('favorite', favorite)
    }

    set(this, {
      favorite,
    })
  }
  @action path(path) {
    LocalStorage.put('url', path)

    set(this, {
      url: path,
    })
  }
}

export default new MoviesStore()
