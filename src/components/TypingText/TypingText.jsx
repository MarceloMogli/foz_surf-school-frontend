import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../../utils/motion';

 const TypingText = ({ title }) => (
  <motion.p
    variants={textContainer}
    className='title_text'
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export default TypingText