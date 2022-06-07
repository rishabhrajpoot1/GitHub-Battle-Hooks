import React from 'react';
import {NavLink} from 'react-router-dom'

function Header(props) {
    var {darkModeset,darkMode,whiteModeset} = props;
    return (
        <header className={darkMode === true ? " darkcolor" : ""}>
            <div className="container header">
                <nav className=" flex justify_between">
                    <ul className="flex items_center">
                        <li><h3>
                            <NavLink to="/" activeClassName="active">Popular</NavLink>
                        </h3></li>
                        <li><h3>
                            <NavLink to="/battle" activeClassName="active">Battle</NavLink>    
                        </h3></li>
                    </ul>

                    <figure className="brighter">
                        {/* {darkMode === true ? <img onClick={whiteModeset} src="https://cdn-icons.flaticon.com/png/512/881/premium/881115.png?token=exp=1635275806~hmac=c987fbcc0b27dc7d48da960471a5092a" alt="" /> : <img  onClick={darkModeset} src="https://cdn-icons.flaticon.com/png/512/2987/premium/2987996.png?token=exp=1635073156~hmac=a184c70a79d0c0cac09610a453a20d15" alt="" />} */}
                        {darkMode === true ? <i onClick={whiteModeset} className="fas fa-sun"></i> : <i  onClick={darkModeset} className="fas fa-moon"></i>}
                    </figure>
                </nav>
            </div>
        </header>
    )
}

export default Header
