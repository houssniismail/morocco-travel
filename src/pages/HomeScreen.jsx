import React from 'react'

import HomeComponent from '../components/web/HomeComponent'
import NavbarComponent from '../components/ui/NavbarComponent'

const HomeScreen = () => {
  return (
    <div>
      <NavbarComponent />
      <div>
        <HomeComponent />
      </div>
    </div>
  )
}

export default HomeScreen