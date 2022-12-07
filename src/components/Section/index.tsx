import { ReactNode } from 'react';

import { Container } from './styles';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement>{
  children: ReactNode;
}

export function Section({ children, ...props}: SectionProps) {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
}
