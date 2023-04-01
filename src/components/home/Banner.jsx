import Carousel from "react-multi-carousel";
import {bannerData} from '../../constants/data'
import { styled } from '@mui/material';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const BannerImage = styled('img')
 (({theme}) => ({
  width: '100%',
  height:250,
  [theme.breakpoints.down('md')]:{
      objectFit:"cover",
      height:120
  }
}))





const Banner = () => {
return(
    <>
     <Carousel responsive={responsive}
     dotListClass="custom-dot-list-style"
     itemClass="carousel-item-padding-40-px"
     containerClass="carousel-container"
     swipeable={false}
     draggable={false}
     infinite={true}
     autoPlay={true}
     autoPlaySpeed={4000}
     keyBoardControl={true}
     >
    {bannerData.map((item)=>(
   
          <BannerImage src={item.url} alt ="nav"/>
    
))}
 </Carousel>
</>
)
}

export default Banner;