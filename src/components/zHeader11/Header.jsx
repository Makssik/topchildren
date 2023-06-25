import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header id="header">
            <div class="container--header">
                <div class="logo-img">
                <img width="100" src="./img/logo-white.png" alt="" />
                </div>
                <button type="button" class="nav-button" data-menu-button>
                <svg>
                    <use
                    class="menu-nav"
                    href="./img/sprite.svg#cross_menu"
                    width="40"
                    ></use>
                    <use
                    class="cross-nav"
                    href="./img/sprite.svg#menu"
                    width="40"
                    ></use>
                </svg>
                </button>
                <div class="navigation" data-menu-button data-menu>
                <ul class="header__list">
                    <li class="list__item">
                        <NavLink className={({ isActive }) => 'header__link ' + (isActive ? 'current' : '')}
                                    to="/">
                                Головна
                        </NavLink>
                    </li>
                    <li class="list__item">
                    <NavLink className="header__link" to="/">Предмети</NavLink>
                    </li>
                    <li class="list__item">
                        <NavLink className={({ isActive }) => 'header__link ' + (isActive ? 'current' : '')}
                                to="/curses">
                            Курси
                        </NavLink>
                    </li>
                    <li class="list__item">
                    <a class="header__link" href="./index.html">Досягнення</a>
                    </li>
                    <li class="list__item">
                    <a class="header__link" href="./index.html">Відгуки</a>
                    </li>
                    <li class="list__item">
                    <a class="header__link" href="./index.html">Про нас</a>
                    </li>
                    <li class="list__item">
                    <a class="header__link" href="#address">Контакти</a>
                    </li>
                </ul>
                </div>
            </div>
            </header>
        </div>
    );
}
 
export default Header;