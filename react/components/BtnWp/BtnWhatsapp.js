import React, { useEffect } from 'react'
import style from './style.css'


export const BtnWhatsapp = () => {

    return (
        <div className={style.btnWp}>
            <a href="https://api.whatsapp.com/send?phone=573173729437" target="_blank" className="link-ayuda-header"><img className={style.btnIMG} src="https://ibgcol.vtexassets.com/arquivos/ids/158589/icon-whatsapp.svg" /></a>
        </div>
    )
}
