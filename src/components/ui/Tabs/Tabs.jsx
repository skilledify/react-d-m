import { useState } from "react";

const Tabs = ({ children }) => {
  const buttons = children.filter((child) => child.type === Tabs.Button);
  const contents = children.filter((child) => child.type === Tabs.Content);

  const [activeTab, setActiveTab] = useState(buttons[0]?.props.tabId || "");

  return (
    <div className="tabs">
      <div className="tabs__btn">
        {buttons.map(({ props }) => (
          <button
            key={props.tabId}
            className={`tabs__btn-item ${
              activeTab === props.tabId ? "tabs__btn-item--active" : ""
            }`}
            onClick={() => setActiveTab(props.tabId)}
          >
            {props.label}
          </button>
        ))}
      </div>
      <div className="tabs__content">
        {contents.map(({ props }) =>
          props.tabId === activeTab ? (
            <div
              key={props.tabId}
              className="tabs__content-item tabs__content-item--active"
            >
              {props.children}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

// Теперь Tabs.Button и Tabs.Content просто возвращают свои children
Tabs.Button = ({ children }) => children;
Tabs.Content = ({ children }) => children;

export default Tabs;
