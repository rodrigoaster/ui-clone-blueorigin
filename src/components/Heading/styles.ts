import styled from "styled-components"

import {motion} from "framer-motion";

export const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  background: #6F1A07;
  
  z-index: 99;
`;

export const Navbar = styled.nav`
  
`

export const NavItem = styled.li`
  
`

export const Navlinks = styled.ul`
    display: flex;
`;

export const Navlink = styled.a`
  font-weight: bold;
  text-transform: uppercase;
  
  cursor: pointer;
  
  color: #fff;
  
  margin-right: 2.188rem;

  position: relative;

  :after {
    content: " ";

    width: 0;
    height: 2px;


    bottom: 0;
    left: 0;

    margin-top: 6px;
    background-color: #fff;

    transition: 0.2s ease-in-out ;

    position: absolute;
  }

  :hover {
    ::after {
      width: 100%;
    }
  }
 
`;

export const LogoHeader = styled.div`
     
`
