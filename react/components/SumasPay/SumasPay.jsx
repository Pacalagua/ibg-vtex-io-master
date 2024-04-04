import React from 'react'
import styles from './styles.css'

const SumasPay = () => {
  return (
    <>
      <div className={styles.contenedor__sumas}>
        <div className={styles.contenedor__logosumas}>
          <img src="https://ibgcol.vteximg.com.br/arquivos/ids/159097/AF_FLAG_Isotipo_Sumas_pay_-_checkout_2024.svg" alt="logo Su+Pay" />
        </div>
        <div className={styles.texto__sumas}>
          Solicita tu Crédito Sumas Pay 100% digital en menos de 10 minutos. <a href="/formas-de-pago" target="_blank">Saber más</a>
        </div>
      </div>
    </>
  )
}

export { SumasPay }