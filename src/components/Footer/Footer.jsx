import { Container } from '@mui/material';
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import Logo from '../../asset/images/logo-white.png'

const Footer = () => {
    return ( 
        <footer>
            <Container>
                <div className="footer" id="address">
                    <address className="address">
                        <div className='logo'>
                        <   img src={Logo} alt="" width={180}/>
                        </div>
                        <ul className="address__list">
                            <li className="address__item">
                            <span>м. Бориспіль, вул. Глибоцька 122</span>
                            </li>
                            <li className="address__item">
                                <a href='https://www.instagram.com/veronika_shepetko/'>
                                    Сторінка інстаграм керівника: <u>@veronika_shepetko</u>
                                </a>
                            </li>
                            <li className="address__item">+38(066)359 51 01</li>
                        </ul>
                    </address>
                    <div>
                    <h2 className="title">Наші соцмережі</h2>
                    <ul className="social__list">
                        <li className="social__item--footer">
                            <a href="https://www.instagram.com/topchildren_boryspil/">
                                <AiOutlineInstagram size={'50px'}/>
                            </a>
                        </li>
                        <li className="social__item--footer">
                            <a href="https://www.facebook.com/TopChildren.Boryspil/">
                                <AiFillFacebook size={'50px'} />
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </Container>
        </footer>
     );
}
 
export default Footer;