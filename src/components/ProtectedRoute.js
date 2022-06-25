import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";
import Spinner from "./Loaders/Spinner";
import ScreenLoader from "./Loaders/ScreenLoader";
import { motion, AnimatePresence } from "framer-motion";

export function ProtectedRoute({ children }) {
  const variants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  const { user, loading } = useAuth();

  if (loading)
    return (
      <motion.div initial="hidden" animate="visible" exit="hidden" variants={variants}>
        <ScreenLoader />
      </motion.div>
    );

  if (!user) return <Navigate to="/" />;

  return <>{children}</>;
}
