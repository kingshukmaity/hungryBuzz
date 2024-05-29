import React from 'react'
import "./Header.css"

const Header = () => {
  return (
<div className='header'>
    <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>We offer a wide variety of food options, so you are sure to find something to your taste. We also offer a variety of delivery options, so you can get your food delivered to your door or pick it up at the restaurant.</p>
        <button>View Menu</button>
    </div>
</div>
  )
}

export default Header