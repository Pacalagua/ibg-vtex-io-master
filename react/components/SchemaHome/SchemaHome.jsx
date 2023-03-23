import React from 'react'

const SchemaHome = () => {
  const ORG_SCHEMA = JSON.stringify({
    "@context": "https://schema.org/",
    "@type": "Organization",
    "name": "IBG",
    "url": "https://www.ibg.com.co/",
    "logo": "https://ibgcol.vtexassets.com/assets/vtex/assets-builder/ibgcol.theme-ibgcol/1.0.47/images/logo-ibgcol___6745a6dc12081262b223cbb50ecb80cb.svg",
    "alternateName": "Iván Botero Gómez",
    "sameAs": [      
      "https://www.facebook.com/HogaresIBG",
      "https://www.instagram.com/hogaresibg/",
      "https://www.youtube.com/user/HogaresIBG"
    ]
});
  return (
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ORG_SCHEMA}} />
  )
}

export { SchemaHome }