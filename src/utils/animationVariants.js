export const fasterDuration = {
  visible: { opacity: 1, transition: { duration: 0.4 } },
  hidden: { opacity: 0 },
};
export const normalDuration = {
  visible: { opacity: 1, transition: { duration: 1 } },
  hidden: { opacity: 0 },
};

export const multipleElVariant = {
  hidden: {
    opacity: 0,
  },
  visible: ({ delay }) => ({
    opacity: 1,
    transition: {
      delay,
      duration: 1,
    },
  }),
};
