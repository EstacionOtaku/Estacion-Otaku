import { useEffect } from "react";

const useVisible = (control, inView) => {
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
};
export const useVisibleOnce = (control, inView) => {
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
};

export default useVisible;
