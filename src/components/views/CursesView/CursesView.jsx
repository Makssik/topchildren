import { Container } from '@mui/material';
import { motion } from "framer-motion"
import Modal from '../../Modal'
import { useState } from 'react';

const curses = [
    {
        nameOfCurse: 'Базовий',
        privileges: ['Термін навчання 3 місяці', 'Базові навики акторскою майстерністю', 'Lorem ipsum dolor sit amet.', 'Треба ще зробити кнопку КУПИТИ чи щось типу того'],
        fakePrice: '1299',
        realPrice: '999',
        id:'1',
    },
    {
        nameOfCurse: 'Повний',
        privileges: ['Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet consectetur adipisicing.'],
        fakePrice: '1299',
        realPrice: '999',
        id:'2',
    },
]

const CursesView = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

    return ( 
        <section className="curses">
            <Container>
                <h2>Курси</h2>
                <p style={{ textAlign: 'center' }}>Ми пропонуємо 2 курси: <b>Базовий</b> та <b>Повний</b>, в залежності від вмінь та навичок дитини</p>
                <ul className="curses__list">
                    {curses.map(({nameOfCurse, privileges, fakePrice, realPrice})=>{
                        return (
                            <motion.li
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1}}
                                transition={{ duration: 0.5 }}
                                className="curses__item">
                                <h3>{nameOfCurse}</h3>
                                <ul className="privileges__list">
                                {privileges.map((privilege, index)=> {
                                            return(
                                                <li
                                                    key={index} className="privileges__item">
                                                    {privilege}
                                                </li>
                                            )
                                })}                  
                                </ul>
                                <div className="curses__price">
                                                <p className="fakeprice">
                                                    {fakePrice}
                                                </p>
                                                <p className="realprice">
                                                    {realPrice}
                                                </p>
                                </div>
                                <button onClick={openModal} className='modal__button--curses'>Подати заявку</button>
                            </motion.li>
                        )
                    })}
                </ul>
            </Container>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </section>
     );
}
 
export default CursesView;