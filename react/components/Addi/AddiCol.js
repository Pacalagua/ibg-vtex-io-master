import React, { useEffect, useState } from 'react';
import useProduct from 'vtex.product-context/useProduct'

export const AddiCol = () => {

    const ProductContext = useProduct();
    const priceToday = ProductContext?.product?.priceRange?.sellingPrice?.highPrice

    useEffect(() => {
        
        const script = document.createElement('script');
        script.src = 'https://s3.amazonaws.com/widgets.addi.com/bundle.min.js';
        document.body.appendChild(script);

    }, []);

    return (
        <>
            <div>
                <addi-widget price={priceToday} addiAllySlug='ivanboterogomeztienda-ecommerce'></addi-widget>
            </div>
        </>
    )
}