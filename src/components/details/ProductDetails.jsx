import { Box, Button, styled, Typography, Table, TableBody, TableRow, TableCell } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';


const SmallText = styled(Box)`
font-size: 14px;
vertical-align:baseline;
& > p {
    font-size:14px;   
    margin-top:10px;
}
`
const ColumnText = styled(TableRow)`
font-size:14px;
vertical-align:baseline;
 & > td {
    font-size:14px;
    margin-top:10px;
    border:none;
 }
`



const ProductDetails = ({ product }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
   const addURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 1000))
    //const time = new Date(new Date().getTime() + (5 * 24 * 60 * 1000))
    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
                8 Rating & 1 Review
                <Box component="span">
                    <img src={fassured} alt="assured" style={{ width: 77, marginLeft: 20 }} />
                </Box>
                <Typography>
                    <Box component='span' style={{ fontSize: 28, color: 'black' }}>
                        ₹{product.price.cost}
                    </Box>&nbsp;&nbsp;
                    <Box component='span' style={{ color: '#878787' }}>
                        <strike>₹{product.price.mrp}</strike>
                    </Box>&nbsp; &nbsp; &nbsp;
                    <Box component='span' style={{ color: '#388E3C' }}>
                        <strike>{product.price.discount}</strike>
                    </Box>
                </Typography>
            </Typography>
            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography style={{ display: 'flex' }}><LocalOfferIcon style={{ color: '#388E3C', fontSize: 18, marginRight: '10px' }} />Special PriceGet extra 15% off (price inclusive of cashback/coupon)T&C </Typography>
                <Typography style={{ display: 'flex' }}><LocalOfferIcon style={{ color: '#388E3C', fontSize: 18, marginRight: '10px' }} /> Bank Offer5% Cashback on Flipkart Axis Bank CardT&C </Typography>
                <Typography style={{ display: 'flex' }}><LocalOfferIcon style={{ color: '#388E3C', fontSize: 18, marginRight: '10px' }} />Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500*Know More </Typography>
                <Typography style={{ display: 'flex' }}><EventAvailableIcon style={{ color: '#388E3C', fontSize: 18, marginRight: '10px' }} />No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2500T&C </Typography>
                <Typography style={{ display: 'flex' }}><EventAvailableIcon style={{ color: '#388E3C', fontSize: 18, marginRight: '10px' }} />No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2999T&C </Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery {date.toDateString()}, Saturday|Free₹40?
                            if ordered before 4PM</TableCell>

                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell style={{ color: '#2874f0' }}>10 Days Return Policy</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <Box style={{ color: '#2874f0' }} component="span">superComNet</Box>
                            <Typography>GST invoice available</Typography>
                            <Typography>View More About Seller</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2} style={{ color: '#878787' }}>
                           <img src={addURL} style={{ width:390 }} alt='flipkart points'/>
                        </TableCell>
                        
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>
                          Description
                        </TableCell>
                        <TableCell>
                         {product.description}
                        </TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetails;