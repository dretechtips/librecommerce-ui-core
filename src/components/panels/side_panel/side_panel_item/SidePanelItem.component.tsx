import React from 'react'
import { SidePanelItemProps } from './SidePanelItem.interface'

function SidePanelItem(props: SidePanelItemProps) {
  return (
    <li
      className={"nav-item"}
      key={props.index}
      onClick={props.onClick}
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
          (props.isActive
            ? "sidepanel__option--active"
            : "")
        }
      >
        <div>
          <i className={props.icon + " fa-fw mr-2"}></i>
          {props.title}
        </div>
        <i className="fas fa-fw fa-chevron-right"></i>
      </span>
    </li>
  )
}

export default SidePanelItem
