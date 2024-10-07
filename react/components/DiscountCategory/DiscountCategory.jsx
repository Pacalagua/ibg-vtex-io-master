import React, { useEffect, useState, useContext } from 'react'
import { ProductContext } from 'vtex.product-context'
import { useQuery } from 'react-apollo'
import GET_PRODUCTS from './getProductsByIdentifier.gql'
import styles from './styles.css'

export const DiscountCategory = () => {

  const selectedProduct = useContext(ProductContext);
  const [discountState, setDiscountState] = useState({
    ofertas: false,
    exclusivo: false,
    percent: 0,
  });

  const clusters = selectedProduct?.product?.productClusters ?? [];
  const ListPrice = selectedProduct?.selectedItem?.sellers?.[0]?.commertialOffer?.ListPrice ?? 0;
  const Price = selectedProduct?.selectedItem?.sellers?.[0]?.commertialOffer?.Price ?? 0;

  const { data: dataProduct } = useQuery(GET_PRODUCTS, {
    fetchPolicy: 'network-only',
    variables: { field: 'id', values: selectedProduct.product.productId },
  })

  const plpStyles = document.querySelector('.vtex-flex-layout-0-x-flexColChild--CategoryDiscount-plp');

  useEffect(() => {
    if (ListPrice > 0) {
      const descuento = Math.round(((ListPrice - Price) / ListPrice) * 100);
      if (descuento > 0) {
        let newState = { percent: descuento, ofertas: false, exclusivo: false };

        for (let cluster of clusters) {
          const idCluster = cluster.id;
          if (idCluster === '181') {
            newState.exclusivo = true;
          }
          if (idCluster === '182') {
            newState.ofertas = true;
          }
        }

        setDiscountState(newState);
      }
    }
  }, [dataProduct, ListPrice]);

  if (discountState.exclusivo) {
    return (
      <span className={`${plpStyles ? styles.CategoryDiscountPLPExclusivo : styles.CategoryDiscountExclusivo}`}>
        -{discountState.percent}% Exclusivo Online
      </span>
    );
  }

  if (discountState.ofertas) {
    return (
      <span className={`${plpStyles ? styles.CategoryDiscountPLPOferta : styles.CategoryDiscountOferta}`}>
        -{discountState.percent}%
      </span>
    );
  }

  if (discountState.percent > 0) {
    return (
      <span className={`${plpStyles ? styles.CategoryDiscountPLPNormal : styles.CategoryDiscountNormal}`}>
        -{discountState.percent}%
      </span>
    );
  }

  return null;

}