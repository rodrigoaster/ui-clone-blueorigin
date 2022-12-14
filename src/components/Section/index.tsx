import React, { ReactNode } from 'react';

import { Container } from './styles';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement>{
    overlayNode: ReactNode;
}


export function Section({ overlayNode, ...props }: SectionProps) {
    const variantsSection = {
        first: { opacity: 0 },
        last: { opacity: 1 },
    }

    // @ts-ignore
    return (
      <Container {...props}
         initial="first"
         whileInView="last"
         viewport={{ once: true, amount: 0.8 }}
         variants={variantsSection}
         transition={{ type: "spring", stiffness: 50 }}
      >
          {overlayNode}
      </Container>
  );
}
