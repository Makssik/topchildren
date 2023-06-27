import { Container } from '@mui/material';
import uniqid from 'uniqid';
import modelImg from '../../asset/images/model.jpg';
import photoposImg from '../../asset/images/photopos.jpg';
import makeupImg from '../../asset/images/makeup.jpg';
import defileImg from '../../asset/images/defile.jpg';
import teatrImg from '../../asset/images/teatr.jpg';
import etiketImg from '../../asset/images/etiket.jpg';
import danceImg from '../../asset/images/dance.jpg';

const listOfDisciplines = [
  {
    id: uniqid(),
    title: 'Основи моделінгу',
    text: 'Загальні відомості, план розвитку моделі.',
    imgPath: modelImg,
    altPropPhoto: 'modeling child picture',
  },
  {
    id: uniqid(),
    title: 'Фотопозування',
    text: 'Уроки з фотопозування це один з основних предметів у школі моделей. Адже щоб отримати вдалі кадри важливо не лише професійно знімати, а й правильно позувати. Круті фото народжуються по обидва боки об‘єктиву.',
    imgPath: photoposImg,
    altPropPhoto: 'posing to photo child picture',
  },
  {
    id: uniqid(),
    title: 'Стиль і макіяж',
    text: 'Під час курсу вчимося доглядати за шкірою та створювати свій індивідуальний макіяж. За правилами, але не за шаблоном. Адже кожен з нас бачить свій макіяж по-різному!',
    imgPath: makeupImg,
    altPropPhoto: 'makeup child picture',
  },
  {
    id: uniqid(),
    title: 'Дефіле',
    text: "Основа навчання - це мистецтво дефіле. Воно включає роботу над модельним кроком і м 'язовим корсетом, поставою, розвиток впевненості в собі, стрижня, вміння демонструвати одяг.",
    imgPath: defileImg,
    altPropPhoto: 'defile child picture',
  },
  {
    id: uniqid(),
    title: 'Акторська майстерність',
    text: "Сучасна модель – завжди актриса. Тому акторська майстерність в даний час є одним з обов 'язкових предметів, які вивчають майбутні моделі. Адже саме цей предмет допомагає розкрити акторські навички моделі, на ньому здобуваються вміння виявляти емоції у кадрі.",
    imgPath: teatrImg,
    altPropPhoto: 'emotion child picture',
  },
  {
    id: uniqid(),
    title: 'Етикет',
    text: 'Цей унікальний курс дає дитині знання етикету в різних сферах життя, загальної культури поведінки, допомагає формувати власний імідж і високу самооцінку для того, щоб вона відчувала себе впевнено і комфортно в будь-якій ситуації в будь-якому суспільстві.',
    imgPath: etiketImg,
    altPropPhoto: 'etiket child picture',
  },
  {
    id: uniqid(),
    title: 'Ритм і хореографія',
    text: 'Заняття танцями не лише розвивають музичність, а й допомагають виховати силу волю, комунікабельність та розвинути творчий потенціал. Дійсно, багато досліджень психологів довели, що діти, які займаються танцями, досягають більших успіхів у навчанні, ніж їхні однолітки, а також випереджають їх у загальному розвитку.',
    imgPath: danceImg,
    altPropPhoto: 'dance child picture',
  },
];

const Disciplines = () => {
  return (
    <section>
      <Container>
        <h2>Дисципліни</h2>
        <ul className="disciplines">
          {listOfDisciplines.map(
            ({ id, title, text, imgPath, altPropPhoto }) => {
              return (
                <li className="disciplines__item" key={id}>
                  <img
                    className="disciplines__img"
                    width={180}
                    src={imgPath}
                    alt={altPropPhoto}
                  />
                  <div className="disciplines__description">
                    <h3 className="disciplines__title">{title}</h3>
                    <p className="disciplines__text">{text}</p>
                  </div>
                </li>
              );
            },
          )}
        </ul>
      </Container>
    </section>
  );
};

export default Disciplines;
