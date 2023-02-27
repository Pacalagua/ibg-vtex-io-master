import React, { useEffect, useState } from 'react'
import linkStyles from "./style.css"


export const SharePDP = ({ children }) => {

    const [pdp, setPdp] = useState(children)

    useEffect(() => {

        setPdp(pdp)

    }, [])

    return (
        < >
            <div className={linkStyles.sharepdp}>
                {pdp}
            </div>
        </>

    )
}
