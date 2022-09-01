import React from 'react'
import {Button, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HeroStarter() {
  return (
    <section className='hero-starter text-center'>
    <div className='hero-content py-5'>
      <h1 className='display-4'>Foodblog</h1>
      <p className='col-lg-6 mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero maxime voluptatibus, veritatis dolores assumenda sint? Vitae consequuntur illum omnis, ratione ut architecto a rem quisquam voluptatum delectus eos possimus neque.</p>
      <Link to="/recipes"><Button>Explore recipes</Button> </Link>
    </div>
    <Image src="https://www.simplyleb.com/wp-content/uploads/Molokhia-17.jpg" />
  </section>
  )
}

export default HeroStarter