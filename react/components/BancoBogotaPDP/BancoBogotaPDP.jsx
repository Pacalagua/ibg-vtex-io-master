import React from 'react'
import styles from './styles.css'

const BancoBogotaPDP = () => {
  return (
    <>
      <div className={styles.contenedor__pp}>
        <div className={styles.cont__superintendencia}>
          <img src="https://ibgcol.vteximg.com.br/arquivos/superintendencia-financiera.svg" alt="superintendencia" />
        </div>
        <div className={styles.contenedor__logo}>
          <img src="https://ibgcol.vteximg.com.br/arquivos/logo-banco-bogota.svg" alt="logo banco de bogota" />
        </div>
        <div className={styles.texto__bancob}>
          Llévatelo con Tarjeta de Crédito Banco de Bogotá. Solicita <a href="https://digital.bancodebogota.com/tarjeta-credito/digital/index.html?utm_source=ibg&utm_medium=referral&utm_campaign=pc_banner_ibg&utm_content=home" target="banco_bogota">Aquí</a>
        </div>
      </div>
    </>
  )
}

export { BancoBogotaPDP }

