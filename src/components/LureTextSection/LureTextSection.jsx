import { Container } from '@mui/material';

const LureTextSection = () => {
  return (
    <section>
      <Container>
        <h2>Чому ми?</h2>
        <p style={{ textAlign: 'center' }}>Текст для зацікавлення читача</p>

        <div className="lureTextBlock">
          <p className="lureTextParagrtaph">
            Завжди перед тим, як записати дитину у будь-який гурток, батьки
            запитують:
            <br />
            <span className="lure--accent">"Чим ти хочеш займатися?"</span>
          </p>
          <p className="lureTextParagrtaph">
            Але як може дитина відповісти на це запитання, якщо раніше не була
            на різних гуртках? Якщо не знає, що таке той чи інший напрям?
          </p>
          <p className="lureTextParagrtaph">
            Саме тому 4 роки тому ми вирішили об'єднати багато різних предметів
            у одному Дитячому театрі мод{' '}
            <span className="lure--accent">"TopChildren"</span>
          </p>
          <h3 className="123">У НАС НАВЧАННЯ ДЛЯ ТИХ ХТО ХОЧЕ:</h3>
          <ul className="lure__list">
            <li className="lure__item"> стати впевненим, комунікабельним</li>
            <li className="lure__item"> підняти самооцінку</li>
            <li className="lure__item">бути активними та життєрадісними</li>
            <li className="lure__item">постава</li>
            <li className="lure__item">
              пластичність, відчуття ритму та музики
            </li>
            <li className="lure__item">вміння володіти емоціями</li>
            <li className="lure__item">чітка дикція, гарна вимова</li>
            <li className="lure__item">
              спробувати  себе у зйомках різних фільмів, короткометражних
              фільмів, дизайнерських колекцій одягу або колекцій магазинів одягу
              та взяти участь у показах мод
            </li>
            <li className="lure__item">
              навчитися акторської майстерності, дефіле, хореографії,
              фотопозуванню
            </li>
            <li className="lure__item">
              Makeup/грим(7-18 років), малювання/ліпка/гімнастика (4-7 років)
            </li>
            <li className="lure__item">втілити у життя мрії</li>
          </ul>
          <p className="lureTextParagrtaph">
            Саме тому, якщо Ви хочете, щоб Ваша дитина розвивалась усебічно та
            набула навичок, які знадобляться у житті, то з нетерпінням чекаємо
            Вас у Дитячому  театрі мод "TopChildren"
          </p>
        </div>
      </Container>
    </section>
  );
};

export default LureTextSection;
