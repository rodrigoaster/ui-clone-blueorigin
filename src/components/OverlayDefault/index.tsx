import { Container } from './styles';

interface OverlayDefaultProps {
  firstTitle: string;
  secondTitle: string;
  buttonText: string;
}

export function OverlayDefault({ firstTitle, secondTitle, buttonText }: OverlayDefaultProps) {
  return (
    <Container>
      <div>
        <h2>
          {firstTitle}
        </h2>
        <h2>
          {secondTitle}
        </h2>
        <button>
          {buttonText}
        </button>
      </div>
    </Container>
  );
}
