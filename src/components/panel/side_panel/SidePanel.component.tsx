import React from "react";
import { SidePanelUIProps } from "./SidePanel.interface";
import { useHistory } from "react-router-dom";
import Dashboard from "src/components/dashboard/Dashboard.container";
import "./SidePanel.scss";
import App from "src/components/app/App.container";

function SidePanel(props: SidePanelUIProps): JSX.Element {
  return (
    <App.contextType.Consumer>
      {(app) => (
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
              "col p-0 h-100 sidepanel " +
              (props.isOpen ? "sidepanel--active" : "")
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
                      src={app.logoURL}
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
                    <li
                      className="nav-item"
                      onClick={() => props.setActive(-1)}
                    >
                      Go Back
                    </li>
                    <li className="nav-item">
                      <i className={app.navigation[props.active].icon}></i>
                      app.navigation[props.active].title
                    </li>
                    {app.navigation[props.active].items.map((cur, index) => (
                      <li
                        className={"nav-item"}
                        key={index}
                        onClick={() => app.setPath(cur.path)}
                        onMouseEnter={() =>
                          (document.body.style.cursor = "pointer")
                        }
                        onMouseLeave={() =>
                          (document.body.style.cursor = "default")
                        }
                      >
                        <span
                          className={
                            "nav-link d-flex justify-content-between text-muted align-items-center " +
                            (props.active === index
                              ? "sidepanel__option--active"
                              : "")
                          }
                        >
                          <div>
                            <i className={cur.icon + " fa-fw mr-2"}></i>
                            {cur.name}
                          </div>
                          <i className="fas fa-fw fa-chevron-right"></i>
                        </span>
                      </li>
                    ))}
                  </React.Fragment>
                ) : (
                  app.navigation.map((cur, index) => (
                    <li
                      className={"nav-item"}
                      key={index}
                      onClick={() => props.setActive(index)}
                      onMouseEnter={() =>
                        (document.body.style.cursor = "pointer")
                      }
                      onMouseLeave={() =>
                        (document.body.style.cursor = "default")
                      }
                    >
                      <span
                        className={
                          "nav-link d-flex justify-content-between text-muted align-items-center " +
                          (props.active === index
                            ? "sidepanel__option--active"
                            : "")
                        }
                      >
                        <div>
                          <i className={cur.icon + " fa-fw mr-2"}></i>
                          {cur.title}
                        </div>
                        <i className="fas fa-fw fa-chevron-right"></i>
                      </span>
                    </li>
                  ))
                )}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </App.contextType.Consumer>
  );
}

export default SidePanel;
