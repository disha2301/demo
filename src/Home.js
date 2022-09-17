import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'

//ES& snippets to do 'rfce'

function Home() {
  return (
    <div className='home'>
      <Banner />

      <div className="home_section">
        <Card 
        src="https://a0.muscache.com/im/pictures/77c3c61e-930a-4e7c-ab4d-59413c1f0b87.jpg?im_w=1200"
        title="Abiansemal,Indonesia"
        description="5,565 kilometers"
        />
        <Card 
        src="https://a0.muscache.com/im/pictures/77c3c61e-930a-4e7c-ab4d-59413c1f0b87.jpg?im_w=1200"
        // src="https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=960"
        title="Sindun-myeon,Icheon-si,South Korea"
        description="5,638 kilometers
        "/>
        <Card
        src="https://a0.muscache.com/im/pictures/77c3c61e-930a-4e7c-ab4d-59413c1f0b87.jpg?im_w=1200"
        title="Tambon Nong Kae, Thailand"
        description="2,989 kilometers" 
        />
      </div>

      <div className="home_section">
        <Card 
        src="https://a0.muscache.com/im/pictures/77c3c61e-930a-4e7c-ab4d-59413c1f0b87.jpg?im_w=1200"
        title="Selat, Indonesia"
        description="5,582 kilometers"
        />
        <Card 
      src="https://a0.muscache.com/im/pictures/77c3c61e-930a-4e7c-ab4d-59413c1f0b87.jpg?im_w=1200"
        title="El Nido, Philippines"
        description="12,452 night"
        />
        <Card 
        src="https://a0.muscache.com/im/pictures/77c3c61e-930a-4e7c-ab4d-59413c1f0b87.jpg?im_w=1200"
        title="Mueang Chiang Mai District, Thailand"
        description="2,748 kilometers"
        />
      </div>

    </div>
  )
}

export default Home
