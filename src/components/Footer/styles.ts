import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  text-align: center;
  
  background: #03d;
  
  color: #fff;
  
  padding: 20px;
`;

export const FooterNavLinks = styled.ul`
  display: flex;
  justify-content: center;

  margin: 0 auto;
  
  > span {
    font-weight: bold;
  }

  @media (max-width: 437px) {
    flex-direction: column;
  }
`
export const FooterItem = styled.li`
  margin-left: 30px;

  @media (max-width: 437px) {
    margin-left: 0;
  }
`
export const FooterLink = styled.a`
  color: #fff;
  
  text-decoration: none;
  
  :hover {
    color: #ccc;
    
    transition: .5s ease-in-out;
  }
`