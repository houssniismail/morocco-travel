import React from 'react'
import NavbarComponent from '../components/ui/NavbarComponent'
import AboutUsComponent from '../components/web/AboutUsComponent'

const AboutScreen = () => {
    return (
        <div>
            <NavbarComponent />
            <div>
                <AboutUsComponent />
            </div>
        </div>
    )
}

export default AboutScreen