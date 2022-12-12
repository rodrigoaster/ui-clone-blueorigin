import { motion } from "framer-motion";
import { Home } from "./pages/Home";
import { GlobalStyles } from "./styles/GlobalStyles";

export function App() {
  return (
    <>
        <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 0.5 }}
        >
            <Home />
        </motion.div>
      <GlobalStyles />
    </>
  )
}

