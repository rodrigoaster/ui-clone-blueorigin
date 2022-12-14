import styled from 'styled-components';

import {motion} from "framer-motion";

export const Container = styled(motion.div)`
    height: 100vh;
  
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerBlock = styled.div`
    > h2 {       
        font-size: 70px;
        letter-spacing: 5px;
    }

    > h3 {
        font-size: 70px;
        letter-spacing: 10px;
    }
`

export const ContainerAnimate = styled(motion.div)`
    h2 {
      font-size: 70px;
    }

    > h3 {
      font-size: 70px;
      padding-top: 20px;
    }

    padding-top: 30px;
`

export const Button = styled.button`
    border: 1px solid #ccc;
  
    padding: 15px 45px;

    text-transform: uppercase;
    color: #fff;

    font-weight: bold;
    letter-spacing: 5px;
  
    position: relative;
  
    ::before, ::after {
      content: " ";
      
      width: 0;
      height: 1px;
      
      background: #fff;
      
      position: absolute;

      transition: 0.2s ease-out ;
    }
  
    ::before {
      bottom: 0;
      right: 0;
    }
  
    ::after {
      top: 0;
      left: 0;
    }
  
    :hover {
      ::before, ::after {
        width: 100%;
      }
    }
  
    > span {
      ::before, ::after {
        content: " ";
        
        width: 1px;
        height: 0;
        
        background: #fff;
        
        position: absolute;

        transition: 0.2s ease-in ;
        
      }
      
      ::before {
        bottom: 0;
        left: 0;
      }
      ::after {
        right: 0;
        top: 0;
      }
      
      :hover {
        ::before, ::after {
          height: 100%;
        }
      }
    }
`
