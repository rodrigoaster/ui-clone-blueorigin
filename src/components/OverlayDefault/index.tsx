import * as S from './styles';

interface OverlayDefaultProps {
  firstTitle: string;
  secondTitle: string;
  description: string;
  buttonText: string;
}

export function OverlayDefault({ firstTitle, secondTitle, buttonText, description }: OverlayDefaultProps) {
  return (
    <S.Container>
      <S.ContainerBlock>
        <h2>
          {firstTitle}
        </h2>
        <h3>
          {secondTitle}
        </h3>
        <p>
          {description}
        </p>
        <S.Button>
          {buttonText}
        </S.Button>
      </S.ContainerBlock>
    </S.Container>
  );
}
