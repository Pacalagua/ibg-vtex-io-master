import React, { useEffect, useState, useContext } from 'react'
import { useProduct, ProductContext } from 'vtex.product-context'
import { useQuery } from 'react-apollo'
import GET_PRODUCTS from './getProductsByIdentifier.gql'
import styles from './styles.css'

export const DiscountCategory = () => {

  const selectedProduct = useContext(ProductContext);
  const [ofertas, setOfertas] = useState(false);
  const [percent, setPercent] = useState(0);

  const clusters = selectedProduct.product.productClusters;

  const ListPrice = selectedProduct.selectedItem.sellers[0].commertialOffer.ListPrice
  const Price = selectedProduct.selectedItem.sellers[0].commertialOffer.Price

  const { data: dataProduct } = useQuery(GET_PRODUCTS, {
    fetchPolicy: 'network-only',
    variables: { field: 'id', values: selectedProduct.product.productId },
  })

  const plpStyles = document.querySelector('.vtex-flex-layout-0-x-flexColChild--CategoryDiscount-plp');

  useEffect(() => {
    for (let cluster of clusters) {
      let idCluster = cluster.id
      console.log('clusters', cluster)
      if (idCluster == '138') {
        setOfertas(true);
        setPercent(Math.round(((ListPrice - Price) / ListPrice) * 100));
      }
    }
  }, [dataProduct]);

  return (
    <>
      {ofertas ?

        <img src="https://ibgcol.vtexassets.com/arquivos/ids/158972/highlight-oferta.svg" className={`${plpStyles ? styles.CategoryDiscountPLP : styles.CategoryDiscount}`} /> : null
      }
    </>
  )
}
