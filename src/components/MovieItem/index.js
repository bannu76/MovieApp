import {ItemContainer, CustomLink, MovieImage} from './StyledComponents'

const MovieItem = props => {
  const {item} = props

  return (
    <ItemContainer>
      <CustomLink to={`movies-app/movies/${item.id}`}>
        <MovieImage src={item.posterPath} alt={item.title} />
      </CustomLink>
    </ItemContainer>
  )
}
export default MovieItem
