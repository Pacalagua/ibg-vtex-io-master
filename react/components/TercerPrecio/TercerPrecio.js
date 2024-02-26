import React, { useContext } from 'react'
import { ProductContext } from 'vtex.product-context'
import style from './style.css'

export const TercerPrecio = () => {

    const product = useContext(ProductContext);

    const especificacionesTexto = product.product?.specificationGroups?.filter(
        (item) => item.name === "Especificaciones-Texto"
    );
    const specifications = especificacionesTexto[0]?.specifications?.filter(
        (item) => item.name === "Financiamiento"
    );

    const formatter = new Intl.NumberFormat('es-CO', {
        style: 'decimal',
        currency: 'COP',
    });

    return (
        <div className={`${style.wraperPrice}`}>
            {
                (specifications) ?
                    specifications.length == 1 && (
                        <div>${formatter.format(specifications[0].values[0])} <span><img src='https://ibgcol.vtexassets.com/arquivos/ids/159076/tarjetas-icon.svg' height='12px' /> <img src='https://ibgcol.vteximg.com.br/arquivos/ids/159075/pse-logo.svg' height='10px' /></span></div>
                    ) : null
            }
        </div>
    )
}