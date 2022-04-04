import CtaButton from "../Buttons/CtaButton";
import "../../styles/css/Tabs.css";
import { dateIn30Days } from "./dateIn30Days";

const TabContentCta = ({ CTAtext }) => {
  return (
    <div className="tab-content__inner-cta">
      <p className="tab-content__description">{CTAtext}</p>
      <CtaButton text="Mira gratis por 30 días" />
      <p className="tab-content__dynamic-date">Gratis hasta el {dateIn30Days()} *</p>
    </div>
  );
};

export default TabContentCta;
