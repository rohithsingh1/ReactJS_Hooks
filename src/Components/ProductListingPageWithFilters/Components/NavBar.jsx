import React from 'react'
import cart from "../shopping-cart.png"

function NavBar() {
    return (
        <nav className='navContainer' >
            <h2>Product List Page</h2>
            <div>
                <button style={{background: 'none', border: 'none', cursor: 'pointer'}} >
                    <img src={cart} alt='Shopping cart' width={25} height={25} />
                </button>
                (0)
            </div>
        </nav>
    )
}

export default NavBar