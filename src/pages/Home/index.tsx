import { OverlayDefault } from '../../components/OverlayDefault';
import { Section } from '../../components/Section';

import { Container } from './styles';

export function Home() {
  return (
      <Container>
          <div>
                  {
                      [
                          {sectionId: "Section One", title: "Build the future", titleTwo: "Join team blue", description: "", textBtn:"Learn more"},
                          {sectionId: "Section Two", title: "Fly to space on", titleTwo: "New Shepard", description: "", textBtn:"Become an astronaut"},
                          {sectionId: "Section Three", title: "New glenn", titleTwo: "Orbital rocket", description: "", textBtn:"Explore new glenn"},
                          {sectionId: "Section Four", title: "Reusable", titleTwo: "Rocket engines", description: "Blue Origin's engines are powering the next generation of rockets for commercial, civil, national security and human spaceflight.", textBtn:"Explore engines"},
                          {sectionId: "Section Five", title: "Introducing", titleTwo: "Orbital reef", description: "Orbital Reef will be the premier mixed-use space station in low Earth orbit. Blue Origin, Sierra Space, Boeing, Redwire Space, Genesis Engineering Solutions, and Arizona State University form the powerful industry and academic team to deliver Orbital Reef in this decade.", textBtn:"Meet orbital reef"},
                      ].map(sectionName => (
                              <Section
                                  key={sectionName.sectionId}
                                  className='bg'
                                  children
                                  overlayNode={
                                      <OverlayDefault
                                          firstTitle={sectionName.title}
                                          secondTitle={sectionName.titleTwo}
                                          description={sectionName.description}
                                          buttonText={sectionName.textBtn}
                                      />
                                  }
                              />
                          )
                      )
                  }
              </div>
          </Container>
  );
}
