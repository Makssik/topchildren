import { Container } from '@mui/material';

const GoogleForm = () => {
  return (
    <section id="form" className="form">
      <Container>
        <h2>Подати заявку</h2>
        <div className="wrapper google__form--wrapper">
          <iframe
            title="googleForm"
            className="google__form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSf_cqSExqPuFb8sTQ7CU6EEDuPXQThvSyJkoQrWlUlqcQN9Rg/viewform?embedded=true"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Загрузка…
          </iframe>
        </div>
      </Container>
    </section>
  );
};

export default GoogleForm;
