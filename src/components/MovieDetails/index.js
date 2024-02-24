import {useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import {format} from 'date-fns'
import Loader from 'react-loader-spinner'

import {
  MoviedetailsContainer,
  BackdropContainer,
  MovieDetailing,
  RuntimeAdultContainer,
  MovieTitle,
  AdultDecor,
  PlayButton,
  SpecificDetailsContainer,
  SpecificDetailsColumnContainer,
  SpecificHeading,
  SpecificTextUl,
  ListItem,
  MoreLikeMovie,
  LoaderContainer,
} from './StyledComponents'
import Header from '../Header'
import Footer from '../Footer'
import MovieItem from '../MovieItem'
const MovieDetails = props => {
  const {match} = props
  const {params} = match
  const {id} = params

  const [loading, setLoading] = useState(true)
  const [movieObject, setMovieObject] = useState({})

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

  useEffect(() => {
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
        setLoading(false)
      } else {
        setLoading(true)
      }
    }

    getData()
  }, [])

  const getSpokenLanguages = () => {
    return movieObject.spokenLanguages !== undefined ? (
      <SpecificDetailsColumnContainer>
        <SpecificTextUl>
          <ListItem>
            <SpecificHeading>Audio Available</SpecificHeading>
          </ListItem>
          {movieObject.spokenLanguages.map(item => (
            <ListItem key={item.id}>{item.english_name}</ListItem>
          ))}
        </SpecificTextUl>
      </SpecificDetailsColumnContainer>
    ) : (
      ''
    )
  }

  const getGenres = () => {
    return movieObject.genres !== undefined ? (
      <SpecificDetailsColumnContainer>
        <SpecificTextUl>
          <ListItem>
            <SpecificHeading>Genres</SpecificHeading>
          </ListItem>
          {movieObject.genres.map(item => (
            <ListItem key={item.id}>{item.name}</ListItem>
          ))}
        </SpecificTextUl>
      </SpecificDetailsColumnContainer>
    ) : (
      ''
    )
  }

  const getratingCount = () => {
    return movieObject.voteCount !== undefined &&
      movieObject.voteAverage !== undefined ? (
      <SpecificDetailsColumnContainer>
        <SpecificTextUl>
          <ListItem>
            <SpecificHeading>Rating Count</SpecificHeading>
          </ListItem>
          <ListItem>{movieObject.voteCount}</ListItem>

          <ListItem>
            <SpecificHeading>Rating Average</SpecificHeading>
          </ListItem>
          <ListItem>{movieObject.voteAverage}</ListItem>
        </SpecificTextUl>
      </SpecificDetailsColumnContainer>
    ) : (
      ''
    )
  }

  const getBudgetReleaseDate = () => {
    return movieObject.voteCount !== undefined &&
      movieObject.voteAverage !== undefined ? (
      <SpecificDetailsColumnContainer>
        <SpecificTextUl>
          <ListItem>
            <SpecificHeading>Budget</SpecificHeading>
          </ListItem>
          <ListItem>{movieObject.budget}</ListItem>

          <ListItem>
            <SpecificHeading>Release Date</SpecificHeading>
          </ListItem>
          <ListItem>
            {format(new Date(movieObject.releaseDate), 'do MMMM y')}
          </ListItem>
        </SpecificTextUl>
      </SpecificDetailsColumnContainer>
    ) : (
      ''
    )
  }

  const getMoreLikeMovies = () => {
    return movieObject.similarMovies !== undefined ? (
      <MoreLikeMovie>
        {movieObject.similarMovies.map(item => (
          <MovieItem key={item.id} item={item} />
        ))}
      </MoreLikeMovie>
    ) : (
      ''
    )
  }
  const renderBackdropPoster = () => {
    return (
      <BackdropContainer bgimage={movieObject.backdropPath}>
        <Header />

        <MovieDetailing>
          <MovieTitle>{movieObject.title}</MovieTitle>
          <RuntimeAdultContainer>
            <p>{movieObject.runtime}</p>
            <AdultDecor>
              <p>{movieObject.adult ? 'U' : 'U/A'}</p>
            </AdultDecor>
            <p>
              {movieObject.releaseDate !== undefined
                ? format(new Date(movieObject.releaseDate), 'y')
                : ''}
            </p>
          </RuntimeAdultContainer>

          <p>{movieObject.overview}</p>
          <PlayButton>Play</PlayButton>

          <SpecificDetailsContainer>
            {getGenres()}
            {getSpokenLanguages()}
            {getratingCount()}
            {getBudgetReleaseDate()}
          </SpecificDetailsContainer>
        </MovieDetailing>
      </BackdropContainer>
    )
  }

  const renderLoader = () => (
    <LoaderContainer testid="loader">
      <Loader type="TailSpin" color="#D81F26" height={50} width={50} />
    </LoaderContainer>
  )
  const renderAll = () => {
    return (
      <div>
        {renderBackdropPoster()}
        <h1>More like this </h1>
        {getMoreLikeMovies()}
      </div>
    )
  }

  return (
    <MoviedetailsContainer>
      {loading === true ? renderLoader() : renderAll()}

      <Footer />
    </MoviedetailsContainer>
  )
}
export default MovieDetails
