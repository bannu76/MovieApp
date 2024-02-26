import Slider from 'react-slick'
import {Link} from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

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

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {movies.map(item => {
          const {id, posterPath, title} = item
          return (
            <div className="slide-image-container">
              <Link className="nav-Link" to={`/movies/${id}`}>
                <img className="slide-image" src={posterPath} alt={title} />
              </Link>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default MoviesScroll
