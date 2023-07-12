// Write your JS code here

import './index.css'

const Header = () => (
  <>
    <nav className="nav-bar">
      <div className="sm-nav-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="logout-sm"
        />
      </div>
      <div className="sm-nav-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
          className="icons-sm"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
          className="icons-sm"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
          className="icons-sm"
        />
      </div>
    </nav>
    <nav className="nav-bar-lg">
      <div className="nav-inner-cont-lg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="logo"
        />
        <ul className="nav-contents-cont-lg">
          <li className="nav-item-lg">Home</li>
          <li className="nav-item-lg">Products</li>
          <li className="nav-item-lg">Cart</li>
          <li>
            <button type="button" className="nav-logout-btn-lg">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </>
)

export default Header
