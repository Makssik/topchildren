import { Container } from '@mui/material';
import { useParams, Navigate } from 'react-router-dom';
import curses from '../../../db/curses';
import GoogleForm from '../../GoogleForm';

const CursesView = () => {
  const { curseId } = useParams()
  console.log(curseId);
  const foundObject = curses.find(item => item.id === curseId);
  const {nameOfCurse, description} = foundObject
  // отута НЕ РАБОТАИТ
  if (!foundObject) {
    <Navigate to="/404"/>
  }
  return (
    <section className="curses">
      <Container>
        <div className="fakeImg"></div>
        <h2>{`Деталі про ${nameOfCurse} курс`}</h2>
        <p style={{ textAlign: 'left' }}>{description}</p>
        <p>Информация про курс</p>
        <p>{nameOfCurse}</p>
        <GoogleForm/>
      </Container>
    </section>
  );
};

export default CursesView;
