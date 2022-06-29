export const shortText = (text) => {
  const shortedText = text.split(". ")[0] + ".";
  return shortedText;
};
