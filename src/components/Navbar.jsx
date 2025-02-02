import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="fixed-nav-bar w-nav" data-animation="default" data-collapse="medium" data-duration="400">
            <nav className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center">
                <ul className="nav__links">
                    <li><Link className="link" to="/">Home</Link></li>
                    <li><Link className="link" to="/shop">Shop</Link></li>
                    <li><Link className="link" to="/">Pages</Link></li>
                    <li><Link className="link" to="/contact">Contact</Link></li>
                    <li><Link className="link" to="/about">About</Link></li>
                </ul>

                {/* Logo */}
                <div className="nav__logo">
                    <Link to="/">
                        SnapBuy<span>.</span>
                    </Link>
                </div>

                {/* Nav Icons */}
                <div className="nav__icons relative">
                    <span><Link to="/search"><i className="ri-search-2-line"></i></Link></span>
                    <span>
                        <button className='hover:text-red-600 cursor-pointer'><i className="ri-shopping-cart-line"></i></button>
                        <sup className="text-sm inline-block p__0 text-white rounded-full bg-red-600 text-center">0</sup>
                    </span>
                    <span>
                        <Link to="/login"><i className="ri-user-line"></i></Link>
                    </span>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;