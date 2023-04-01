import { Box, styled } from '@mui/material'
import Slide from './Slide'


const Image = styled('img')({
    width: 217,
    height: 'auto'
})

const Component = styled(Box)`
display:flex;

`

const LeftComponent = styled(Box)(({theme}) => ({
width : '83%',
[theme.breakpoints.down('md')]:{
    width : '100%',
}
})
)

const RightComponent = styled(Box)(({theme}) => ({
    background : '#FFFFFF',
    padding:'5px',
    marginTop:'10px',
    marginLeft:'10px',
    width:'15%',
    textAlign:'Center',
    [theme.breakpoints.down('md')]:{
        display:"none",
        height:120
    }
})
)




const MidSlide = ({ products, title, timer }) => {
    const addURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70'
       
    return (
        <Component>
            <LeftComponent>
                <Slide
                    products={products}
                    title={title}
                    timer={timer} />

            </LeftComponent>
            <RightComponent>
                <Image src={addURL} alt=""/>
            </RightComponent>
        </Component>
    )
}

export default MidSlide;