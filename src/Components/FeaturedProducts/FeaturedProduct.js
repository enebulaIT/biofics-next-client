import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import classes from './FeaturedProducts.module.css';
import appClasses from '../../App.module.css';
import { useRouter } from 'next/router'


export default function FeaturedProduct(props) {
    const { productData } = props;
    const productImg = productData?.attributes?.Thumbnail_Image?.data?.attributes?.url || '/images/Logo.png';
    const productalt = productData?.attributes?.Thumbnail_Image?.data?.attributes?.alternativeText;
    const router = useRouter()

    return (
        <Card sx={{ maxWidth: 345, minHeight: 500, maxHeight: 500, margin: '0 auto' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="340"
                    image={productImg}
                    alt={productalt}
                />
                <CardContent>
                    <span className={classes.name} gutterBottom variant="h5" component="div">
                        {productData?.attributes?.Title}
                    </span>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button className={appClasses.btn1} onClick={() => router.push(`/products/product-detail/${productData.id}`)}>
                    Details
                </Button>
            </CardActions>
        </Card>
    );
}