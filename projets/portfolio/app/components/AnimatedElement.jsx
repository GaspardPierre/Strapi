import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedElement = ({ children, ...props }) => {
  const [ref, inView] = useInView({
    
    threshold:0.1,
  });

  const variants = {
    visible: { opacity: 1, translateY: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, translateY: 100 },
  };

  return (
    <motion.div
      ref={ref}
      animate={inView ? 'visible' : 'hidden'}
      initial='hidden'
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;
