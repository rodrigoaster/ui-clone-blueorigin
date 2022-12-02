import { OverlayDefault } from '../../components/OverlayDefault';
import { Section } from '../../components/Section';
import { Wrapper } from '../../components/Wrapper';

import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <Wrapper>
        <div>
          {
            [
              "FIRST SECTION",
              "SECOND SECTION",
              "THIRD SECTION",
              "FOUR SECTION",
              "FIVE SECTION",
            ].map(
              sectionName => (
              <Section 
                key={sectionName}
                children={
                  <OverlayDefault 
                    firstTitle='Teste1'
                    secondTitle='Teste2'
                    buttonText='TesteButton'
                  />
                }
              />
              )
            )
          }
        </div>
      </Wrapper>
    </Container>
  );
}
