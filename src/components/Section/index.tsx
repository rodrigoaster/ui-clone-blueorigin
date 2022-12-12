import React, { ReactNode } from 'react';

import { Container } from './styles';
import { motion } from "framer-motion";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement>{
    overlayNode: ReactNode;
}


export function Section({  overlayNode, ...props}: SectionProps) {
    const variants = {
        first: { opacity: 0, y: 0 },
        last: { opacity: 1, y: -20 }
    }

    return (
      <Container {...props}>
        <motion.div
            initial="first"
            whileInView="last"
            viewport={{ once: true, amount: 0.8 }}
            variants={variants}
            transition={{ type: "spring", stiffness: 50 }}
            >
            {overlayNode}
        </motion.div>
      </Container>
  );
}
