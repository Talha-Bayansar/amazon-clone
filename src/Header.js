import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"

function Header() {
    return (
        <nav className="header">

            {/* logo on the left -> img */}
            <Link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                />
            </Link>
            {/* search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* 3 links */}
            <div className="header__nav">
                {/* 1st link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span>Hello Talha</span>
                        <span>Sign in</span>
                    </div>

                </Link>
                {/* 2st link */}
                {/* 3st link */}
                {/* 4st link */}
            </div>

            {/* basket icon with number */}
        </nav>
    )
}

export default Header
