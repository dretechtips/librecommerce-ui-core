import React from "react";
import { SidePanelUIProps } from "./SidePanel.interface";
import "./SidePanel.scss";
import SidePanelItem from "./side_panel_item/SidePanelItem.component";
import { useHistory } from "react-router";

function SidePanel(props: SidePanelUIProps): JSX.Element {
  return (
    <div className="sidepanel__container">
      <div
        className={
          "d-print-none sidepanel__backdrop " +
          (props.isOpen ? "sidepanel__backdrop--active" : "")
        }
        onMouseMove={props.slide.capture}
        onMouseDown={props.slide.init}
        onMouseUp={props.slide.end}
        onClick={props.toggleOpen}
      ></div>
      <div
        className={
          "col p-0 h-100 sidepanel " + (props.isOpen ? "sidepanel--active" : "")
        }
        style={{
          minWidth: 225 + "px",
          maxWidth: 225 + "px",
        }}
      >
        <nav>
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <span className="nav-link">
                <a
                  href="javascript:void"
                  onClick={(e) => {
                    e.preventDefault();
                    props.toggleOpen();
                  }}
                >
                  <i className="fa fa-bars fa-2x text-success mx-2"></i>
                </a>
                <img
                  src={props.logoURL}
                  alt="Logo"
                  width={40}
                  className="img-fluid ml-1 align-top"
                />
              </span>
            </li>
          </ul>
        </nav>
        <nav className="sidepanel-list">
          <ul className="nav nav-pills flex-column">
            {props.active !== -1 ? (
              <React.Fragment>
                <SidePanelItem
                  title="Go Back"
                  icon="fas fa-arrow-left"
                  onClick={() => props.setActive(-1)}
                  isActive={false}
                />
                {props.navigation[props.active].items?.map((cur, index) => (
                  <SidePanelItem
                    title={cur.name}
                    icon={cur.name}
                    onClick={() => useHistory().push(cur.path)}
                    isActive={false}
                    index={index}
                  />
                ))}
              </React.Fragment>
            ) : (
              <React.Fragment>
                {props.navigation.map((cur, index) => (
                  <SidePanelItem
                    title={cur.title}
                    icon={cur.icon}
                    onClick={() => props.setActive(index)}
                    isActive={false}
                    index={index}
                  />
                ))}
              </React.Fragment>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SidePanel;
