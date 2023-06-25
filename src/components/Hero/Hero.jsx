import { Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Logo from '../../asset/images/logo-white.png'

const Hero = () => {
    return ( 
        <section className="hero">
            <Container maxWidth={'1680px'} disableGutters={true}>
                <div className='logo logo--hero'>
                    <img src={Logo} alt="" width={360}/>
                </div>
                <NavLink to="/about">
                    <button className="hero__button button is-toggle">
                        Дізнатись більше
                    </button>
                </NavLink> 
            </Container>
        </section>
     );
}
 
export default Hero;