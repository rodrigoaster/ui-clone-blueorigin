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
              {title: 'BUILD THE FUTURE', titleTwo: 'JOIN TEAM BLUE', descriptionText: '', btnText: 'Learn More'},
              {title: 'FLY TO SPACE ON', titleTwo: 'NEW SHEPARD', descriptionText: '', btnText: 'Become an Astronaut'},
              {title: 'NEW GLENN', titleTwo: 'ORBITAL ROCKET', descriptionText: '', btnText: 'Explore New Glenn'},
              {title: 'REUSABLE', titleTwo: 'ROCKET ENGINES', descriptionText: "Blue Origin's engines are powering the next generation of rockets for commercial, civil, national security and human spaceflight.", btnText: 'Explore Engines'},
              {title: 'INTRODUCING', titleTwo: 'ORBITAL REEF', descriptionText: '', btnText: 'Meet Orbital Reef'},
            ].map(sectionName => (
              <Section 
                key={sectionName.title}
                className='bg'
                children={
                  <OverlayDefault 
                    firstTitle={sectionName.title}
                    secondTitle={sectionName.titleTwo}
                    description={sectionName.descriptionText}
                    buttonText={sectionName.btnText}
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
