
import { useEffect } from 'react';
import { Box, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';


//component
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';
//redux
import { getProducts } from '../../redux/actions/product.Action';

const Component = styled(Box)`
padding: 8px 10px;
background:#F3F3F3;
`





const Home = () => {
   const {products} = useSelector(state => state.getProducts)
   
   console.log("products",products)
   const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])




    return (
        <>
            <NavBar />
            <Component>
                <Banner />
            <MidSlide products={products} title="Deal of the Day" timer={true}/>
            <MidSection/>
            <Slide products={products} title="Discount for you" timer={false}/>
            <Slide products={products} title="Suggested Items" timer={false}/>
            <Slide products={products} title="Top Selection" timer={false}/>
            <Slide products={products} title="Recommndade Items" timer={false}/>
            <Slide products={products} title="Trending Offers" timer={false}/>
            <Slide products={products} title="Season's Top Picks" timer={false}/>
            <Slide products={products} title="Top Deals on Accessories" timer={false}/>
            </Component>
        </>

    )

}

export default Home;