import {useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import {format} from 'date-fns'
import Loader from 'react-loader-spinner'

import './index.css'

import Header from '../Header'
import Footer from '../Footer'
import MovieItem from '../MovieItem'

const apiTerms = {fail: 'fail', success: 'success', progress: 'progress'}

const MovieDetails = props => {
  const {match} = props
  const {params} = match
  const {id} = params

  const [movieObject, setMovieObject] = useState({})
  const [apiStatus, setApiStatus] = useState(apiTerms.progress)

  const token = Cookies.get('jwt_token')
  const options = {
    method: 'GET',
    headers: {
      authorization: `bearer ${token}`,
    },
  }

  const getCaseChange = item => ({
    adult: item.adult,
    backdropPath: item.backdrop_path,
    budget: item.budget,
    genres: item.genres,
    id: item.id,
    overview: item.overview,
    posterPath: item.poster_path,
    releaseDate: item.release_date.replace(/-/g, ', '),
    runtime: item.runtime,
    similarMovies: item.similar_movies,
    spokenLanguages: item.spoken_languages,
    title: item.title,
    voteAverage: item.vote_average,
    voteCount: item.vote_count,
  })

  const getData = async () => {
    const response = await fetch(
      `https://apis.ccbp.in/movies-app/movies/${id}`,
      options,
    )

    if (response.ok) {
      const data = await response.json()
      console.log(data.movie_details)
      const movieDetails = getCaseChange(data.movie_details)

      movieDetails.similarMovies = movieDetails.similarMovies.map(item => ({
        backdropPath: item.backdrop_path,
        id: item.id,
        posterPath: item.poster_path,
        title: item.title,
      }))

      const hours = Math.floor(movieDetails.runtime / 60)
      const minutes = movieDetails.runtime % 60
      movieDetails.runtime = `${hours}h ${minutes}min`

      setMovieObject(movieDetails)
      setApiStatus(apiTerms.success)
    } else {
      setApiStatus(apiTerms.fail)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const getSpokenLanguages = () => {
    console.log()
    return movieObject.spokenLanguages !== undefined ? (
      <div className="specific-details-column-container">
        <ul className="specifi-text-ul">
          <li className="list-item">
            <h4 className="specific-heading">Audio Available</h4>
          </li>
          {movieObject.spokenLanguages.map(item => (
            <li className="list-item" key={item.id}>
              <p>{item.english_name}</p>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      ''
    )
  }

  const getGenres = () => {
    console.log()
    return movieObject.genres !== undefined ? (
      <div className="specific-details-column-container">
        <ul className="specific-text-ul">
          <li className="list-item">
            <h4 className="specific-heading">Genres</h4>
          </li>
          {movieObject.genres.map(item => (
            <li className="list-item" key={item.id}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      ''
    )
  }

  const getratingCount = () => {
    console.log()

    return movieObject.voteCount !== undefined &&
      movieObject.voteAverage !== undefined ? (
      <div className="specific-details-column-container">
        <ul className="specific-text-ul">
          <li className="list-item">
            <h4 className="specific-heading">Rating Count</h4>
          </li>
          <li className="list-item">
            <p>{movieObject.voteCount}</p>
          </li>

          <li className="list-item">
            <h4 className="specific-heading">Rating Average</h4>
          </li>
          <li className="list-item">
            <p>{movieObject.voteAverage}</p>
          </li>
        </ul>
      </div>
    ) : (
      ''
    )
  }

  const getBudgetReleaseDate = () => {
    console.log()
    return movieObject.voteCount !== undefined &&
      movieObject.voteAverage !== undefined ? (
      <div className="specific-details-column-container">
        <ul className="specific-text-ul">
          <li className="list-item">
            <h4 className="specific-heading">Budget</h4>
          </li>
          <li className="list-item">
            <p>{movieObject.budget}</p>
          </li>

          <li className="list-item">
            <h4 className="specific-heading">Release Date</h4>
          </li>
          <li className="list-item">
            <p>{format(new Date(movieObject.releaseDate), 'do MMMM y')}</p>
          </li>
        </ul>
      </div>
    ) : (
      ''
    )
  }

  const getMoreLikeMovies = () => {
    console.log()
    return movieObject.similarMovies !== undefined ? (
      <ul className="more-like-movies">
        {movieObject.similarMovies.map(item => (
          <MovieItem key={item.id} item={item} />
        ))}
      </ul>
    ) : (
      ''
    )
  }
  const renderBackdropPoster = () => {
    console.log()
    return (
      <div
        className="backdrop-container"
        style={{backgroundImage: `url(${movieObject.backdropPath})`}}
      >
        <Header />

        <div className="movie-detailing">
          <h1 className="movie-title">{movieObject.title}</h1>
          <div className="runtime-adult-container">
            <p>{movieObject.runtime}</p>
            <div className="adult-decor">
              <p>{movieObject.adult ? 'U' : 'U/A'}</p>
            </div>
            <p>
              {movieObject.releaseDate !== undefined
                ? format(new Date(movieObject.releaseDate), 'y')
                : ''}
            </p>
          </div>

          <p>{movieObject.overview}</p>
          <button type="button" className="play-button">
            Play
          </button>

          <div className="specific-details-container">
            {getGenres()}
            {getSpokenLanguages()}
            {getratingCount()}
            {getBudgetReleaseDate()}
          </div>
        </div>
      </div>
    )
  }

  const renderFail = () => (
    <div className="fail-container">
      <img
        className="fail-image"
        src="https://res.cloudinary.com/dcyavhlbc/image/upload/v1708754332/Group_1_cabwfy.png"
        alt="failure view"
      />
      <p className="fail-text">Something went wrong. Please try again</p>
      <button type="button" className="try-again" onClick={getData}>
        Try Again
      </button>
    </div>
  )

  const renderLoader = () => (
    <div className="loader-container" testid="loader">
      <Loader type="TailSpin" color="#D81F26" height={50} width={50} />
    </div>
  )

  const renderAll = () => {
    console.log()
    return (
      <div>
        {renderBackdropPoster()}
        <h1>More like this </h1>
        {getMoreLikeMovies()}
      </div>
    )
  }

  const renderMovieDetails = () => {
    switch (apiStatus) {
      case apiTerms.fail:
        return renderFail()

      case apiTerms.success:
        return renderAll()
      case apiTerms.progress:
        return renderLoader()
      default:
        return null
    }
  }

  return (
    <div className="movie-details-container">
      {renderMovieDetails()}

      <Footer />
    </div>
  )
}
export default MovieDetails
