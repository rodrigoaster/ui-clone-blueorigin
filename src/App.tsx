import { GlobalStyles } from "./styles/GlobalStyles";

import { Home } from "./pages/Home";
import { Wrapper } from "./components/Wrapper";
import { Heading } from "./components/Heading";

import { motion } from "framer-motion";

export function App() {
    return (
    <Wrapper>
        <Heading />
        <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 0.5 }}
        >
            <Home />
        </motion.div>
      <GlobalStyles />
    </Wrapper>
  )
}

