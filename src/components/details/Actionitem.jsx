import { Box, Button, styled, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';




const LeftContainer = styled('Box')`
min-width: 40%;
padding: 40px 0 0 80px;
`


const Image = styled('img')({
    padding: "40px 20px",
    border: '1px solid #f0f0f0',
    width: '60%'

})

const StyledButton = styled(Button)`
width:40%;
height:50px;
border-radius: 5px;
margin-left:20px
`



const ActionItem = ({ product }) => {
    return (
        <LeftContainer>
            <Image src={product.url} alt="product" />
            <StyledButton variant="contained" style ={{marginRight:10, background:'#ff9f00'}}><ShoppingCartIcon/>Add to Cart</StyledButton>
            <StyledButton variant="contained" style ={{background:'#fb541b'}}><FlashOnIcon/>Shop now</StyledButton>
        </LeftContainer>


    )
}

export default ActionItem;