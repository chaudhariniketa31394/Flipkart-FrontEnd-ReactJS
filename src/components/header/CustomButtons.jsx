import {useState,useContext} from 'react';


import { Box, Button, Typography, styled } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material';

import { Datacontext } from '../../context/DataProvider';

// components
import LoginDialog from '../login/LoginDialog';
import Profile from '../header/Profile'


const Wrapper = styled(Box)`
display: flex;
margin: 0 3% 0 auto;
& > button, & > P , & > div {
    margin-right : 40px;
    font-size:14px;
    align-items: center;   
}
`

const CartIconContainer = styled(Box)`
display: flex;
`

const LoginButtons = styled(Button)`
color: #2874f0;
background: #fff;
text-transform:none;
padding-left: 30px;
padding-right: 40px; 
border-radius: 2px;
box-shadow:none;
font-weight:600;
height: 32px
`

const CustomButtons = () => {

    const [open, setOpen] = useState(false);

    const {account, setAccount} = useContext(Datacontext);


   const openDialog = () => {
    setOpen(true)
   }


    return (
        <Wrapper>
            {
                account ? <Profile account = {account} setAccount = {setAccount}/>:
                <LoginButtons variant='contained' onClick={() => openDialog()}>Login</LoginButtons>
            }
            <Typography style={{ marginTop: '8px', width: 135, fontSize:15 }} >Become a Seller</Typography>
            <Typography style={{ marginTop: '8px' }}>More</Typography>
            <CartIconContainer style={{ marginTop: '8px' }}>
                <ShoppingCart />
                <Typography>Cart</Typography>
            </CartIconContainer>
            <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
    )
}

export default CustomButtons;