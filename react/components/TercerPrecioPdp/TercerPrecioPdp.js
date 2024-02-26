import React, { useContext, useState } from 'react'
import { ProductContext } from 'vtex.product-context'
import style from './style.css'
import Modal from 'react-modal';
import ReactDOM from 'react-dom';

export const TercerPrecioPdp = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

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

    const styles = {
        overlay: {
          zIndex: 9999,
        },
      };

    return (
        <div className={`${style.wraperPrice}`}>
            {
                (specifications) ?
                    specifications.length == 1 && (
                        <div>${formatter.format(specifications[0].values[0])} <span><img src='https://ibgcol.vtexassets.com/arquivos/ids/159076/tarjetas-icon.svg' height='14px'/> <img src='https://ibgcol.vteximg.com.br/arquivos/ids/159075/pse-logo.svg' height='14px'/> <img src='https://ibgcol.vteximg.com.br/arquivos/ids/159082/logo_banco.svg
                        ' height='14px'/> <img src='https://ibgcol.vteximg.com.br/arquivos/ids/159080/logo-efecty.svg' height='14px'/> <button className={`${style.btnpopup}`} onClick={openModal}><img src='https://ibgcol.vteximg.com.br/arquivos/ids/159077/info-icon.svg' height='16px'/></button></span></div>
                    ) : null
            }
            {modalIsOpen && ReactDOM.createPortal(
                <Modal style={{ overlay: styles.overlay,}} isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Pagos con tarjetas, transferencia y efectivo" className={`${style.infopopup}`}><h2><img src='https://ibgcol.vtexassets.com/arquivos/ids/159076/tarjetas-icon.svg' height='16px'/> <img src='https://ibgcol.vteximg.com.br/arquivos/ids/159075/pse-logo.svg' height='16px'/> <img src='https://ibgcol.vteximg.com.br/arquivos/ids/159082/logo_banco.svg
                ' height='16px'/> <img src='https://ibgcol.vteximg.com.br/arquivos/ids/159080/logo-efecty.svg' height='16px'/></h2><p>Aplica pagando con Tarjeta de Crédito, Tarjeta Débito, Botón Bancolombia, PSE y Efecty. Los descuentos se aplican una vez elijas e ingreses los datos del medio de pago.</p><button className={`${style.btnpopup}`} onClick={closeModal}>Entendido</button></Modal>, document.getElementById('modal-root'))
            }
        </div>
    )
}