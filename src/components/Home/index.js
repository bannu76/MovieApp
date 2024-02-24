import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import MoviesScroll from './MoviesScroll'
import Footer from '../Footer'
import Header from '../Header'
import {
  HomeContainer,
  HomeMainContianer,
  TrendingOriginalsContainer,
  LoaderContainer,
  MovieHeading,
  FailContainer,
  FailImage,
  FailText,
  TryAgain,
  MovieName,
  MovieDes,
  MoviePlayButton,
  HeaderSelfAlign,
  Summary,
} from './StyledComponent'

const apiTerms = {
  progress: 'progress',
  success: 'success',
  fail: 'fail',
}

const Home = () => {
  const [moviePoster, setMoviePoster] = useState({
    movieImageUrl: '',
    movieTitle: '',
    movieDescription: '',
  })
  const [trendVideos, setTrendVideos] = useState([])
  const [originals, setOriginals] = useState([])

  const [trendApiStatus, setTrendApiStatus] = useState(apiTerms.progress)
  const [originalsApiStatus, setOriginalsApiStatus] = useState(
    apiTerms.progress,
  )
  const [moviePosterApiStatus, setmoviePosterApiStatus] = useState(
    apiTerms.progress,
  )

  const caseChange = item => ({
    backDropPath: item.backdrop_path,
    id: item.id,
    overview: item.overview,
    posterPath: item.poster_path,
    title: item.title,
  })
  const token = Cookies.get('jwt_token')

  const options = {
    method: 'GET',
    headers: {
      authorization: `Bearer ${token} `,
    },
  }

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        'https://apis.ccbp.in/movies-app/trending-movies',
        options,
      )

      if (res.ok) {
        const {results} = await res.json()

        const updatedData = results.map(item => caseChange(item))
        setTrendApiStatus(apiTerms.success)
        setTrendVideos(updatedData)
      } else {
        setTrendApiStatus(apiTerms.fail)
      }
    }
    getData()
  }, [])

  useEffect(() => {
    const getData = async () => {
      const originalsRes = await fetch(
        'https://apis.ccbp.in/movies-app/originals',
        options,
      )

      if (originalsRes.ok) {
        const {results} = await originalsRes.json()
        const updateedOrignalsData = results.map(item => caseChange(item))
        setOriginalsApiStatus(apiTerms.success)
        setOriginals(updateedOrignalsData)

        const moviePosterIndex = Math.abs(
          Math.ceil(Math.random() * updateedOrignalsData.length - 1),
        )
        const BackgroudMovie = updateedOrignalsData[moviePosterIndex]
        setmoviePosterApiStatus(apiTerms.success)
        setMoviePoster({
          ...moviePoster,
          movieImageUrl: BackgroudMovie.backDropPath,
          movieTitle: BackgroudMovie.title,
          movieDescription: BackgroudMovie.overview,
        })
      } else {
        setOriginalsApiStatus(apiTerms.fail)
        setmoviePosterApiStatus(apiTerms.fail)
      }
    }

    getData()
  }, [])

  const renderLoader = () => (
    <LoaderContainer testid="loader">
      <Loader type="TailSpin" color="#D81F26" height={50} width={50} />
    </LoaderContainer>
  )

  const renderFail = () => {
    return (
      <FailContainer>
        <FailImage
          src="https://res.cloudinary.com/dcyavhlbc/image/upload/v1708499306/alert-triangle_ad7li7.png"
          alt="fail"
        />
        <FailText>Something went wrong. Please try again</FailText>
        <TryAgain>Try Again</TryAgain>
      </FailContainer>
    )
  }

  const renderBackGroundPoster = () => (
    <HomeContainer bgimage={moviePoster.movieImageUrl}>
      <HeaderSelfAlign>
        <Header />
      </HeaderSelfAlign>
      <Summary>
        <MovieName>{moviePoster.movieTitle}</MovieName>
        <MovieDes>{moviePoster.movieDescription}</MovieDes>
        <MoviePlayButton>Play</MoviePlayButton>
      </Summary>
    </HomeContainer>
  )

  const renderData = moviesData => {
    console.log()
    return <MoviesScroll movies={moviesData} />
  }

  const rendering = (apiStatus = '', moviesData = '') => {
    switch (apiStatus) {
      case apiTerms.progress:
        return renderLoader()
      case apiTerms.success:
        return renderBackGroundPoster()
      case apiTerms.fail:
        return renderFail()
      default:
        return null
    }
  }

  const renderingMovies = (apiStatus = '', moviesData = '') => {
    switch (apiStatus) {
      case apiTerms.progress:
        return renderLoader(moviesData)
      case apiTerms.success:
        return renderData(moviesData)
      case apiTerms.fail:
        return renderFail()
      default:
        return null
    }
  }

  return (
    <HomeMainContianer>
      {rendering(moviePosterApiStatus)}

      <MovieHeading>Trending Now</MovieHeading>

      {renderingMovies(trendApiStatus, trendVideos)}

      <MovieHeading>originals</MovieHeading>

      {renderingMovies(originalsApiStatus, originals)}

      <Footer />
    </HomeMainContianer>
  )
}

export default Home
