import { Container } from '@mui/material';
import { useState, useEffect, useRef } from 'react';

import { NavLink } from 'react-router-dom'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Logo from '../../asset/images/logo-white.png';

const links = [
    {
        text: 'Головна',
        path: '/',
        id:'1',
    },
    {
        text: 'Предмети',
        path: '/disciplines',
        id:'2',
    },
    {
        text: 'Курси',
        path: '/curses',
        id:'3',
    },
    {
        text: 'Досягнення',
        path: '/achivments',
        id:'4',
    },
    {
        text: 'Відгуки',
        path: '/reviews',
        id:'5',
    },
    {
        text: 'Про нас',
        path: '/about',
        id:'6',
    },
    {
        text: 'contacts',
        path: '/about',
        id:'7',
    },
]

const Header = () => {
    const [nav, setNav] = useState(true);
    //Дальше магия для отключения скрола при открытом меню
    useEffect(() => {
        const handleScroll = () => {
            if (!nav) {
                window.scrollTo(0, 0);
            }
        };

        if (!nav) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('scroll', handleScroll);
        } else {
            document.body.style.overflow = 'unset';
            window.removeEventListener('scroll', handleScroll);
        }

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('scroll', handleScroll);
        };
    }, [nav]);
    
    //Дальше идет магия, которая обрабатывает клик ВНЕ хедера для того что бы закрыть его
    const node = useRef();
    const handleClickOutside = (event) => {
        if (node.current && !node.current.contains(event.target)) {
            setNav(true)

        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);

        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return ( 
        <header className='header'>
            <Container maxWidth='1600px' className='header__container' >
                <div className="header__wrapper">
                    <div className='logo logo--header'>
                        <img src={Logo} alt="" width={100}/>
                    </div>
                    <ul ref={node} className={nav?'header__list':'header__list active'}>
                        {links.map(({text, path, id}) => (
                            <li key={id} className='header__item'>
                                <NavLink onClick={()=>setNav(true)} className={({ isActive }) => 'header__link ' + (isActive ? 'current' : '')} to={path}>
                                    {text}
                                </NavLink>
                            </li>
                        ))}
                        <div className="blur"></div>
                    </ul>
                    <div onClick={() => setNav(!nav)} className='header__button-icon'>
                        {nav?<AiOutlineMenu size={35} />:<AiOutlineClose size={35}/>}
                        
                        
                    </div>
                </div>
            </Container>
        </header>
     );
}
 
export default Header;