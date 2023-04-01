import { useEffect } from 'react';
import { Box, styled, Grid, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductsDetails } from "../../redux/actions/product.Action"
import ActionItem from "./Actionitem"
import { fontSize } from '@mui/system';
import ProductDetails from './ProductDetails';


const Component = styled(Box)`
background : #F2F2F2;
margin-top: 50px;
`

const Container = styled(Grid)`
background : #FFFFFF;
display:flex;

`


const RightContainer = styled(Grid)`
margin-top: 50px
`





const DetailView = () => {
    const { loading, product } = useSelector(state => state.getProductDetails)
    const { pid } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        if (product && pid !== product.id)
            dispatch(getProductsDetails(pid))
    }, [dispatch, pid, loading, product])

    return (
        <Component>
            {
                !loading && product && Object.keys(product).length &&
                <Container container>
                    <Grid item lg={4} md={4} sm={8} xs={12}> <ActionItem product={product}> </ActionItem></Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                       
                        <ProductDetails product={product}/>
                    </RightContainer>

                </Container>

            }
        </Component>
    )
}

export default DetailView;