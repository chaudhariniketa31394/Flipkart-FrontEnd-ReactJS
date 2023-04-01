import { Box,Typography,styled } from '@mui/material';

//component
 import { navData } from '../../constants/data';



 
 const ComponentWrapper = styled(Box)(({theme}) => ({
   display:'flex',
   margin: '55px 30px 0 30px',
   justifyContent: 'space-between',
   overflow: 'hidden',
   [theme.breakpoints.down('lg')]:{
      margin:0
   }
 }))
   
 

 const Container = styled(Box)`
    padding:12px 8px;
    text-align: center
 `


const Text = styled(Typography)`
font-size:14px;
font-weight: 600;
font-family:inherit;
;
`



const NavBar = () => {
     return (
        <ComponentWrapper>
           {
            navData.map(data => (
                <Container>
                 <img src={data.url} alt ="nav" style = {{width:'70px'}}/>
                 <Text>{data.text}</Text>
                </Container>

            ))
           }
        </ComponentWrapper>
     )
}

export default NavBar;