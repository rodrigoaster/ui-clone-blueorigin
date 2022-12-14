import styled from 'styled-components';

import {motion} from "framer-motion";

export const Container = styled(motion.div)`
    .bg:nth-child(1) {
        display: flex;
        justify-content: flex-start;
        
        background: #6F1A07;
        
        padding-left: 120px;
      
        color: #fff;

        h2 {
            font-weight: lighter;
            width: 70%;
            line-height: 1;
        }
        
        h3 {
            line-height: 0.9;
            margin-bottom: 30px;
        }
    }
    .bg:nth-child(2) {
        display: flex;
        justify-content: center;
        text-align: center;

        background: #582707;
        
        color: #fff;
        
        h2 {
            font-weight: lighter;
            line-height: 0.5;
          
            margin-top: 100px;
        }
    }
    .bg:nth-child(3) {
        display: flex;
        justify-content: flex-start;

        background: #65B891;

        padding-left: 120px;

        color: #fff;
      
        h2 {
          line-height: 0.5;
          
          margin-top: 100px;
        }

        h3 {
            font-weight: lighter;
        }
    }
    .bg:nth-child(4) {
        background: #4E878C;

        padding-left: 50px;
      
        color: #fff;
      
        h2 {
            font-weight: lighter;
            width: 70%;
            line-height: 0.5;

            margin-top: 100px;
        }

        p {
            font-size: 1.25rem;
            font-weight: normal;

            width: 60%;

            margin-bottom: 20px;
        }
    }
    .bg:nth-child(5) {
        display: flex;
        justify-content: center;
        text-align: center;

        background: #00241B;

        color: #fff;
      
        h2 {
            font-weight: lighter;
            line-height: 0.5;

            margin-top: 130px;
          
        }

        p {
          font-size: 1.25rem;
          font-weight: normal;

          width: 70%;
        
          text-align: center;
        
          margin: 20px auto;
        }
    }
`;