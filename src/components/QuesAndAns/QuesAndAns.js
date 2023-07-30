import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@mui/material';

const questionsAndAnswers = [
  {
    question: 'Скільки коштує навчання?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    question: 'У які дні проходять заняття?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    question: 'Яка різниця між базовим та повним курсом?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    question: 'Запитання 4?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export const QuesAndAns = () => {
  const [expanded, setExpanded] = useState(0);
  return (
    <section>
      <Container>
        <h2>У вас залишились запитання?</h2>
        {questionsAndAnswers.map(item => {
          const isOpen = item === expanded;
          return (
            <ul className="qna__list">
              <li>
                <AnimatePresence initial={false}>
                  <motion.div
                    key={item.question}
                    className="qna__ques-placeholder"
                    initial={false}
                    animate={{
                      backgroundColor: isOpen ? '#101010' : '#353535',
                      border: '2px solid #f4cf2c',
                    }}
                    onClick={() => setExpanded(isOpen ? false : item)}
                  >
                    <h3 className="qna__ques-header">{item.question}</h3>
                  </motion.div>
                  {isOpen && (
                    <motion.div
                      className="qna__answer-placeholder"
                      // key={item.answer}
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: 'auto' },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="qna__answer">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          );
        })}
      </Container>
    </section>
  );
};

export default QuesAndAns;
