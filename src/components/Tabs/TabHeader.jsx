import { useEffect } from "react";

const TabHeader = ({ toggle, toggleItem }) => {
  useEffect(() => {
    const tabHeaderItems = document.querySelectorAll(".tabs__tab-item");

    function enterTabItem() {
      const tabHeaderIcon = document.querySelector(`#icon-${this.id}`);
      tabHeaderIcon.classList.add("tab__icon--hover");
    }

    function leaveTabItem() {
      const tabHeaderIcon = document.querySelector(`#icon-${this.id}`);
      tabHeaderIcon.classList.remove("tab__icon--hover");
    }

    tabHeaderItems.forEach((item) => {
      item.addEventListener("mouseenter", enterTabItem);
      item.addEventListener("mouseleave", leaveTabItem);
    });
  }, []);

  return (
    <>
      <div className="tabs__header">
        <div className="tabs__header-container">
          <div
            id="tab-1"
            className={toggle === 1 ? "tabs__tab-item tabs__tab-item--active" : "tabs__tab-item"}
            onClick={() => toggleItem(1)}
          >
            <div
              id="icon-tab-1"
              className={toggle === 1 ? "tab__icon tab__icon--door tab__icon--active" : "tab__icon tab__icon--door "}
            ></div>
            <p className="tabs__tab-title">Cancela cuando quieras</p>
          </div>
          <div
            id="tab-2"
            className={toggle === 2 ? "tabs__tab-item tabs__tab-item--active" : "tabs__tab-item"}
            onClick={() => toggleItem(2)}
          >
            <div
              id="icon-tab-2"
              className={
                toggle === 2 ? "tab__icon tab__icon--devices tab__icon--active" : "tab__icon tab__icon--devices"
              }
            ></div>
            <p className="tabs__tab-title">Mira donde sea</p>
          </div>
          <div
            id="tab-3"
            className={toggle === 3 ? "tabs__tab-item tabs__tab-item--active" : "tabs__tab-item"}
            onClick={() => toggleItem(3)}
          >
            <div
              id="icon-tab-3"
              className={toggle === 3 ? "tab__icon tab__icon--price tab__icon--active" : "tab__icon tab__icon--price"}
            ></div>
            <p className="tabs__tab-title">Escoge tu precio</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabHeader;
