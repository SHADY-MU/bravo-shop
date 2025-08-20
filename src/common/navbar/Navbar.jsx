import { useContext, useEffect , useState } from 'react';
import './navbar.css';
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContext';
import { authContext } from '../../context/AuthContext';
import { themeContext } from '../../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';


function Navbar() {

  const {cartIdes} = useContext(cartContext)

  const [cartItems, setCartItems] = useState(0);

  const {currentUser , loadingDisplayUserData , signout} = useContext(authContext)
  const { theme, toggleTheme } = useContext(themeContext)

  useEffect(() => {
    const total = Object.values(cartIdes).reduce((sum, num) => +sum + +num, 0);
    setCartItems(total);
  }, [cartIdes]);


  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light px-2 px-1" style={{ background: 'var(--secondary-color)' }}>
          <Link className="navbar-brand text-white fw-bold fs-4 py-1 ms-2" href="#">
            Bravo <span style={{ color: 'var(--main-color)' }}>Shop</span>
          </Link>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" href="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={"about"} className="nav-link text-white" href="#">About</Link>
              </li>
              <li className="nav-item">
                <Link to={"shop"} className="nav-link text-white" href="#">Shop</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Product
                </Link>
                <ul className="dropdown-menu p-2 "  aria-labelledby="navbarDropdown">
                  <li><Link to={"fake"} className="dropdown-item py-2 mb-1" href="#">Fake API</Link></li>
                  <li><Link to={"dummy"} className="dropdown-item py-2" href="#">Dummy API</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to={"contact"} className="nav-link text-white" href="#">Contact</Link>
              </li>
            </ul>
            <div className="proccess flex px-1">
              <button aria-label="Toggle theme" onClick={toggleTheme} className='btn btn-outline-dark border text-light d-flex align-items-center me-2'>
                {theme === 'dark' ? <FaSun className='me-1' /> : <FaMoon className='me-1' />}
                <span className='d-none d-md-inline'>{theme === 'dark' ? 'Light' : 'Dark'}</span>
              </button>
              {
                loadingDisplayUserData ? (

                  <div className='flex gap-2'>
                    <div className="spinner-border text-light" role="status"></div>
                    <span className='text-light'>Loading data</span>
                  </div>
                  
                ) : currentUser ? (

                  <div className="dropdown">
                    <button className=" btn btnweb text-white border-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {currentUser.firstName + " " + currentUser.lastName}
                    </button>
                    <ul className="dropdown-menu py-1 px-2">
                      <li><Link to={"/profile"} className="dropdown-item btn bg-success rounded-2 text-white px-0 py-2 text-center" href="#">Profile</Link ></li>
                      <li><button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                       className="dropdown-item btn bg-danger rounded-2 text-white px-0 py-2 text-center my-1" href="#">Singout</button ></li>
                    </ul>
                  </div>

                ) : (

                  <div className='btn-group'>
                    <Link to={"resgister"} className='text-light px-2 py-1 btn btn-outline-dark border'>Register</Link>
                    <Link to={"login"} className='text-light px-2 py-1 btn btn-outline-dark border'>Login</Link>
                  </div>

                )
              }
                <div className='flex gap-2'>
                  <Link className='flex'>
                    <FaHeart className='fs-5 me-1' style={{color:"var(--main-color"}} />
                    <sub className='text-white'>(0)</sub>
                  </Link>
                  <Link to={"cart"} className='flex'>
                    <FaShoppingCart className='fs-5 me-1' style={{color:"var(--main-color"}} />
                    <sub className='text-white'>({cartItems})</sub>
                  </Link>
                </div>
            </div>
          </div>

        </nav>

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Alert !!!</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                Are You Sure
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-danger" onClick={signout} data-bs-dismiss="modal">Confirm</button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Navbar;
