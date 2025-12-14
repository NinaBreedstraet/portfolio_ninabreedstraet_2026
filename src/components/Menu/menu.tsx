import { motion, AnimatePresence } from "framer-motion";
import styles from "./menu.module.scss";
import { Link } from "react-router";

interface DropdownMenuProps {
  isVisible: boolean;
}

const DropdownMenu = ({ isVisible }: DropdownMenuProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.dropdown}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 10 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <Link to="/digital">Digital</Link>
          <Link to="/objects">Objects</Link>
          <Link to="/publications">Publications</Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropdownMenu;
