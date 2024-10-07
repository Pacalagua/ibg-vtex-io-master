import React, { useContext, useRef, useEffect, useState } from 'react';
import { ProductContext } from 'vtex.product-context';
import style from './style.css';

export const PrecioAliado = () => {
  const selectedProduct = useContext(ProductContext);
  const Price = selectedProduct?.selectedItem?.sellers?.[0]?.commertialOffer?.Price ?? 0;

  const containerRef = useRef(null);
  const [isPDP, setIsPDP] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      if (containerRef.current.closest('.vtex-flex-layout-0-x-flexColChild--precio-aliado-pdp')) {
        setIsPDP(true);
      }
    }
  }, []);

  const formatter = new Intl.NumberFormat('es-CO', {
    style: 'decimal',
    currency: 'COP',
  });

  const images = [
    { src: 'https://ibgcol.vtexassets.com/arquivos/ids/159231/logo-addi.svg' },
    { src: 'https://ibgcol.vtexassets.com/arquivos/ids/158967/logo-sistecredito.svg' },
    { src: 'https://ibgcol.vtexassets.com/arquivos/ids/159074/logo-sumas.svg' },
    { src: 'https://ibgcol.vtexassets.com/arquivos/ids/159076/tarjetas-icon.svg' },
    { src: 'https://ibgcol.vteximg.com.br/arquivos/ids/159075/pse-logo.svg' },
    { src: 'https://ibgcol.vteximg.com.br/arquivos/ids/159082/logo_banco.svg' },
    { src: 'https://ibgcol.vteximg.com.br/arquivos/ids/159080/logo-efecty.svg' }
  ];

  return (
    <div className={`${style.precioAliado}`}>
      <span>
        ${formatter.format(Price)} Hoy
        <br />
        {images.map((img, index) => (
          <img
            key={index}
            ref={containerRef}
            className={`${isPDP ? style.precioAliadoImgPDP : style.precioAliadoImgPLP}`}
            src={img.src}
          />
        ))}
      </span>
    </div>
  );
};