import React, { useEffect, useState, useContext } from 'react'
import { ProductContext } from 'vtex.product-context'
import { useQuery } from 'react-apollo'
import GET_PRODUCTS from './getProductsByIdentifier.gql'
import styles from './styles.css'

export const DiscountCategory = () => {

  const selectedProduct = useContext(ProductContext);
  const [ofertas, setOfertas] = useState(false);
  const [exclusivo, setExclusivo] = useState(false);

  const clusters = selectedProduct.product.productClusters;

  const { data: dataProduct } = useQuery(GET_PRODUCTS, {
    fetchPolicy: 'network-only',
    variables: { field: 'id', values: selectedProduct.product.productId },
  })

  const plpStyles = document.querySelector('.vtex-flex-layout-0-x-flexColChild--CategoryDiscount-plp');

  useEffect(() => {
    for (let cluster of clusters) {
      let idCluster = cluster.id
      if (idCluster == '181') setExclusivo(true);
      if (idCluster == '182') setOfertas(true);
    }
  }, [dataProduct]);

  if (exclusivo == true) {
    return (
      <>
        <img src="https://ibgcol.vtexassets.com/arquivos/ids/158998/highlight-exclusivo.svg" className={`${plpStyles ? styles.ExclusivoPLP : styles.Exclusivo}`} />
      </>
    )
  } else {
    if (ofertas == true) return (
      <>
        <img src="https://ibgcol.vtexassets.com/arquivos/ids/158972/highlight-oferta.svg" className={`${plpStyles ? styles.CategoryDiscountPLP : styles.CategoryDiscount}`} />
      </>
    )
  }
  return (<></>)
}
