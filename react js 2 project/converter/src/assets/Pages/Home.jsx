import React from 'react'
import Header from './Header'
import Main from './Main'
import FooterBottom from './Footer'
function Home({Products}) {
    return (
        <div>
            <Header />
            <Main  Products={Products}/>
            <FooterBottom />
        </div>
    )
}

export default Home