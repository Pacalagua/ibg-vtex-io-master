import React, { useContext, useEffect } from 'react'
import { ProductContext } from 'vtex.product-context'
import style from './style.css'

export const TercerPrecio = () => {
    const product = useContext(ProductContext);

    const especificacionesTexto = product.product?.specificationGroups?.filter(
        (item) => item.name === "Especificaciones-Texto"
    );
    const specifications = especificacionesTexto[0]?.specifications?.filter(
        (item) => item.name === "Financiamiento"
            // console.log("itemssssss", item.name)
    );

    const formatter = new Intl.NumberFormat('es-CO', {
        style: 'decimal',
        currency: 'COP',


    });

    console.log("Especificaciones-Texto", especificacionesTexto)
    // console.log("specifications", specifications)
    console.log("product", product)


    return (
        <div className={`${style.wraperPrice}`}>
            {/* <span>Hola Mundo</span> */}

            {
                (specifications) ? 
                specifications.length == 1 && (
                    <div>${formatter.format(specifications[0].values[0])}  <span>Financiado</span></div>
                ) : null 
            }

        </div>
    )
}