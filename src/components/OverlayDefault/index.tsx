import * as S from './styles';

import { motion } from 'framer-motion'

import {
    ContainerAnimate,
} from "./styles";

interface OverlayDefaultProps {
  firstTitle: string;
  secondTitle: string;
  description: string;
  buttonText: string;
}

export function OverlayDefault({ firstTitle, secondTitle, buttonText, description }: OverlayDefaultProps) {
    const variants =  {
        variantsSection: {
            first: { opacity: 0, y: 0 },
            last: { opacity: 1, y: -50 },
        },
        variantsButton: {
            first: { opacity: 0, y: -35 },
            last: { opacity: 1, y: -35 },
        }
    }
    return (
      <S.Container
          initial="first"
          whileInView="last"
          viewport={{ once: true, amount: 0.8 }}
          variants={variants.variantsSection}
          transition={{ type: "spring", stiffness: 30 }}
      >
        <S.ContainerBlock>
                <h2>
                    {firstTitle}
                </h2>
            <ContainerAnimate
                initial="first"
                whileInView="last"
                viewport={{ once: true, amount: 0.8 }}
                variants={variants.variantsSection}
                transition={{ type: "spring", stiffness: 30, delay: 0.5 }}
            >
                <h3>
                    {secondTitle}
                </h3>
                <p>
                    {description}
                </p>
            </ContainerAnimate>
            <motion.div
              initial="first"
              whileInView="last"
              viewport={{ once: true, amount: 0.8 }}
              variants={variants.variantsButton}
              transition={{ type: "spring", stiffness: 30, delay: 1.5 }}
          >
            <S.Button>
                <span>
                    {buttonText}
                </span>
            </S.Button>
          </motion.div>
        </S.ContainerBlock>
      </S.Container>
    );
}
