import React from 'react'

import { Image} from 'react-bootstrap';

function Hero({header, imgSrc}) {
  return (
    <section className='hero-starter text-center'>
        <div className='hero-content py-5'>
          <h1 className='display-4'>{header}</h1>
        </div>
        <Image style={{maxHeight: "300px", objectFit: "cover"}} src={imgSrc} />
  </section>
  )
}

export default Hero