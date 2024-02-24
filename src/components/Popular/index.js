import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import MovieItem from '../MovieItem'
import {
  PopularContainer,
  LoaderContainer,
  FailContainer,
  FailImage,
  FailText,
  TryAgain,
  UnorderSearchList,
} from './StyledComponents'

const apiTerms = {fail: 'fail', success: 'success', progress: 'progress'}

const Popular = () => {
  const [apiStatus, setApiStatus] = useState(apiTerms.progress)
  const [popularList, setPopularList] = useState([])

  const token = Cookies.get('jwt_token')

  const options = {
    method: 'GET',
    headers: {
      authorization: `bearer ${token}`,
    },
  }

  const getData = async () => {
    const reponse = await fetch(
      `https://apis.ccbp.in/movies-app/popular-movies`,
      options,
    )

    if (reponse.ok) {
      const {results} = await reponse.json()
      const updateResults = results.map(item => ({
        backdropPath: item.backdrop_path,
        id: item.id,
        posterPath: item.poster_path,
        title: item.title,
      }))

      setPopularList(updateResults)
      setApiStatus(apiTerms.success)
    } else {
      setApiStatus(apiTerms.fail)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const renderLoader = () => (
    <LoaderContainer testid="loader">
      <Loader type="TailSpin" color="#D81F26" height={50} width={50} />
    </LoaderContainer>
  )

  const renderFail = () => (
    <FailContainer>
      <FailImage
        src="https://res.cloudinary.com/dcyavhlbc/image/upload/v1708754332/Group_1_cabwfy.png"
        alt="fail"
      />
      <FailText>Something went wrong. Please try again</FailText>
      <TryAgain onClick={getData}>Try Again</TryAgain>
    </FailContainer>
  )

  const renderPopulaList = () => (
    <UnorderSearchList>
      {popularList.map(item => (
        <MovieItem item={item} key={item.id} />
      ))}
    </UnorderSearchList>
  )

  const renderPopularMovies = () => {
    switch (apiStatus) {
      case apiTerms.progress:
        return renderLoader()
      case apiTerms.success:
        return renderPopulaList()
      case apiTerms.fail:
        return renderFail()
      default:
        return null
    }
  }

  return (
    <PopularContainer>
      <Header />
      {renderPopularMovies()}
    </PopularContainer>
  )
}

export default Popular
