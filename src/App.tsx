import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import Home from "./pages/home";
import Category from "./pages/Category";
import Give from "./pages/Give";
import Success from "./pages/Success";

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  duration: 0.2,
  ease: easeInOut,
};



export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/category"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Category />
            </motion.div>
          }
        />
        <Route
          path="/give"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Give />
            </motion.div>
          }
        />
        <Route
          path="/success"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Success />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
