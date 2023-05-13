import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, Slider, Slide, DotGroup} from 'pure-react-carousel';
import styled from "styled-components";

const Carousel = ({ images, publicProfile }) => {

  var urlParams = new URLSearchParams(window.location.search);
  var show = urlParams.get('show');
 
  
  return (
    <StyledWrapper>
        {
            show?.toLowerCase() !== "oumeir" 
                ? <img src={publicProfile.url} alt="black profile picture" className="public-profile"/>
                : (
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={105}
                        totalSlides={images.length}
                    >
                        <Slider>
                            {
                                images.map((item, index) => (
                                        <Slide index={index}>
                                            <img src={item.url} alt="profile picture" />
                                        </Slide>
                                    ))
                            }          
                        </Slider>
                        <DotGroup/>
                    </CarouselProvider>
                )
        }
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`

width: 100%;
height: 100%;

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.carousel {

    .carousel__slide {
        height: 63vh;

        @media(min-width: 768px) {
            height: 61vh;
        }
        
        img {
            @media(min-width: 768px) {
                transform: scale(0.95);
            }

            @media (min-width: 681px) {
                border-radius: 10px;
            }

            @media (min-width: 1121px) {
                border-radius: 6px;
            }
        }
    }

    .carousel__dot-group {
        position: absolute;
        bottom:0;
        left: 50%;
        transform: translateX(-50%);

        .carousel__dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            border: none;
            margin: 10px 4px;
        }

        .carousel__dot--selected {
            background-color: #78cc6d;
        }
    }
}

`;

export default Carousel;