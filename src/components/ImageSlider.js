import { Image } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = ({ img, img2, img3 }) => {
  return (
    <Carousel infiniteLoop className="carousel">
      <Image objectFit="contain" src={img} w="100%" h="400px" />
      <Image objectFit="contain" src={img2} h="400px" w="100%" />
      <Image objectFit="contain" src={img3} h="400px" w="100%" />
    </Carousel>
  );
};

export default ImageSlider;
