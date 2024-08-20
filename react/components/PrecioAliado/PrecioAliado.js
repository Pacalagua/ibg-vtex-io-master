import React, { useContext } from 'react'
import { ProductContext } from 'vtex.product-context'
import style from './style.css'

export const PrecioAliado = () => {

    const selectedProduct = useContext(ProductContext);
    const Price = selectedProduct.selectedItem.sellers[0].commertialOffer.Price;

    /* const pdpStyles = document.querySelector('.vtex-flex-layout-0-x-flexColChild--precio-aliado-pdp'); */

    const formatter = new Intl.NumberFormat('es-CO', {
        style: 'decimal',
        currency: 'COP',
    });

    return (
        <>
            <div className={`${style.precioAliado}`}>
                <span>${formatter.format(Price)} <img className={`${style.precioAliadoImg}`} src='https://ibgcol.vtexassets.com/arquivos/ids/159231/logo-addi.svg' /> | <img className={`${style.precioAliadoImg}`} src='https://ibgcol.vtexassets.com/arquivos/ids/158967/logo-sistecredito.svg' /> | <img className={`${style.precioAliadoImg}`} src='https://ibgcol.vtexassets.com/arquivos/ids/159074/logo-sumas.svg' /></span>
            </div>
        </>
    )
}