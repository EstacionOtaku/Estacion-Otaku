import { RiArrowDownSLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ expanded, setExpanded, i, data }) => {
  const { title, body, id } = data;
  const isOpen = i === expanded;
  console.log(isOpen);
  return (
    <div className="accordion__item">
      <motion.header initial={false} animate={{ backgroundColor: isOpen ? "#0b1437" : "transparent", borderBottom: isOpen ? "none" : "1px solid rgba(255, 255, 255, 0.416)" }} onClick={() => setExpanded(isOpen ? false : i)} className="accordion-item__header" key={id}>
        <h4 className="accordion-item__title">{title}</h4>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <RiArrowDownSLine className="accordion-item__arrow" />
        </motion.div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            <p className="accordion-item__body">{body}</p>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
