import { ReactNode } from 'react';

import { Container } from './styles';

interface OverlayDefaultProps {
  firstTitle: string;
  secondTitle: string;
  buttonText: string;
  positionContainer: ReactNode;
}

export function OverlayDefault({ ...props }: OverlayDefaultProps) {
  return (
    <Container>
      <div>
        <h2>First Title</h2>
        <h2>Second Title</h2>
      </div>
      <button>Button</button>
    </Container>
  );
}
