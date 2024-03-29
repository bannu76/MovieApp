import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
  SliderContainer,
  SlideImage,
  SlideImageContainer,
} from './StyledComponent'

const settings = {
  dots: false,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,

  swipeToSlide: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
}

const MoviesScroll = props => {
  const {movies} = props
  console.log(movies)
  return (
    <SliderContainer>
      <Slider {...settings}>
        {movies.map(item => {
          const {id, posterPath, title} = item
          return (
            <SlideImageContainer>
              <SlideImage src={posterPath} alt={title} />
            </SlideImageContainer>
          )
        })}
      </Slider>
    </SliderContainer>
  )
}

export default MoviesScroll
