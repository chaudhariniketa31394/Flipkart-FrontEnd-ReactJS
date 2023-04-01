import { AppBar, Typography, Toolbar, Box, styled } from '@mui/material'

//component
import Search from './Search';
import CustomButtons from './CustomButtons';
import {Link} from 'react-router-dom';

const StyleHeader = styled(AppBar)`
background: #2874f0;
heigth: 30px
`;

const Component = styled(Link)`
 margin-left: 12%;
 line-height:0;
 text-decoration:none;
 color:inherit;
 `


const SubHeading = styled(Typography)`
 font-size: 10px;
 font-style: italic;
 `

const PlusImage = styled('img')({
    width: 8,
    height: 12,
    marginLeft: 4
})


const CustomButtonWrapper = styled(Box)`
 margin : 0 auto 0 auto;
`


const Header = () => {
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const logourl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png'
    return (
        <StyleHeader>
            <Toolbar>
                <Component to='/'>
                    <img src={logourl} alt="logo" style={{ width: 70 }} />
                    <Box style={{ display: 'flex' }}>
                        <SubHeading>
                            Explore
                            <Box component="span" style={{ color: '#FFE500' }}> Plus</Box>
                        </SubHeading>
                        <PlusImage src={subURL} alt="logo" style={{ width: 15 }} />
                    </Box>
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>
        </StyleHeader>
    )
}

export default Header;