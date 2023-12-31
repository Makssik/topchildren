import './style.scss';
import { Routes, Route } from 'react-router-dom';
import HomeView from './components/views/HomeView';
import CursesView from './components/views/CursesView';
import CursesDetailView from './components/views/CursesDetailView';
import AchivmentsView from './components/views/AchivmentsView';
import DisciplinesView from './components/views/DisciplinesView';
import ReviewView from './components/views/ReviewView';
import AboutView from './components/views/AboutView';
import NotFoundView from './components/views/NotFoundView';
import Layout from './components/Layout/';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="education" element={<CursesView />} />
          <Route path="education/:curseId" element={<CursesDetailView />} />
          <Route path="404" element={<NotFoundView />} />
          <Route path="achivments" element={<AchivmentsView />} />
          <Route path="disciplines" element={<DisciplinesView />} />
          <Route path="reviews" element={<ReviewView />} />
          <Route path="about" element={<AboutView />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
