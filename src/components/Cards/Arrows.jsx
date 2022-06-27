import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
export const PreviousBtn = (props) => {
  const { className, onClick, style } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdOutlineArrowBackIos style={{ ...style, color: "white", fontSize: "30px" }} />
    </div>
  );
};
export const NextBtn = (props) => {
  const { className, onClick, style } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdOutlineArrowForwardIos style={{ ...style, color: "white", fontSize: "30px" }} />
    </div>
  );
};
